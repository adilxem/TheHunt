package com.adil.TheHunt_BE.repository;

import com.adil.TheHunt_BE.dto.NotificationStatus;
import com.adil.TheHunt_BE.entity.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository extends MongoRepository<Notification, Long> {

    public List<Notification> findByUserIdAndStatus(Long userId, NotificationStatus status);
}
