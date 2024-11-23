package com.adil.TheHunt_BE.entity;

import com.adil.TheHunt_BE.dto.NotificationDTO;
import com.adil.TheHunt_BE.dto.NotificationStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "notification")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification {

    private Long id;
    private Long userId;
    private String message;
    private String action;
    private String route;
    private NotificationStatus status;
    private LocalDateTime timestamp;

    public NotificationDTO toDTO() {

        return new NotificationDTO(this.id, this.userId, this.message, this.action, this.route, this.status, this.timestamp);
    }

}
