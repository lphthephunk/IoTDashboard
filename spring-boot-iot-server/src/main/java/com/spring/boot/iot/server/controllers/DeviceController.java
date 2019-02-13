package com.spring.boot.iot.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.iot.server.models.Device;
import com.spring.boot.iot.server.services.Callback;
import com.spring.boot.iot.server.services.DeviceService;
import com.spring.boot.iot.server.services.FirestoreCallbackImpl;

import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/devices")
@CrossOrigin
public class DeviceController {
		
	@Autowired
	DeviceService deviceService;

	@RequestMapping(method = RequestMethod.GET, value = "/getTelemetry/{tileID}")
	public String getTelemetryData(@RequestParam(value = "tileID", required = true) int tileID) {
		return this.deviceService.getTelemetry(tileID);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/getDevices")
	public String getDevices() {
		return this.deviceService.getDevices();		
	}
}
