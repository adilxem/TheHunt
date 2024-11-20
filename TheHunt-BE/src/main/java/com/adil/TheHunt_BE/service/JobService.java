package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.ApplicantDTO;
import com.adil.TheHunt_BE.dto.Application;
import com.adil.TheHunt_BE.dto.JobDTO;
import com.adil.TheHunt_BE.exception.TheHuntException;

import java.util.List;

public interface JobService {

    public JobDTO postJob(JobDTO jobDTO) throws TheHuntException;

    public List<JobDTO> getAllJobs();

    public JobDTO getJob(Long id) throws TheHuntException;

    public void applyJob(Long id, ApplicantDTO applicantDTO) throws TheHuntException;

    List<JobDTO> getJobsPostedBy(Long id);

    void changeAppStatus(Application application) throws TheHuntException;
}
