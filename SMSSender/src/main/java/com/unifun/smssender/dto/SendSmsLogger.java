/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.dto;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author medineshkatwal
 */
@Entity
@Getter
public class SendSmsLogger {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Setter
    private Date sendDate;
    private String senderMsisdn;
    private String receiverMsisdn;
    private String message;
    @Setter
    private Date deliveryDate;
    @Setter
    private int deliveryStatusNumber;
    @Setter
    private String deliveryStatusMessage;

    public SendSmsLogger() {
    }

    public SendSmsLogger(Date sendDate, String senderMsisdn, String receiverMsisdn, String message) {
        this.sendDate = sendDate;
        this.senderMsisdn = senderMsisdn;
        this.receiverMsisdn = receiverMsisdn;
        this.message = message;
    }

    public SendSmsLogger(Date sendDate, String senderMsisdn, String receiverMsisdn, String message, Date deliveryDate, int deliveryStatusNumber) {
        this.sendDate = sendDate;
        this.senderMsisdn = senderMsisdn;
        this.receiverMsisdn = receiverMsisdn;
        this.message = message;
        this.deliveryDate = deliveryDate;
        this.deliveryStatusNumber = deliveryStatusNumber;
    }

}
