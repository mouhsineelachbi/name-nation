package com.muehl.controllers;
import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.muehl.exceptions.ResourceNotFound;
import com.muehl.services.NameInfoService;

@RestController
@RequestMapping("/api")
public class NameInfoController {
	
	@Autowired
	NameInfoService service;
	
	@GetMapping("/getNames")
	public ResponseEntity<String> getNames() throws ResourceNotFound, IOException {
		return ResponseEntity.ok(this.service.getFile());
	}

}
