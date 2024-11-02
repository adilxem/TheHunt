package com.adil.TheHunt_BE.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "OTP")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OTP {

    @Id
    public String email;
    public String otpCode;
    public LocalDateTime creationTime;
}
