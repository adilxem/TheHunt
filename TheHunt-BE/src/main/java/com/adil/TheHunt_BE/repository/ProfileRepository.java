package com.adil.TheHunt_BE.repository;

import com.adil.TheHunt_BE.entity.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository extends MongoRepository<Profile, Long> {
}
