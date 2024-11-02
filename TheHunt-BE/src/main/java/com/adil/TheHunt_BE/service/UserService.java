package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.LoginDTO;
import com.adil.TheHunt_BE.dto.ResponseDTO;
import com.adil.TheHunt_BE.dto.UserDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;

public interface UserService {

    public UserDTO registerUser (UserDTO userDTO) throws TheHuntException;

    public UserDTO loginUser(LoginDTO loginDTO) throws TheHuntException;

    public Boolean sendOTP(String email) throws Exception;

    public Boolean verifyOTP(String email, String otp) throws TheHuntException;

    public ResponseDTO changePassword(LoginDTO loginDTO) throws TheHuntException;
}
