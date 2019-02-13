package com.spring.boot.iot.server.services;

public class FirestoreCallbackImpl implements Callback {

	public FirestoreCallbackImpl() {}
	
	@Override
	public void onCallback(String jsonObject) {
		System.out.println(jsonObject);
	}

}
