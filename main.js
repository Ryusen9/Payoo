function getMobileNum(){
    const mobileNum = document.getElementById('mobileNum').value;
    return mobileNum;
}
function getPinNum(){
    const pinNum = document.getElementById('inputPin').value;
    return pinNum;
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    if (getMobileNum() == '' || getPinNum() == '') {
        alert("Please enter your phone number and pin")
    } else if (getMobileNum().length < 11) {
        alert("Number must be 11 digit")
    } else if (getMobileNum().length > 11 || getPinNum().length > 4) {
        alert("Phone number must be 11 digits and pin number must be 4 digits")
    } else if ((getMobileNum().length = 11) && (getPinNum().length = 4)) {
        window.location.href = '/homepage.html'
    }
})
