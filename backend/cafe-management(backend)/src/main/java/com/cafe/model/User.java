package com.cafe.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "User")
public class User 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	private String password;
	private String email;
	private String name;
	private String address;
	private String phone;
	private boolean enabled=true;
	
	
	
	

}
