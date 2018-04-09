/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.util;

import java.util.HashMap;

/**
 *
 * @author medineshkatwal
 */
public class Constant {

    public static String BASE_URL = "http://kannel:13013/cgi-bin/sendsms?";
    public static String USERNAME = "dinesh";
    public static String PASSWORD = "tester";

    public static String createUrl(HashMap<String, String> parameter) {
        StringBuilder url = new StringBuilder(BASE_URL);
        url.append("username=").append(USERNAME)
                .append("&password=").append(PASSWORD);
        parameter.keySet().forEach((param) -> {
            url.append("&").append(param).append("=").append(parameter.get(param));
        });
        return url.toString();
    }
}
