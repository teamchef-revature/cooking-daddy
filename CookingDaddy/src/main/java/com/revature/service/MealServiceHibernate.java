package com.revature.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeComponent;
import com.revature.beans.Equipment;
import com.revature.beans.Ingredient;
import com.revature.beans.Meal;
import com.revature.beans.Person;
import com.revature.beans.PersonIngredient;
import com.revature.beans.Quality;
import com.revature.data.MealDAO;
import com.revature.data.QualityDAO;

@Service
public class MealServiceHibernate implements MealService {
	@Autowired
	private MealDAO mealDAO;
	
	@Autowired
	private QualityDAO qd;

	@Autowired
	private PersonService pserv;
	
	@Autowired
	private IngredientService iserv;

	@Override
	public Set<Recipe> getRecipes() {
		return mealDAO.getRecipes();
	}

	@Override
	public Recipe getRecipe(Integer id) {
		return mealDAO.getRecipe(id);
	}

	@Override
	public Recipe updateRecipe(Recipe meal) {
		return mealDAO.updateRecipe(meal);
	}

	@Override
	public Integer addRecipe(Recipe meal) {
		return mealDAO.addRecipe(meal);
	}
	
	@Override
	public Integer addMeal(Meal personMeal) {
		return mealDAO.addMeal(personMeal);
	}
	/*
	@Override
	public Meal updateMeal(Meal personMeal) {
		return mealDAO.updateMeal(personMeal);
	}
	*/
	
