function sendOTP() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    
    if (mobileNumber) {
        // Simulate sending OTP
        alert('OTP has been sent to ' + mobileNumber);
        document.getElementById('message').innerText = 'OTP sent to ' + mobileNumber;
    } else {
        alert('Please enter a valid mobile number.');
    }
}

function verifyOTP() {
    const otp = document.getElementById('otp').value;
    
    if (otp) {
        // Simulate OTP verification
        if (otp === '1234') { // Simulated OTP
            alert('OTP verified successfully!');
            document.getElementById('message').innerText = 'OTP verified successfully!';
        } else {
            alert('Invalid OTP. Please try again.');
            document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
        }
    } else {
        alert('Please enter the OTP.');
    }
}
