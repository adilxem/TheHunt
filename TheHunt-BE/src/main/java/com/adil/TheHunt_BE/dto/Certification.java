package com.adil.TheHunt_BE.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Certification {

    private String name;
    private String issuer;
    private LocalDate issueDate;
    private String certificateId;
}
