export function generateOtp() {
    return Math.floor(100000 + Math.random() * 90000).toString();
}

export function getOtpHtml(otp) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; border: 1px solid #ddd; }
                .otp-code { font-size: 32px; font-weight: bold; text-align: center; letter-spacing: 5px; color: #4CAF50; margin: 20px 0; }
                .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Your OTP Code</h1>
                </div>
                <div class="content">
                    <p>Your One-Time Password (OTP) is:</p>
                    <div class="otp-code">${otp}</div>
                    <p>Do not share this code with anyone.</p>
                </div>
                <div class="footer">
                    <p>If you did not request this OTP, please ignore this email.</p>
                </div>
            </div>
        </body>
        </html>
    `
}
