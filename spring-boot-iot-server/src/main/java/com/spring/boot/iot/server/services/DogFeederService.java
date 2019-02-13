package com.spring.boot.iot.server.services;

public interface DogFeederService extends DeviceActionsService {

	public void feed(Long interval);
}
