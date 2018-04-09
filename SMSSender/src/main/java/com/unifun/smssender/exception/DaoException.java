/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.exception;

/**
 * DaoException is the class which extends BaseException class and used only
 * particular method which is required to us. method with message, cause,
 * (message and cause), and one with no parameter.
 *
 * @author medineshkatwal
 */
public class DaoException extends BaseException {

    /**
     * This constructor will take message String as a parameter and called
     * BaseException class message parameter constructor.
     *
     * @param message is the String text or special message given by user.
     */
    public DaoException(String message) {
        super(message);
    }

    /**
     * This constructor will take message String as a parameter and object of
     * Throwable i.e cause and called BaseException class message parameter and
     * throwable object in constructor of BaseException class.
     *
     * @param message is the String text or special message given by user.
     * @param cause is the object of throwable cause
     */
    public DaoException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * This constructor object of Throwable i.e cause as parameter and called
     * BaseException class throwable object in constructor of BaseException
     * class.
     *
     * @param cause is the object of throwable cause
     */
    public DaoException(Throwable cause) {
        super(cause);
    }

}
