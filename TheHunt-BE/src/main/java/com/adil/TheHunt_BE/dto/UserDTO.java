package com.adil.TheHunt_BE.dto;

import com.adil.TheHunt_BE.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {


    private Long id;

    @NotBlank(message = "{user.name.absent}")
    private String name;

    @NotBlank(message = "{user.email.absent}")
    @Email(message = "{user.email.invalid}")
    private String email;

    @NotBlank(message = "{user.password.absent}")
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$",
            message = "Password must be 8-15 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character"
    )    private String password;
    private AccountType accountType;

    public User toEntity () {

        return new User(this.id, this.name, this.email, this.password, this.accountType);
    }
}
