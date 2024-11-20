package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.LoginDTO;
import com.adil.TheHunt_BE.dto.ResponseDTO;
import com.adil.TheHunt_BE.dto.UserDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;

public interface UserService {

    UserDTO registerUser (UserDTO userDTO) throws TheHuntException;

    UserDTO loginUser(LoginDTO loginDTO) throws TheHuntException;

    Boolean sendOTP(String email) throws Exception;

    Boolean verifyOTP(String email, String otp) throws TheHuntException;

    ResponseDTO changePassword(LoginDTO loginDTO) throws TheHuntException;
}
