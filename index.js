/* Increase button */
function counterIncrease(input) {
    let inputField = document.getElementById(input);
    let inputValue = parseInt(inputField.value);
    let newInputValue = inputValue + 1;
    inputField.value = newInputValue;
    calculateTotal()
}

/* Decrease button */
function counterDecrease(input) {
    let inputField = document.getElementById(input);
    let inputValue = parseInt(inputField.value);
    let newInputValue = inputValue - 1;
    if (newInputValue <= 0) {
        newInputValue = 0
    }
    inputField.value = newInputValue;
    calculateTotal()
}

/* count total, subtotal */
function calculateTotal() {
    let firstClassCount = document.getElementById('first-class-count').value;
    let economyClassCount = document.getElementById('economy-class-count').value;

    let subTotalPrice = parseInt(firstClassCount) * 150 + parseInt(economyClassCount) * 100;
    document.getElementById('subtotal-price').innerText = '$' + subTotalPrice;
    let tax = Math.round(subTotalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;
    let grandTotal = subTotalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}