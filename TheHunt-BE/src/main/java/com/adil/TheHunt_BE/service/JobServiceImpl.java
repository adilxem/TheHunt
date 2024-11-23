package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.*;
import com.adil.TheHunt_BE.entity.Applicant;
import com.adil.TheHunt_BE.entity.Job;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.repository.JobRepository;
import com.adil.TheHunt_BE.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service("jobService")
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private NotificationService notificationService;


    @Override
    public JobDTO postJob(JobDTO jobDTO) throws TheHuntException {

        if (jobDTO.getId() == 0) {

            jobDTO.setId(Utilities.getNextSequence("jobs"));

            jobDTO.setPostTime(LocalDateTime.now());

            NotificationDTO notiDTO = new NotificationDTO();

            notiDTO.setAction("New Job Posted");

            notiDTO.setMessage("You listed a new opening for " + jobDTO.getJobTitle());

            notiDTO.setUserId(jobDTO.getPostedBy());

            notiDTO.setRoute("/posted-job/" + jobDTO.getId());

            try {
                notificationService.sendNotification(notiDTO);
            } catch (TheHuntException e) {
                throw new RuntimeException(e);
            }

        }

        else {

            Job job = jobRepository.findById(jobDTO.getId()).orElseThrow(() -> new TheHuntException("JOB_NOT_FOUND"));

            if (job.getJobStatus().equals(JobStatus.DRAFT) || jobDTO.getJobStatus().equals(JobStatus.CLOSED)) {

                jobDTO.setPostTime(LocalDateTime.now());
            }
        }

        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }

    @Override
    public List<JobDTO> getAllJobs() {

        return jobRepository.findAll().stream().map((x) -> x.toDTO()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws TheHuntException {

        return jobRepository.findById(id).orElseThrow(() -> new TheHuntException("JOB_NOT_FOUND")).toDTO();
    }

    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws TheHuntException {

        Job job = jobRepository.findById(id).orElseThrow(() -> new TheHuntException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants();

        if (applicants == null) {

            applicants = new ArrayList<>();
        }

        if (applicants.stream().filter(x -> x.getApplicantId() == applicantDTO.getApplicantId()).toList().size() > 0) throw new TheHuntException("JOB_ALREADY_APPLIED");

        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);

        applicants.add(applicantDTO.toEntity());

        job.setApplicants(applicants);

        jobRepository.save(job);
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long id) {

        return jobRepository.findByPostedBy(id).stream().map((x) -> x.toDTO()).toList();
    }

    @Override
    public void changeAppStatus(Application application) throws TheHuntException {

        Job job = jobRepository.findById(application.getId()).orElseThrow(() -> new TheHuntException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants().stream().map(x -> {

            if(application.getApplicantId() == x.getApplicantId()) {

                x.setApplicationStatus(application.getApplicationStatus());

                if (application.getApplicationStatus().equals(ApplicationStatus.INTERVIEWING)) {

                    x.setInterviewTime(application.getInterviewTime());

                    NotificationDTO notiDTO = new NotificationDTO();

                    notiDTO.setAction("Interview Schedule");

                    notiDTO.setMessage("You got a new interview scheduled");

                    notiDTO.setUserId(application.getApplicantId());

                    notiDTO.setRoute("/job-history");

                    try {
                        notificationService.sendNotification(notiDTO);
                    } catch (TheHuntException e) {
                        throw new RuntimeException(e);
                    }
                }
            }

            return x;

        }).toList();

        job.setApplicants(applicants);
        jobRepository.save(job);
    }
}
