package com.adil.TheHunt_BE.repository;

import com.adil.TheHunt_BE.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface OTPRepository extends MongoRepository<OTP, String> {

//    OTP CODE --- TO BE REPLACED WITH REDIS IMPLEMENTATION

    List<OTP> findByCreationTimeBefore (LocalDateTime expiry);
}
