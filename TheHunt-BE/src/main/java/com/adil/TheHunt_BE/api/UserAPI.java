package com.adil.TheHunt_BE.api;

import com.adil.TheHunt_BE.dto.LoginDTO;
import com.adil.TheHunt_BE.dto.UserDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/user")
public class UserAPI {

    @Autowired
    public UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser (@RequestBody @Valid UserDTO userDTO) throws TheHuntException {

        userDTO = userService.registerUser(userDTO);

        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser (@RequestBody @Valid LoginDTO loginDTO) throws TheHuntException {

        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }

    @PostMapping("/sendOTP/{email}")
    public ResponseEntity<UserDTO> sendOTP (@PathVariable String email) throws TheHuntException {

        userService.sendOTP(email);
    }
}
