/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.unifun.smssender.exception;

/**
 * Base Exception is the abstract class which extends Exception class and used
 * only particular method which is required to us. method with message, cause,
 * (message and cause), and one with no parameter.
 *
 * @author medineshkatwal
 */
public abstract class BaseException extends Exception {

    /**
     * This constructor will not take any parameter it called Exception class
     * default constructor.
     */
    public BaseException() {
        super();
    }

    /**
     * This constructor will take message String as a parameter and called
     * Exception class message parameter constructor.
     *
     * @param message is the String text or special message given by user.
     */
    public BaseException(String message) {
        super(message);
    }

    /**
     * This constructor will take message String as a parameter and object of
     * Throwable i.e cause and called Exception class message parameter and
     * throwable object in constructor of Exception class.
     *
     * @param message is the String text or special message given by user.
     * @param cause is the object of throwable cause
     */
    public BaseException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * This constructor object of Throwable i.e cause as parameter and called
     * Exception class throwable object in constructor of Exception class.
     *
     * @param cause is the object of throwable cause
     */
    public BaseException(Throwable cause) {
        super(cause);
    }

}
