package com.cafe.service;

import java.util.List;

import com.cafe.model.Product;

public interface ProductService {
	
	public Product addProduct(Product p);
	
	public List<Product> getAllProduct();

}
