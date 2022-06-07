package com.muehl.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;

import com.muehl.exceptions.ResourceNotFound;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;

@Service
public class NameInfoService {

	@Autowired
	ResourceLoader resourceLoader;

	public  String getFile() throws ResourceNotFound, IOException {
		Resource resource = resourceLoader.getResource("classpath:names.txt");
		try {
			File file = resource.getFile();
			String content = new String(Files.readAllBytes(file.toPath()));
			System.out.println(content);
			return content;
		}
		catch(Exception ex) {
			throw new ResourceNotFound("Names file Not Found");
		}
	}
}
