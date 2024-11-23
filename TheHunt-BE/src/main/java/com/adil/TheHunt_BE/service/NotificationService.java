package com.adil.TheHunt_BE.service;

import com.adil.TheHunt_BE.dto.NotificationDTO;
import com.adil.TheHunt_BE.entity.Notification;
import com.adil.TheHunt_BE.exception.TheHuntException;

import java.util.List;

public interface NotificationService {

    public void sendNotification(NotificationDTO notificationDTO) throws TheHuntException;

    public List<Notification> getUnreadNotifications (Long userId);

    void readNotifications(Long id) throws TheHuntException;
}
