package com.adil.TheHunt_BE.repository;

import com.adil.TheHunt_BE.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JobRepository extends MongoRepository<Job, Long> {

    public List<Job> findByPostedBy(Long postedBy);
}
