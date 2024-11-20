package com.adil.TheHunt_BE.api;

import com.adil.TheHunt_BE.dto.ApplicantDTO;
import com.adil.TheHunt_BE.dto.Application;
import com.adil.TheHunt_BE.dto.JobDTO;
import com.adil.TheHunt_BE.dto.ResponseDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.service.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {

    @Autowired
    private JobService jobService;

    @PostMapping("/post")
    public ResponseEntity<JobDTO> postJob (@RequestBody @Valid JobDTO jobDTO) throws TheHuntException {

        return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<JobDTO>> getAllJobs () throws TheHuntException {

        return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<JobDTO> getJob (@PathVariable Long id) throws TheHuntException {

        return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);
    }

    @PostMapping("/apply/{id}")
    public ResponseEntity<ResponseDTO> applyJob (@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO) throws TheHuntException {

        jobService.applyJob(id, applicantDTO);

        return new ResponseEntity<>(new ResponseDTO("Applied Successfully"), HttpStatus.OK);
    }

    @GetMapping("/postedBy/{id}")
    public ResponseEntity<List<JobDTO>> getJobsPostedBy (@PathVariable Long id) throws TheHuntException {

        return new ResponseEntity<>(jobService.getJobsPostedBy(id), HttpStatus.OK);
    }

    @PostMapping("/changeAppStatus")
    public ResponseEntity<ResponseDTO> changeAppStatus (@RequestBody Application application) throws TheHuntException {

        jobService.changeAppStatus(application);

        return new ResponseEntity<>(new ResponseDTO("Application Status Changed Successfully"), HttpStatus.OK);
    }
}
