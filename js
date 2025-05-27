let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let errorMessageElement = document.getElementById("errorMessage");

function calculateTip() {
    let inputNumber = billAmountElement.value;
    let percentageTip = percentageTipElement.value;
    if (inputNumber === "" || percentageTip === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";
    } else if (percentageTip === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input";

    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(inputNumber);
        let tipPercentage = parseInt(percentageTip); // Change variable name here
        let calculatedTip = (tipPercentage / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;
    }
}
