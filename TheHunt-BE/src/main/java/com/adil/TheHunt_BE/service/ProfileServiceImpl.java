package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.ProfileDTO;
import com.adil.TheHunt_BE.entity.Profile;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.repository.ProfileRepository;
import com.adil.TheHunt_BE.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service("profileService")
public class ProfileServiceImpl implements ProfileService{

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Long createProfile(String email) throws TheHuntException {

        Profile profile = new Profile();

        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());

        profileRepository.save(profile);

        return profile.getId();
    }

    @Override
    public ProfileDTO getProfile(Long id) throws TheHuntException {

        return profileRepository.findById(id).orElseThrow(() -> new TheHuntException("PROFILE_NOT_FOUND")).toDTO();
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws TheHuntException {

        profileRepository.findById(profileDTO.getId()).orElseThrow(() -> new TheHuntException("PROFILE_NOT_FOUND"));

        profileRepository.save(profileDTO.toEntity());

        return profileDTO;
    }
}
