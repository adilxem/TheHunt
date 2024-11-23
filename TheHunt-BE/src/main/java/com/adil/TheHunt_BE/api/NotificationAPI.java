package com.adil.TheHunt_BE.api;

import com.adil.TheHunt_BE.dto.ResponseDTO;
import com.adil.TheHunt_BE.entity.Notification;
import com.adil.TheHunt_BE.exception.TheHuntException;
import com.adil.TheHunt_BE.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/notification")
@Validated
public class NotificationAPI {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/get/{userId}")
    public ResponseEntity<List<Notification>> getNotifications(@PathVariable Long userId) {

        return new ResponseEntity<>(notificationService.getUnreadNotifications(userId), HttpStatus.OK);
    }

    @PutMapping("/read/{id}")
    public ResponseEntity<ResponseDTO> readNotifications(@PathVariable Long id) throws TheHuntException {

        notificationService.readNotifications(id);

        return new ResponseEntity<>(new ResponseDTO("success"), HttpStatus.OK);
    }

}
