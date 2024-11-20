package com.adil.TheHunt_BE.utility;

public class Data {

    public static String getMessageBody(String otp, String username) {

        String htmlTemplate = """
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Password Reset Request</title>
                    <style>
                        body { font-family: Arial, sans-serif; background-color: #f5f5f5; color: #333333; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); }
                        .header { text-align: center; padding-bottom: 10px; border-bottom: 2px solid #123e68; }
                        .content { padding: 20px; line-height: 1.6; }
                        .otp-code { font-size: 24px; color: #123e68; font-weight: bold; text-align: center; margin: 20px 0; }
                        .footer { text-align: center; padding: 10px; font-size: 12px; color: #999999; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Password Reset Request</h2>
                        </div>
                        <div class="content">
                            <p>Hi, <strong>%s</strong>,</p>
                            <p>We received a request to reset your password. Your verification code to reset your password is:</p>
                            <div class="otp-code">%s</div>
                            <p>This code is valid for the next 5 minutes. If you didn’t request a password reset, you can safely ignore this email.</p>
                        </div>
                        <div class="footer">
                            <p>&copy; TheHunt | All Rights Reserved</p>
                        </div>
                    </div>
                </body>
                </html>
                """;

        return String.format(htmlTemplate, username, otp);
    }
}
