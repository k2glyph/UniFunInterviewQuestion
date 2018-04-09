/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.repo;

import com.unifun.smssender.dto.SendSmsLogger;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

/**
 *
 * @author medineshkatwal
 */
@Service
public interface SendSmsLoggerRepository extends CrudRepository<SendSmsLogger, Long> {
    
}
