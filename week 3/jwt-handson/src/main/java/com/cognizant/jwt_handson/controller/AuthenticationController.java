package com.cognizant.jwt_handson.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwt_handson.util.JwtUtil;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        // Authorization header format:
        // Basic dXNlcjpwd2Q=

        String encodedCredentials = authHeader.substring(6);

        byte[] decodedBytes =
                java.util.Base64.getDecoder().decode(encodedCredentials);

        String credentials = new String(decodedBytes);

        String username = credentials.split(":")[0];

        String token = jwtUtil.generateToken(username);

        Map<String, String> map = new HashMap<>();
        map.put("token", token);

        return map;
    }
}