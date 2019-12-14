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
import com.revature.beans.Quality;
import com.revature.utils.HibernateUtil;

@Component
public class IngredientHibernate implements IngredientDAO{
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Integer addIngredient(Ingredient i) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(i);
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
	public Set<Ingredient> getIngredients() {
		Session s = hu.getSession();
		String query = "from Ingredient";
		Query<Ingredient> q = s.createQuery(query, Ingredient.class);
		List<Ingredient> ingredients = q.list();
		s.close();
		return new HashSet<Ingredient>(ingredients);
	}

	@Override
	public Ingredient getIngredient(Integer i) {
		Session s = hu.getSession();
		Ingredient ing = s.get(Ingredient.class, i);
		s.close();
		return ing;
	}

	@Override
	public Ingredient updateIngredient(Ingredient i) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(i);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return i;		
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
		System.out.println(categories);
		return new HashSet<Category>(categories);
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
	public Integer addFlavor(Flavor flavor) {
		Integer response = null;
		Session session = hu.getSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			response = (Integer) session.save(flavor);
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
}
