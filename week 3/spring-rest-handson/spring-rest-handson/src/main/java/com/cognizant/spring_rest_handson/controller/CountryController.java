package com.cognizant.spring_rest_handson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_rest_handson.bean.Country;

@RestController
public class CountryController {

    @Autowired
    private Country country;

    @GetMapping("/country")
    public Country getCountry() {
        return country;
    }
}