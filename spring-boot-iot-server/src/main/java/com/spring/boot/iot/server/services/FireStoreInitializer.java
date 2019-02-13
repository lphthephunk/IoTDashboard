package com.spring.boot.iot.server.services;

import java.io.FileInputStream;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class FireStoreInitializer {
	
	public FireStoreInitializer() {
		try {		
			FileInputStream serviceAccount = new FileInputStream("src/main/resources/firebaseCreds.json");

			FirebaseOptions options = new FirebaseOptions.Builder()
			    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
			    .setDatabaseUrl("https://iot-dashboard-d4427.firebaseio.com/")
			    .build();

			FirebaseApp.initializeApp(options);
		}catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
	}
}
