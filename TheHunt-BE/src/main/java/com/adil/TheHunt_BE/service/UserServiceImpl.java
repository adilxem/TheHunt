package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.LoginDTO;
import com.adil.TheHunt_BE.dto.ResponseDTO;
import com.adil.TheHunt_BE.dto.UserDTO;
import com.adil.TheHunt_BE.entity.OTP;
import com.adil.TheHunt_BE.entity.User;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.repository.OTPRepository;
import com.adil.TheHunt_BE.repository.UserRepository;
import com.adil.TheHunt_BE.utility.Data;
import com.adil.TheHunt_BE.utility.Utilities;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws TheHuntException {

        Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());

        if (optional.isPresent()) throw new TheHuntException("USER_FOUND");

        userDTO.setId(Utilities.getNextSequence("users"));

        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        User user = userDTO.toEntity();
        user = userRepository.save(user);

        return user.toDTO();
    }

    @Override
    public UserDTO loginUser(LoginDTO loginDTO) throws TheHuntException {

        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new TheHuntException("USER_NOT_FOUND"));

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) throw new TheHuntException("INVALID_CREDENTIALS");

        return user.toDTO();
    }

    @Override
    public Boolean sendOTP(String email) throws Exception {

        User user = userRepository.findByEmail(email).orElseThrow(() -> new TheHuntException("USER_NOT_FOUND"));

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(email);
        helper.setSubject("OTP for reset password");

        String genOTP = Utilities.generateOTP();

        OTP otp = new OTP(email, genOTP, LocalDateTime.now());

        otpRepository.save(otp);

        helper.setText(Data.getMessageBody(genOTP, user.getName()), true);

        mailSender.send(mimeMessage);

        return true;
    }

    @Override
    public Boolean verifyOTP(String email, String otp) throws TheHuntException {

        OTP otpEntity = otpRepository.findById(email).orElseThrow(() -> new TheHuntException("OTP_NOT_FOUND"));

        if (!otpEntity.getOtpCode().equals(otp)) throw new TheHuntException("OTP_INCORRECT");

        return true;
    }

    @Override
    public ResponseDTO changePassword(LoginDTO loginDTO) throws TheHuntException {

        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new TheHuntException("USER_NOT_FOUND"));

        user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));

        userRepository.save(user);

        return new ResponseDTO("Password changed successfully");
    }


//    OTP CODE --- TO BE REPLACED WITH REDIS IMPLEMENTATION

    @Scheduled(fixedRate = 60000)
    public void removeExpiredOTPS () {

        LocalDateTime expiry = LocalDateTime.now().minusMinutes(5);

        List<OTP> expiredOTPs = otpRepository.findByCreationTimeBefore(expiry);

        if (!expiredOTPs.isEmpty()) {

            otpRepository.deleteAll(expiredOTPs);

            System.out.println("removed " + expiredOTPs.size() + " expired OTPs");
        }
    }
}
