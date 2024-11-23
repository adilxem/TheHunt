package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.NotificationDTO;
import com.adil.TheHunt_BE.dto.NotificationStatus;
import com.adil.TheHunt_BE.entity.Notification;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.repository.NotificationRepository;
import com.adil.TheHunt_BE.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public void sendNotification(NotificationDTO notificationDTO) throws TheHuntException {

        notificationDTO.setId(Utilities.getNextSequence("notification"));

        notificationDTO.setStatus(NotificationStatus.UNREAD);

        notificationDTO.setTimestamp(LocalDateTime.now());

        notificationRepository.save(notificationDTO.toEntity());
    }

    @Override
    public List<Notification> getUnreadNotifications(Long userId) {

        return notificationRepository.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
    }

    @Override
    public void readNotifications(Long id) throws TheHuntException {

        Notification noti = notificationRepository.findById(id).orElseThrow(() -> new TheHuntException("No Notification Found"));

        noti.setStatus(NotificationStatus.READ);

        notificationRepository.save(noti);
    }
}
