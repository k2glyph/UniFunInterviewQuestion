/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.controller;

import com.unifun.smssender.exception.ServiceException;
import lombok.Getter;
import lombok.Setter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

/**
 *
 *
 * @author medineshkatwal
 */
@ControllerAdvice
public class BaseController {

    private final Logger log = LoggerFactory.getLogger(BaseController.class);

    /**
     *
     * @param ex
     * @return
     */
    @ExceptionHandler({ServiceException.class, HttpMessageNotReadableException.class, HttpRequestMethodNotSupportedException.class, MethodArgumentTypeMismatchException.class})
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Message handleServiceException(Exception ex) {
        log.info("Request handleServiceException to translate exception to readable form");
        Message message = new Message();
        message.setResult("error");
        message.setMessage(ex.getMessage());
        return message;
    }

    /**
     *
     */
    private class Message {

        @Getter
        @Setter
        private String result;
        @Getter
        @Setter
        private String message;

    }
}