	// good luck
	@Override
	public Meal cookMeal(List<Ingredient> ingredients, Equipment equipment, Person p) {
		Meal cookedMeal = null;
		//keeps track of ingredients used in the meal
		List<Ingredient> ingredientBowl = new ArrayList<>();
		
		p = pserv.getPersonById(p.getId()); // get persistent object
		
		Set<Recipe> recipes = this.getRecipes();
		rec: for(Recipe r : recipes) {
			List<RecipeComponent> sortedComponents = sortComponents(r.getComponent());
			for(RecipeComponent c : sortedComponents) {
				ing: for(Ingredient i : ingredients ) {
					// if the current component of the recipe is a specific ingredient
					if(c.getIngredient() != null) {
						if(i.equals(c.getIngredient())) {
							ingredientBowl.add(i);
							ingredients.remove(i);
							// since we found a match, we are done with the 
							// current component. we don't need to look at
							// any more ingredients.
							break ing;
						}
					} // if the current component has flavor + category
					else if (c.getFlavor() != null && c.getCategory() != null) {
						// if exact category match
						if(c.getFlavor().equals(i.getFlavor()) && 
								c.getCategory().equals(i.getCategory()) ) { 
							ingredientBowl.add(i);
							ingredients.remove(i);
							break ing;
						} // if the ingredient has a parent category
						else if(i.getCategory().getParent() != null) {
							// if parent category match
							if(c.getCategory().equals(i.getCategory().getParent()) &&
									c.getFlavor().equals(i.getFlavor())) {
								ingredientBowl.add(i);
								ingredients.remove(i);
								break ing;
							}
						}
					} // if the current component just has flavor
					else if (c.getFlavor() != null) {
						if(c.getFlavor().equals(i.getFlavor())) {
							ingredientBowl.add(i);
							ingredients.remove(i);
							break ing;
						}
					} // if the current component just has category
					else if (c.getCategory() != null) {
						// if exact category match
						if(c.getCategory().equals(i.getCategory())) {
							ingredientBowl.add(i);
							ingredients.remove(i);
							break ing;
						} // if the ingredient has a parent category
						else if(i.getCategory().getParent() != null) {
							// if parent category match
							if(c.getCategory().equals(i.getCategory().getParent())) {
								ingredientBowl.add(i);
								ingredients.remove(i);
								break ing;
							}
						}
					} // if the current component is ANY
					else {
						// these means that we are at the end of the recipe
						// components. we no longer have risk of using
						// potentially-needed more-specific ingredients
						ingredientBowl.add(i);
						ingredients.remove(i);
						break ing;
					}
				}
			}
			// did we satisfy this recipe? if we have the same amount
			// of ingredients in the bowl as in the recipe components,
			// we have all of the necessary ingredients to cook this meal.
			if (ingredientBowl.size() == sortedComponents.size()) {
				ingredients.addAll(ingredientBowl);
				ingredientBowl.clear();
				cookedMeal = new Meal();
				// set this recipe to the cooked meal
				cookedMeal.setRecipe(r);
				// set the used ingredients to the cooked meal
				cookedMeal.setIngredients(new HashSet<Ingredient>(ingredients));
				// set the meal quality
				cookedMeal.setQuality(generateQuality(equipment.getQuality().getId(), ingredients));
				// now we decide if we are going to cook this recipe
				// or keep searching. adds a little bit of randomness
				// in the case of multiple recipes being possible with
				// the same ingredients set
				Random rand = new Random();
				if(rand.nextBoolean()) {
					// we stop searching through recipes and move forward
					// with our current cooked meal. if the random is false,
					// we continue searching through recipes (unless we already
					// have searched the whole master cookbook)
					break rec;
				}
			} // if we didn't satisfy the recipe, we still need to put back the ingredients
			else {
				ingredients.addAll(ingredientBowl);
				ingredientBowl.clear();
			}
		}
		
		// if we never succeeded in finding any successful recipes
		if (cookedMeal == null) {
			// we cook mush!!
			cookedMeal = new Meal();
			cookedMeal.setRecipe(mealDAO.getRecipeByName("Mush"));
			cookedMeal.setIngredients(new HashSet<Ingredient>(ingredients));
			cookedMeal.setQuality(generateQuality(equipment.getQuality().getId(), ingredients));
		}
		
		// we need to decrement the player's used ingredients
		Set<PersonIngredient> personIngredients = p.getIngredients();
		for(PersonIngredient ping : personIngredients) {
			for(Ingredient i : ingredients) {
				if (i.equals(ping.getIngredient())) {
					if(ping.getInventory() > 0) {
						ping.setInventory(ping.getInventory() - 1);
						iserv.updatePersonIngredient(ping);
					}
					if(ping.getInventory() <= 0) {
						// if ingredients have inventory of zero, remove from DB
						iserv.deletePersonIngredient(ping);
					}
				}
			}
		}
		// if any ingredients have inventory of zero, they must be removed
		personIngredients.removeIf((PersonIngredient ping) -> ping.getInventory() <= 0);
		
		// check if player has meals
		if(!(mealDAO.getMealsByPerson(p).isEmpty())) {
			Boolean mealAdded = false;
			// check if player already has this meal
			Set<Meal> personMeals = mealDAO.getMealsByPerson(p);
			for(Meal m : personMeals) {
				if(m.getRecipe() == cookedMeal.getRecipe() && 
					m.getIngredients() == cookedMeal.getIngredients() &&
					m.getQuality() == cookedMeal.getQuality()) {
					m.setInventory(m.getInventory() + 1);
					mealDAO.updateMeal(m);
					p.setMeals(personMeals);
					
					p.setIngredients(personIngredients);
					pserv.updatePerson(p);
					mealAdded = true;
					break;
				}
			}
			// if we didn't find the meal in their meals
			if(!mealAdded) {
				cookedMeal.setInventory(1);
				cookedMeal.setPersonId(p.getId());
				mealDAO.addMeal(cookedMeal);
				personMeals.add(cookedMeal);
				p.setMeals(personMeals);
				p.setIngredients(personIngredients);
				pserv.updatePerson(p);
				mealAdded = true; // for consistency; we don't need it anymore
			}
		} // if they have no cooked meals at all yet
		else {
			cookedMeal.setInventory(1);
			cookedMeal.setPersonId(p.getId());
			mealDAO.addMeal(cookedMeal);
			
			Set<Meal> personMeals = new HashSet<Meal>();
			personMeals.add(cookedMeal);
			p.setMeals(personMeals);
			p.setIngredients(personIngredients);
			pserv.updatePerson(p);
		}
		
		return cookedMeal;
	}
	
