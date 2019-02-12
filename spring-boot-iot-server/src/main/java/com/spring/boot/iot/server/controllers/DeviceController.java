package com.spring.boot.iot.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.boot.iot.server.services.DeviceService;

@Controller
@RequestMapping("/devices")
public class DeviceController {
		
	@Autowired
	DeviceService deviceService;

	@RequestMapping(method = RequestMethod.GET, value = "/getTelemetry/{tileID}")
	public String getTelemetryData(@RequestParam(value = "tileID", required = true) int tileID) {
		return this.deviceService.getTelemetry(tileID);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/getDevices")
	public String getDevices() {
		System.out.println(this.deviceService.getDevices());
		return this.deviceService.getDevices();
	}
}
