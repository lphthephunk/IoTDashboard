package com.spring.boot.iot.server.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.gson.Gson;
import com.spring.boot.iot.server.enums.eDeviceType;
import com.spring.boot.iot.server.models.Device;

@Service
public class FireStoreDeviceService implements DeviceService {

	@Override
	public String getTelemetry(int tileID) {
		return null;
	}

	@Override
	public String getDevices() {
		try {
			ApiFuture<QuerySnapshot> query = FireStoreInitializer.fireStoreDB.collection("devices").get();
			QuerySnapshot querySnapshot = query.get();	
			System.out.println(querySnapshot);
			List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
			List<Device> jsonReturn = new ArrayList<Device>();
			for (QueryDocumentSnapshot document:documents) {
				Device device = new Device();
				
				device.setDeviceID(document.getId());
				device.setName(document.getString("name"));
				device.setDescription(document.getString("description"));
				device.setDeviceType(eDeviceType.values()[document.getLong("device_type").intValue()]);
				device.setIsActive(document.getBoolean("is_active"));
				device.setLastStateChange((Date)document.get("last_state_change"));
				
				jsonReturn.add(device);
			}
			Gson gson = new Gson();

			return gson.toJson(jsonReturn);			
		}catch(Exception ex) {
			return ex.getMessage();
		}
	}

}
