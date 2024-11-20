package com.adil.TheHunt_BE.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Education {

    private String course;
    private String institution;
    private String location;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private Boolean currentlyStudying;
}
