package com.cafe.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cafe.model.Product;
import com.cafe.repo.ProductRepo;
import com.cafe.service.ProductService;


@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	private ProductRepo pr;
	
	
	public Product addProduct(Product p)
	{
		return pr.save(p);
				
	}

	
	public List<Product> getAllProduct() {

		return pr.findAll();
	}

}
