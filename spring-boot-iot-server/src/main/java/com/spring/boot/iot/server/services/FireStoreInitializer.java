package com.spring.boot.iot.server.services;

import java.io.FileInputStream;
import java.io.InputStream;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

public class FireStoreInitializer {

	public static Firestore fireStoreDB;
	
	public FireStoreInitializer() {
		try {		
			InputStream serviceAccount = new FileInputStream("src/main/resources/firebaseCreds.json");
			GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
			FirebaseOptions options = new FirebaseOptions.Builder()
			    .setCredentials(credentials)
			    .build();
			FirebaseApp.initializeApp(options);
			
			FireStoreInitializer.fireStoreDB = FirestoreClient.getFirestore();
	
		}catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
	}
}
