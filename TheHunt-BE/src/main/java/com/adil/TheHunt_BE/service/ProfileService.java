package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.ProfileDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;

import java.util.List;

public interface ProfileService {

    public Long createProfile (String email) throws TheHuntException;

    public ProfileDTO getProfile (Long id) throws TheHuntException;

    public ProfileDTO updateProfile (ProfileDTO profileDTO) throws TheHuntException;

    List<ProfileDTO> getAllProfiles();
}
