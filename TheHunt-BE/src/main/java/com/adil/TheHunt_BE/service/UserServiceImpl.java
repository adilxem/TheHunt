package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.LoginDTO;
import com.adil.TheHunt_BE.dto.UserDTO;
import com.adil.TheHunt_BE.entity.User;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.repository.UserRepository;
import com.adil.TheHunt_BE.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

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
}
