
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    const mobileNum = document.getElementById('mobileNum').value;
    const pinNum = document.getElementById('inputPin').value;
    if (pinNum == '' || mobileNum == '') {
        alert("Please enter your phone number and pin")
    } else if (mobileNum.length < 11) {
        alert("Number must be 11 digit")
    } else if (mobileNum.length > 11 && pinNum.length > 4) {
        alert("Phone number must be 11 digits and pin number must be 4 digits")
    } else if ((mobileNum.length = 11) && (pinNum.length = 4)) {
        window.location.href = '/homepage.html'
    }
})
