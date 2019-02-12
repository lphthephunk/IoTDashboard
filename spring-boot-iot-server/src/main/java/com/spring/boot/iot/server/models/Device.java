package com.spring.boot.iot.server.models;

import java.util.Date;

import com.spring.boot.iot.server.enums.eDeviceType;

public class Device {

	public String deviceID;
	public String name;
	public String description;
	public eDeviceType deviceType;
	public Boolean isActive;
	public Date lastStateChange;
	
	public Device() {
		
	}

	public String getDeviceID() {
		return deviceID;
	}

	public void setDeviceID(String deviceID) {
		this.deviceID = deviceID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public eDeviceType getDeviceType() {
		return deviceType;
	}

	public void setDeviceType(eDeviceType deviceType) {
		this.deviceType = deviceType;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Date getLastStateChange() {
		return lastStateChange;
	}

	public void setLastStateChange(Date lastStateChange) {
		this.lastStateChange = lastStateChange;
	}
}
