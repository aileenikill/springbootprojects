package com.project.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.sf.jasperreports.engine.JRException;

@SpringBootApplication
public class SpringBootProjectsApplication {

	public static void main(String[] args) throws JRException {
		SpringApplication.run(SpringBootProjectsApplication.class, args);
	}	
}