	private List<RecipeComponent> sortComponents (Set<RecipeComponent> rcs) {
		List<RecipeComponent> sortedComponents = new ArrayList<RecipeComponent>();
		
		for(RecipeComponent rc : rcs) {
			if(sortedComponents.isEmpty()) {
				sortedComponents.add(rc);
			}
			else {
				// if the component has a specific ingredient
				if(rc.getIngredient() != null) {
					// add that to the front of the list always
					sortedComponents.add(0, rc);
				} // if the component has a flavor and category
				else if(rc.getFlavor() != null &&
						rc.getCategory() != null) {
					// add that after ingredients
					int index = 0;
					int startLength = sortedComponents.size();
					sortcomp: for(RecipeComponent sc : sortedComponents) {
						// if the current sorted component has an ingredient
						if (sc.getIngredient() != null) {
							// we move to the next index
							index++;
						} // if the current sc does not have an ingredient
						else {
							// we insert it at the current index and break
							sortedComponents.add(index, rc);
							break sortcomp;
						}
					}
					// if there were only ingredients in the list so far,
					// we didn't get to add the new one within above loop,
					// so we must add it to the end. basically if the
					// sorted components are still the same size, we did
					// not add it yet, so we now do
					if (sortedComponents.size() == startLength) {
						sortedComponents.add(rc);
					}
				} // if it has only a flavor or only a category
				else if(rc.getFlavor() != null || 
						rc.getCategory() != null){
					// add that after flavor + category
					int index = 0;
					int startLength = sortedComponents.size();
					sortcomp: for(RecipeComponent sc : sortedComponents) {
						// if the current sorted component has ingredient OR 
						// has both flavor + category
						if (sc.getIngredient() != null ||
								( sc.getFlavor() != null && sc.getCategory() != null) ) {
							// we move to the next index
							index++;
						} // if the current sc does not have one of the above
						else {
							// we insert it at the current index and break
							sortedComponents.add(index, rc);
							break sortcomp;
						}
					}
					// if we didn't add anything yet, we have to add
					// our new component still
					if (sortedComponents.size() == startLength) {
						sortedComponents.add(rc);
					}
				} // if the component is any
				else {
					// literally just add to the end
					sortedComponents.add(rc);
				}
			}
		}
		
		return sortedComponents;
	}
	
	private Quality generateQuality(Integer equipQuality, List<Ingredient> ingredients) {
		int sum = equipQuality;
		for(Ingredient i : ingredients) {
			sum += i.getQuality().getId();
		}
		int qualityId = sum/ingredients.size();
		// if qualityId somehow isn't actually a quality id that exists
		if(qualityId < 1 || qualityId > 8) {
			// we just set it to the middle quality :(
			// could probably find a better way to do this but
			// honestly i don't think it's possible to reach
			// into this if statement at this point anyway
			qualityId = 4;
		}
		return qd.getQualityById(qualityId);
	}

	@Override
	public Integer serveMeal(Meal m, Person p) {
		Integer score = 0;
		
		Integer mealQuality = m.getQuality().getId();
		
		Random rand = new Random();
		int npc = rand.nextInt(5);
		switch(npc) {
		case 0: // "DOG"
			score = mealQuality + rand.nextInt(5);
			break;
		case 1: // "GRANDMA"
			if(rand.nextInt(2) == 0)
				score = mealQuality + rand.nextInt(4);
			else
				score = mealQuality - rand.nextInt(2);
			break;
		case 2: // "ADULT"
			if(rand.nextInt(2) == 0)
				score = mealQuality + rand.nextInt(3);
			else
				score = mealQuality - rand.nextInt(3);
			break;
		case 3: // "CHILD"
			if(rand.nextInt(2) == 0)
				score = mealQuality + rand.nextInt(2);
			else
				score = mealQuality - rand.nextInt(4);
			break;
		case 4: // "GORDON RAMSAY"
			score = mealQuality - rand.nextInt(5);
			break;
		}
		
		p = pserv.getPersonById(p.getId());
		// increment meals served
		if(p.getMealsServed() != null) {
			p.setMealsServed(p.getMealsServed() + 1);
		}
		else {
			p.setMealsServed(1);
		}
					
		// if they haven't gotten a chef rating yet
		if(p.getChefRating() == null || p.getChefRating() == 0) {
			// they just get a score based on current meal
			p.setChefRating(score);
		} // if they already have a score
		else {
			// their score is averaged with their current rating
			p.setChefRating((score + p.getChefRating()) / 2);
		}
		
		// decrement meal inventory
		m.setInventory(m.getInventory() - 1);
		
		m.setRecipe(mealDAO.getRecipe(m.getRecipe().getId()));
		
		mealDAO.updateMeal(m);
		
		pserv.updatePerson(p);
		
		return score;
	}
}
