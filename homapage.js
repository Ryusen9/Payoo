function getAmount(){
    const amount = document.getElementById('available-amount');
    return amount.value;
}

const addFundBtn = document.getElementById('add-fund');
addFundBtn.addEventListener('click', function(event){
    event.preventDefault()
    let promt = prompt("Enter your amount: ");
    const amount = document.getElementById('available-amount');
    amount.value = promt;
})

