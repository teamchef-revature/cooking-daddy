package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Post;
import com.revature.beans.PostIngredient;
import com.revature.beans.Status;
import com.revature.data.PostDAO;

@Service
public class PostServiceHibernate implements PostService {
	@Autowired
	PostDAO pd;

	@Override
	public Integer addPost(Post p) {
		Integer pid = pd.addPost(p);
		for(PostIngredient pi: p.getIngredients()) {
			pi.setPostid(pid);
			pd.addPostIngredient(pi);
		}
		return pid;
	}

	@Override
	public Set<Post> getPosts() {
		return pd.getPosts();
	}

	@Override
	public Post getPost(Integer pid) {
		return pd.getPost(pid);
	}

	@Override
	public Post updatePost(Post p) {
		Post ori = pd.getPost(p.getId());
		Set<PostIngredient> dels= ori.getIngredients();
		Set<PostIngredient> adds= p.getIngredients();
		dels.removeAll(adds);
		adds.removeAll(ori.getIngredients());
		System.out.println(dels.toString() + ' ' + adds.toString());
		for(PostIngredient pi: dels) {
			pd.deletePostIngredient(pi);
		}
		for(PostIngredient pi: adds) {
			pi.setPostid(p.getId());
			pd.addPostIngredient(pi);
		}
		return pd.updatePost(p);
	}

	@Override
	public Set<Post> getPostsByStatus(Status s) {
		return pd.getPostsByStatus(s);
	}

	@Override
	public Integer addPostIngredient(PostIngredient pi) {
		return pd.addPostIngredient(pi);
	}

	@Override
	public Set<PostIngredient> getPostIngredients() {
		return pd.getPostIngredients();
	}

	@Override
	public PostIngredient getPostIngredient(Integer piid) {
		return pd.getPostIngredient(piid);
	}

	@Override
	public PostIngredient updatePostIngredient(PostIngredient pi) {
		return pd.updatePostIngredient(pi);
	}

	@Override
	public Integer addStatus(Status s) {
		return pd.addStatus(s);
	}

	@Override
	public Set<Status> getStatuses() {
		return pd.getStatuses();
	}

	@Override
	public Status getStatus(Integer sid) {
		return pd.getStatus(sid);
	}

	@Override
	public Status updateStatus(Status s) {
		return pd.updateStatus(s);
	}

	@Override
	public void deletePostIngredient(PostIngredient pi) {
		pd.deletePostIngredient(pi);
	}

}
