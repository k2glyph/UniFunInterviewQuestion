/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.service;

import com.unifun.smssender.ISmsSenderService;
import com.unifun.smssender.Application;
import com.unifun.smssender.dto.SendSmsLogger;
import com.unifun.smssender.exception.ServiceException;
import java.util.Date;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author medineshkatwal
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = Application.class)
public class SmsSenderSeviceTest {

    @Autowired
    private ISmsSenderService service;
    private static Long addSmsId;

    public SmsSenderSeviceTest() {
    }

    @Test
    public void ASendSms() throws ServiceException {
        SendSmsLogger sms = new SendSmsLogger(new Date(), "123", "456", "Here is the test message");
        SendSmsLogger sendSms = service.sendSms(sms);
        Assert.assertNotNull(sendSms);
        SmsSenderSeviceTest.addSmsId = sendSms.getId();
    }

    @Test
    public void BGetLogs() throws ServiceException {

        Iterable<SendSmsLogger> sendSms = service.getLogs();
        Assert.assertTrue(sendSms.iterator().hasNext());
    }

    @Test
    public void CDeleteLogs() throws ServiceException {

        SendSmsLogger sendSms = service.deleteLogs(SmsSenderSeviceTest.addSmsId);
        Assert.assertTrue(sendSms.getId().equals(SmsSenderSeviceTest.addSmsId));
    }

    @Test
    public void DASendSms() throws ServiceException {
        SendSmsLogger sms = new SendSmsLogger(new Date(), "123", "456", "Here is the test message");
        SendSmsLogger sendSms = service.sendSms(sms);
        Assert.assertNotNull(sendSms);
    }
    @Test
    public void DDeleteall() throws ServiceException {
        
        int sendSms = service.clearAllLogs();
        Assert.assertNotNull(sendSms);
    }
}
