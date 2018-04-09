/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author medineshkatwal
 */
public class Utility {

    private static final Logger LOGGER = LoggerFactory.getLogger(Utility.class);
    
    public static String[] parseResponse(String response) {
        LOGGER.info("Request parse response:{}", response);
        String [] parseResponse = new String[2];
        String status = response.substring(0, 1);
        String statusMessage=response.substring(3, response.length());
        parseResponse[0]=status;
        parseResponse[1]=statusMessage;
        LOGGER.info("Response after status:{} message:{}", status, statusMessage);
        return parseResponse;
    }
}
