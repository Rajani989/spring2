package com.cafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import com.cafe.model.Product;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
 com.cafe.service.ProductService ps;
	
	
	@GetMapping("/all")
	public List<Product> getallProductDetails()
	{
		return ps.getAllProduct();
	}
	
	
	@PostMapping("/add")
	public Product addPro(@RequestBody Product p)
	{
		return ps.addProduct(p);
	}
}
