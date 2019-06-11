package com.project.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.sf.jasperreports.engine.JRException;

@SpringBootApplication
public class SpringBootProjectsApplication {

	public static void main(String[] args) throws JRException {
		SpringApplication.run(SpringBootProjectsApplication.class, args);
		
		List<String> items = new ArrayList<>();
		items.add("aba nakakabasa na pala ako");
		items.add("ang haba");
		items.add("alana");
		String prefix = "ab";
		List<String> filteredList = items.stream().filter(e -> (e.startsWith(prefix))).collect(Collectors.toList());
		System.out.println(filteredList.toString());
	}	
}
