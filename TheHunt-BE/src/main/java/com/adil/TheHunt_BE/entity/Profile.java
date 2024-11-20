package com.adil.TheHunt_BE.entity;

import com.adil.TheHunt_BE.dto.Certification;
import com.adil.TheHunt_BE.dto.Education;
import com.adil.TheHunt_BE.dto.Experience;
import com.adil.TheHunt_BE.dto.ProfileDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Base64;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "profiles")
public class Profile {

    @Id
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private byte[] picture;
    private List<String> skills;
    private List<Education> educations;
    private List<Experience> experiences;
    private List<Certification> certifications;
    private List<Long> savedJobs;

    public ProfileDTO toDTO () {

        return new ProfileDTO(this.id, this.name, this.email, this.jobTitle, this.company, this.location, this.about, this.picture != null? Base64.getEncoder().encodeToString(this.picture) : null, this.skills, this.educations, this.experiences, this.certifications, this.savedJobs);
    }
}
