package com.revature.service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.beans.Quality;
import com.revature.beans.Season;
import com.revature.data.IngredientDAO;

@Service
public class IngredientServiceHibernate implements IngredientService {
	@Autowired
	private IngredientDAO idao;

	@Override
	public Integer addIngredient(Ingredient ingredient) {
		return idao.addIngredient(ingredient);
	}

	@Override
	public Set<Ingredient> getIngredients() {
		return idao.getIngredients();
	}

	@Override
	public Ingredient getIngredient(Integer id) {
		return idao.getIngredient(id);
	}

	@Override
	public Ingredient updateIngredient(Ingredient ingredient) {
		return idao.updateIngredient(ingredient);
	}

	@Override
	public Category getCategory(Integer id) {
		return idao.getCategory(id);
	}

	@Override
	public Set<Category> getCategories() {
		return idao.getCategories();
	}

	@Override
	public Integer addCategory(Category category) {
		return idao.addCategory(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return idao.updateCategory(category);
	}

	@Override
	public Flavor getFlavor(Integer id) {
		return idao.getFlavor(id);
	}

	@Override
	public Set<Flavor> getFlavors() {
		return idao.getFlavors();
	}

	@Override
	public Integer addFlavor(Flavor flavor) {
		return idao.addFlavor(flavor);
	}

	@Override
	public Flavor updateFlavor(Flavor flavor) {
		return idao.updateFlavor(flavor);
	}

	@Override
	public Quality getQuality(Integer id) {
		return idao.getQuality(id);
	}

	@Override
	public Set<Quality> getQualities() {
		return idao.getQualities();
	}

	@Override
	public Integer addQuality(Quality quality) {
		return idao.addQuality(quality);
	}

	@Override
	public Quality updateQuality(Quality quality) {
		return idao.updateQuality(quality);
	}

	@Override
	public Season getSeason(Integer id) {
		return idao.getSeason(id);
	}

	@Override
	public Set<Season> getSeasons() {
		return idao.getSeasons();
	}

	@Override
	public Integer addSeason(Season season) {
		return idao.addSeason(season);
	}

	@Override
	public Season updateSeason(Season season) {
		return idao.updateSeason(season);
	}

	@Override
	public PersonIngredient updatePersonIngredient(PersonIngredient ping) {
		return idao.updatePersonIngredient(ping);
	}

	@Override
	public void deletePersonIngredient(PersonIngredient ping) {
		idao.deletePersonIngredient(ping);
	}

	@Override
	public Set<PersonIngredient> getStarterIngredients(Integer personID) {
		Set<PersonIngredient> starts = new HashSet<PersonIngredient>();

		// default 5 ingredients, 4 set and 2 random
		PersonIngredient minRice = new PersonIngredient();
		minRice.setIngredient(getIngredient(3));
		minRice.setInventory(3);
		minRice.setPerson_id(personID);
		PersonIngredient lettuce = new PersonIngredient();
		lettuce.setIngredient(getIngredient(7));
		lettuce.setInventory(3);
		lettuce.setPerson_id(personID);
		PersonIngredient bBeans = new PersonIngredient();
		bBeans.setIngredient(getIngredient(14));
		bBeans.setInventory(3);
		bBeans.setPerson_id(personID);
		PersonIngredient potato = new PersonIngredient();
		potato.setIngredient(getIngredient(16));
		potato.setInventory(3);
		potato.setPerson_id(personID);
		PersonIngredient randomIng = new PersonIngredient();
		Random rdm = new Random();
		randomIng.setIngredient(getIngredient(rdm.nextInt(67) + 1));
		randomIng.setInventory(1);
		randomIng.setPerson_id(personID);

		starts.add(minRice);
		starts.add(lettuce);
		starts.add(bBeans);
		starts.add(potato);
		starts.add(randomIng);

		for (PersonIngredient pi : starts) {
			pi.setId(addPersonIngredient(pi));
		}

		return starts;
	}
	
	//initial try to write front end random function in Java if you want to have it somewhat match the front end
	private Ingredient randIng() {
		List<Ingredient> ingredients = new ArrayList<Ingredient>(getIngredients());
		List<Quality> qualities = new ArrayList<Quality>(getQualities());
		Random rdm = new Random();
		Integer randInt = rdm.nextInt(qualities.size());
		Predicate<Ingredient> pr = i -> (i.getQuality().getId() > randInt)||(!inAnySeason(i.getSeasons()));
		ingredients.removeIf(pr);
		Integer randInd = rdm.nextInt(ingredients.size());
		return ingredients.get(randInd-1);
	}

	private Boolean inSeason(Season s) {
		LocalDateTime now = LocalDateTime.now(ZoneId.ofOffset("", ZoneOffset.UTC));
		LocalDateTime start;
		LocalDateTime end;
		if (s.getTimeStart() != null) {
			start = LocalDateTime.ofEpochSecond(s.getTimeStart(), 0, ZoneOffset.UTC);
			if (s.getRecurring() == 1) {
				start = start.withYear(now.getYear());
			}
		} else {
			start = null;
		}
		if (s.getTimeStart() != null) {
			end = LocalDateTime.ofEpochSecond(s.getTimeEnd(), 0, ZoneOffset.UTC);
			if (s.getRecurring() == 1) {
				end = end.withYear(now.getYear());
			}
		} else {
			end = null;
		}
		if (start == null|| start.isBefore(now)) {
			if (end == null|| end.isAfter(now)|| start.isAfter(end)) {
				return true;
			}
		} else {
			if (end != null&&(start.isAfter(end))) {
				if (end.isAfter(now)) {
					return true;
				}
			}
		}
		return false;
	}
	
	private Boolean inAnySeason(Set<Season> ss) {
		if (ss == null || ss.size()==0) {
			return true;
		}
		for (Season s: ss) {
			if (inSeason(s)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public Integer addPersonIngredient(PersonIngredient ping) {
		return idao.addPersonIngredient(ping);
	}

}
