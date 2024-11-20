package com.adil.TheHunt_BE.dto;

import com.adil.TheHunt_BE.entity.Profile;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Base64;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDTO {

    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private String picture;
    private List<String> skills;
    private List<Education> educations;
    private List<Experience> experiences;
    private List<Certification> certifications;
    private List<Long> savedJobs;

    public Profile toEntity () {

        return new Profile (this.id, this.name, this.email, this.jobTitle, this.company, this.location, this.about, this.picture != null ? Base64.getDecoder().decode(this.picture) : null, this.skills, this.educations, this.experiences, this.certifications, this.savedJobs);
    }
}
