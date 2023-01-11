package com.cafe.service;

import com.cafe.model.User;

public interface UserService {
	
	public User addUser(User u);
	
	public User getUserByEmail(String email);
	
	public User login(String email,String password);

}
