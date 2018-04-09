/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender;

import com.unifun.smssender.dto.SendSmsLogger;
import com.unifun.smssender.exception.ServiceException;

/**
 *
 * @author medineshkatwal
 */
public interface ISmsSenderService {

    public SendSmsLogger sendSms(SendSmsLogger send) throws ServiceException;

    public Iterable<SendSmsLogger> getLogs() throws ServiceException;

    public SendSmsLogger deleteLogs(Long id) throws ServiceException;

    public int clearAllLogs() throws ServiceException;

}
