package com.spring.boot.iot.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.spring.boot.iot.server.services.FireStoreInitializer;

@SpringBootApplication
public class SpringBootIotServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootIotServerApplication.class, args);
		
		new FireStoreInitializer();
	}

}

