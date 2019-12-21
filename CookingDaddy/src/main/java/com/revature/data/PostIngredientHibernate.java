package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Post;
import com.revature.beans.PostIngredient;
import com.revature.beans.Status;
import com.revature.utils.HibernateUtil;

@Component
public class PostIngredientHibernate implements PostDAO {

	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Integer addPost(Post p) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(p);
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
	public Set<Post> getPosts() {
		Session s = hu.getSession();
		String query = "from Post";
		Query<Post> q = s.createQuery(query, Post.class);
		List<Post> posts = q.list();
		s.close();
		return new HashSet<Post>(posts);
	}

	@Override
	public Post getPost(Integer pid) {
		Session s = hu.getSession();
		Post p = s.get(Post.class, pid);
		s.close();
		return p;
	}

	@Override
	public Post updatePost(Post p) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			p= (Post) s.merge(p);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return p;		
	}

	@Override
	public Set<Post> getPostsByStatus(Status s) {
		Session se = hu.getSession();
		String query = "from Post where status_id = :status";
		Query<Post> q = se.createQuery(query, Post.class);
		q.setParameter("status", s.getId());
		List<Post> posts = q.list();
		se.close();
		return new HashSet<Post>(posts);
	}

	@Override
	public Integer addPostIngredient(PostIngredient pi) {
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
	public Set<PostIngredient> getPostIngredients() {
		Session s = hu.getSession();
		String query = "from Post_Ingredient";
		Query<PostIngredient> q = s.createQuery(query, PostIngredient.class);
		List<PostIngredient> postIngredients = q.list();
		s.close();
		return new HashSet<PostIngredient>(postIngredients);
	}

	@Override
	public PostIngredient getPostIngredient(Integer piid) {
		Session s = hu.getSession();
		PostIngredient pi = s.get(PostIngredient.class, piid);
		s.close();
		return pi;
	}

	@Override
	public PostIngredient updatePostIngredient(PostIngredient pi) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			pi= (PostIngredient) s.merge(pi);
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
	public Integer addStatus(Status s) {
		Integer r = null;
		Session se = hu.getSession();
		Transaction tx = null;
		try {
			tx = se.beginTransaction();
			r = (Integer) se.save(s);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			se.close();
		}
		return r;
	}

	@Override
	public Set<Status> getStatuses() {
		Session s = hu.getSession();
		String query = "from Status";
		Query<Status> q = s.createQuery(query, Status.class);
		List<Status> statuses = q.list();
		s.close();
		return new HashSet<Status>(statuses);
	}

	@Override
	public Status getStatus(Integer sid) {
		Session se = hu.getSession();
		Status s = se.get(Status.class, sid);
		se.close();
		return s;
	}

	@Override
	public Status updateStatus(Status s) {
		Session se = hu.getSession();
		Transaction tx = null;
		try {
			tx = se.beginTransaction();
			s= (Status) se.merge(s);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			se.close();
		}
		return s;		
	}

}
