package com.adil.TheHunt_BE.api;

import com.adil.TheHunt_BE.dto.LoginDTO;
import com.adil.TheHunt_BE.dto.ResponseDTO;
import com.adil.TheHunt_BE.dto.UserDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.service.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
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


//    REGISTER REQUEST

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser (@RequestBody @Valid UserDTO userDTO) throws TheHuntException {

        userDTO = userService.registerUser(userDTO);

        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }


//    LOGIN REQUEST

    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser (@RequestBody @Valid LoginDTO loginDTO) throws TheHuntException {

        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }


//  OTP REQUEST

    @PostMapping("/sendOTP/{email}")
    public ResponseEntity<ResponseDTO> sendOTP (@PathVariable @Email(message = "{user.email.invalid}") String email) throws Exception {

        userService.sendOTP(email);

        return new ResponseEntity<>(new ResponseDTO("OTP sent on the given email"), HttpStatus.OK);
    }


//    OTP VERIFICATION RESPONSE

    @GetMapping("/verifyOTP/{email}/{otp}")
    public ResponseEntity<ResponseDTO> verifyOTP (@PathVariable @Email(message = "{user.email.invalid}") String email, @PathVariable @Pattern(regexp = "^[0-9]{6}$", message = "{otp.invalid}") String otp) throws TheHuntException {

        userService.verifyOTP(email, otp);

        return new ResponseEntity<>(new ResponseDTO("OTP verified!"), HttpStatus.OK);
    }


//    CHANGE PASSWORD REQUEST

    @PostMapping("/changePassword")
    public ResponseEntity<ResponseDTO> changePassword (@RequestBody @Valid LoginDTO loginDTO) throws TheHuntException {

//        loginDTO me user ka email uske new password ke saath accept karenge, loginDTO is liye kyun ki loginDTO email or password ka object hai
//        service me pehle check karenge ki entered email wala user hai ya nhi, agar user exist karta hai to jo new password user ne enter kiya hai usko encode karke database me save (update) kar denge
//        new password set karne ke baad User object ke andar ki property (password) change ho chuki hai, is liye user ko repository me firse save (update) karenge

        return new ResponseEntity<>(userService.changePassword(loginDTO), HttpStatus.OK);
    }
}
