package com.adil.TheHunt_BE.api;

import com.adil.TheHunt_BE.dto.ProfileDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/profile")
public class ProfileAPI {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/get/{id}")
    public ResponseEntity<ProfileDTO> getProfile (@PathVariable Long id) throws TheHuntException {

        return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<ProfileDTO> updateProfile (@RequestBody ProfileDTO profileDTO) throws TheHuntException {

        return new ResponseEntity<>(profileService.updateProfile(profileDTO), HttpStatus.OK);
    }
}
