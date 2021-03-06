package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.beans.Quality;
import com.revature.beans.Season;
import com.revature.utils.HibernateUtil;

@Component
public class IngredientHibernate implements IngredientDAO{
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Set<Ingredient> getIngredients() {
		Session s = hu.getSession();
		String query = "from Ingredient";
		Query<Ingredient> q = s.createQuery(query, Ingredient.class);
		List<Ingredient> ingredients = q.list();
		s.close();
		return new HashSet<Ingredient>(ingredients);
	}

	@Override
	public Ingredient getIngredient(Integer id) {
		Session s = hu.getSession();
		Ingredient ing = s.get(Ingredient.class, id);
		s.close();
		return ing;
	}
	
	@Override
	public Integer addIngredient(Ingredient ingredient) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(ingredient);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return r;
	}

	@Override
	public Ingredient updateIngredient(Ingredient ingredient) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(ingredient);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return ingredient;		
	}

	@Override
	public Category getCategory(Integer id) {
		Session session = hu.getSession();
		Category category = session.get(Category.class, id);
		session.close();
		return category;
	}

	@Override
	public Set<Category> getCategories() {
		Session session = hu.getSession();
		String q = "from Category";
		Query<Category> query = session.createQuery(q, Category.class);
		List<Category> categories = query.list();
		session.close();
		return new HashSet<Category>(categories);
	}

	@Override
	public Integer addCategory(Category category) {
		Integer response = null;
		Session session = hu.getSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			response= (Integer) session.save(category);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
		return response;
	}
	
	@Override
	public Category updateCategory(Category category) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(category);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return category;
	}
	
	@Override
	public Flavor getFlavor(Integer id) {
		Session session = hu.getSession();
		Flavor flavor = session.get(Flavor.class, id);
		session.close();
		return flavor;
	}

	@Override
	public Set<Flavor> getFlavors() {
		Session session = hu.getSession();
		String q = "from Flavor";
		Query<Flavor> query = session.createQuery(q, Flavor.class);
		List<Flavor> flavors = query.list();
		return new HashSet<Flavor>(flavors);
	}

	@Override
	public Integer addFlavor(Flavor flavor) {
		Integer response = null;
		Session session = hu.getSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			response = (Integer) session.save(flavor);
			System.out.println(response);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
		} finally {
			session.close();
		}
		return response;
	}
	
	@Override
	public Flavor updateFlavor(Flavor flavor) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(flavor);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return flavor;
	}

	@Override
	public Quality getQuality(Integer id) {
		Session session = hu.getSession();
		Quality quality = session.get(Quality.class, id);
		session.close();
		return quality;
	}

	@Override
	public Set<Quality> getQualities() {
		Session session = hu.getSession();
		String q = "from Quality";
		Query<Quality> query = session.createQuery(q, Quality.class);
		List<Quality> qualities = query.list();
		return new HashSet<Quality>(qualities);
	}

	@Override
	public Integer addQuality(Quality quality) {
		Integer response = null;
		Session session = hu.getSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			response = (Integer) session.save(quality);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
		} finally {
			session.close();
		}
		return response;
	}

	@Override
	public Quality updateQuality(Quality quality) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(quality);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return quality;
	}

	@Override
	public Integer addPersonIngredient(PersonIngredient pi) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(pi);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return r;
	}

	@Override
	public PersonIngredient updatePersonIngredient(PersonIngredient pi) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(pi);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return pi;		
	}

	@Override
	public Season getSeason(Integer id) {
		Session session = hu.getSession();
		Season season = session.get(Season.class, id);
		session.close();
		return season;
	}

	@Override
	public Set<Season> getSeasons() {
		Session session = hu.getSession();
		String q = "from Season";
		Query<Season> query = session.createQuery(q, Season.class);
		List<Season> seasons = query.list();
		return new HashSet<Season>(seasons);
	}

	@Override
	public Integer addSeason(Season season) {
		Integer response = null;
		Session session = hu.getSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			response = (Integer) session.save(season);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
		} finally {
			session.close();
		}
		return response;
	}

	@Override
	public Season updateSeason(Season season) {
    Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.saveOrUpdate(season);
      tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
    return season;
  }

	public void deletePersonIngredient(PersonIngredient pi) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.delete(pi);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
    }
	}
}
