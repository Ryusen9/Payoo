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

const addMoney = document.getElementById('add-money');
addMoney.addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyForm = document.getElementById('add-money-form');
    addMoneyForm.classList.remove('hidden');
    addMoneyForm.classList.add('block');
})

const addMoneyBtn = document.getElementById('add-money-submit-btn');
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('amount-add');
    let addAmount = parseInt(addMoneyInput.value);
    const addMoneyPin = document.getElementById('addPinNumber');
    if (addMoneyInput.value == '' || addMoneyPin.value == '') {
        return alert("Please enter an amount and right pin")
    } else if (addMoneyPin.value.length < 4 || addMoneyPin.value.length > 4) {
        return alert("Pin must be 4 digits")
    }
    const amount = parseInt(document.getElementById('available-amount').value);
    subtotal = amount + addAmount;
    subtotalString = subtotal.toString();
    const amountHad = document.getElementById('available-amount');
    amountHad.value = subtotalString;
})


