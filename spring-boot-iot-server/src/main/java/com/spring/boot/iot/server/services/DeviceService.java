package com.spring.boot.iot.server.services;

public interface DeviceService {

	public String getTelemetry(int tileID);
	public String getDevices();
}
