/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.controller;

import com.unifun.smssender.ISmsSenderService;
import com.unifun.smssender.dto.SendSmsLogger;
import com.unifun.smssender.exception.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author medineshkatwal
 */
@RestController
@RequestMapping("/api")
public class SmsSenderController {

    @Autowired
    private ISmsSenderService service;

    @RequestMapping(value = "/getlogs", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Iterable<SendSmsLogger> getLogs() throws ServiceException {
        return service.getLogs();
    }

    @RequestMapping(value = "/sendsms", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public SendSmsLogger sendSms(@RequestBody SendSmsLogger sms) throws ServiceException {
        return service.sendSms(sms);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public SendSmsLogger delete(@PathVariable(value = "id") Long id) throws ServiceException {
        return service.deleteLogs(id);
    }

    @RequestMapping(value = "/deleteall", method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public int deleteAll() throws ServiceException {
        return service.clearAllLogs();
    }

}
