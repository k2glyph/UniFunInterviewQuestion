/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.service;

import com.unifun.smssender.Application;
import com.unifun.smssender.ISmsSenderService;
import com.unifun.smssender.dto.SendSmsLogger;
import com.unifun.smssender.exception.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unifun.smssender.repo.SendSmsLoggerRepository;
import com.unifun.smssender.util.Constant;
import com.unifun.smssender.util.Utility;
import java.util.Date;
import java.util.HashMap;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author medineshkatwal
 */
@Service
public class SmsSenderSevice implements ISmsSenderService {

    private final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    private SendSmsLoggerRepository dao;
    private RestTemplate template;

    public SmsSenderSevice() {
        template = new RestTemplate();
    }

    @Override
    public Iterable<SendSmsLogger> getLogs() throws ServiceException{
        return dao.findAll();
    }

    @Override
    public SendSmsLogger sendSms(SendSmsLogger send) throws ServiceException{
        try {
        log.info("Request send sms from:{} to:{}", send.getSenderMsisdn(), send.getReceiverMsisdn());
        send.setSendDate(new Date());

//        Insert the log before requesting kennal
        SendSmsLogger saved = dao.save(send);

        HashMap<String, String> parameter = new HashMap<>();
        parameter.put("to", send.getSenderMsisdn());
        parameter.put("from", send.getSenderMsisdn());
        parameter.put("text", send.getMessage());

//     Generating the url for get request with append the parameter
        String url = Constant.createUrl(parameter);

        String response = template.getForObject(url, String.class);
        String[] parseResponse = Utility.parseResponse(response);
        saved.setDeliveryStatusNumber(Integer.valueOf(parseResponse[0]));
        saved.setDeliveryStatusMessage(parseResponse[1]);
        saved.setDeliveryDate(new Date());

        //Update the log after response arrived;
        SendSmsLogger updated = dao.save(saved);

        return updated;
        }catch(Exception ex) {
            throw new ServiceException(ex.getMessage());
        }

    }

    @Override
    public SendSmsLogger deleteLogs(Long id) throws ServiceException {
        try {
            Optional<SendSmsLogger> response = dao.findById(id);
            if (response.isPresent()) {
                dao.delete(response.get());
                return response.get();
            } else {
                throw new Exception("Not Found");
            }
        } catch (Exception ex) {
            throw new ServiceException(ex.getMessage());
        }
    }

    @Override
    public int clearAllLogs() throws ServiceException {
        try {
            dao.deleteAll();
            return 1;
        } catch (Exception ex) {
            throw new ServiceException(ex.getMessage());
        }
    }

}
