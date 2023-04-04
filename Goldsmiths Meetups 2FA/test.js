function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Create a SMTP crendentials that I showed u in my previous video

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1> See Your Goldsmiths Meetups OTP Down Below</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "aa7ff2e0-316f-4ca6-b9c0-33669adc7760",
        To : email.value,
        From : "rnhez001@campus.goldsmiths.ac.uk",
        Subject : "This is the from Goldsmiths Meetups",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value + " Please Check your Spam mail");

            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    alert("OTP correct your email has been verified");
                }
                else{
                    alert("Invalid OTP try again");
                }
            })
        }
      }
    );
}