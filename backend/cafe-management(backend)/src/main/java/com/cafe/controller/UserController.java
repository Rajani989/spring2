package com.cafe.controller;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.model.User;



@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	com.cafe.service.UserService us;
	
	
	@PostMapping("/addUser")
	public User registerDetails(@RequestBody User u) throws Exception
	{
		String tempEmail=u.getEmail();
		if(tempEmail!=null && !"".equals(tempEmail))
		{
			User e=us.getUserByEmail(tempEmail);
			if(e!=null)
			{
				throw new Exception("Email id already registered!!!");
			}
		}
		return us.addUser(u);
		
	}
	
	
	@PostMapping("/login")
	public User login(@RequestBody User u) throws Exception
	{
		String tEmail=u.getEmail();
		String tPassword=u.getPassword();
		User ep=null;
		if(tEmail!=null && tPassword!=null)
		{
			ep= us.login(tEmail, tPassword);
			
		}
		if(ep==null)
		{
			throw new Exception("User dosen't exists!!!! OR Bad credential!!!");
		}
		return ep;
	}
	
	
}
