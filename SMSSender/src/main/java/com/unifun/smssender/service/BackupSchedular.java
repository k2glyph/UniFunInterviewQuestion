/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.service;

import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 *
 * @author medineshkatwal
 */
@Service
@EnableScheduling
public class BackupSchedular {

    private final Logger log = LoggerFactory.getLogger(BackupSchedular.class);
    @Value("${spring.datasource.database}")
    String dbName;
    @Value("${spring.datasource.username}")
    String dbUser;
    @Value("${spring.datasource.password}")
    String dbPass;

    @Scheduled(cron = "0/10 * * * * *")
    public void backupInEvery30Minute() throws IOException, InterruptedException {

//        String executeCmd = "mysqldump -u " + dbUser + " -p" + dbPass + " -h" + dbHost + " " + dbName + " -r " + System.currentTimeMillis() + ".sql";
//        log.info("Command: {}", executeCmd);
//        Process runtimeProcess = Runtime.getRuntime().exec(executeCmd);
//        int processComplete = runtimeProcess.waitFor();
//        if (processComplete == 0) {
//            log.info("Backup success");
//        } else {
//            log.info("Could not take mysql backup");
//        }
    }
}
