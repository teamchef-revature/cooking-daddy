package com.revature.service;

import java.util.Set;

import com.revature.beans.Post;
import com.revature.beans.PostIngredient;
import com.revature.beans.Status;

public interface PostService {

	public Integer addPost(Post p);
	public Set<Post> getPosts();
	public Post getPost(Integer pid);
	public Post updatePost(Post p);
	public Set<Post> getPostsByStatus(Status s);
	
	public Integer addPostIngredient(PostIngredient pi);
	public Set<PostIngredient> getPostIngredients();
	public PostIngredient getPostIngredient(Integer piid);
	public PostIngredient updatePostIngredient(PostIngredient pi);
	public void deletePostIngredient(PostIngredient pi);
	
	public Integer addStatus(Status s);
	public Set<Status> getStatuses();
	public Status getStatus(Integer sid);
	public Status updateStatus(Status s);
}
