package com.adil.TheHunt_BE.entity;

import com.adil.TheHunt_BE.dto.ApplicationStatus;

import java.time.LocalDateTime;

public class Applicant {

    private Long applicantId;
    private LocalDateTime timestamp;
    private ApplicationStatus applicationStatus;
}
