package com.cafe.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cafe.model.User;
import com.cafe.repo.UserRepo;
import com.cafe.service.UserService;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	
	
	public User addUser(User u) {
		
		return userRepo.save(u);
	}

	
	public User getUserByEmail(String email) {
	
		 return userRepo.findByEmail(email);
	}


	public User login(String email, String password) {
		
		return  userRepo.findByEmailAndPassword(email,password);
		
	}

}
