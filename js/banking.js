// get input from the input field
function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const amountText = inputField.value
    const amountValue = parseFloat(amountText)
    inputField.value = "";
    return amountValue;
}

// add input to the text string
function getUpdateTotal(totalId,amount){
  const totalElement = document.getElementById(totalId);
  const previousTotal = parseFloat(totalElement.innerText);
  totalElement.innerText = previousTotal + amount
}


// adding balance from deposit and withdraw

function updateBalance(amountBalance,update){
  const currentBalanceText = document.getElementById("balance-total");
  const currentBalanceAmount = parseFloat(currentBalanceText.innerText)
  if(update == true){
    currentBalanceText.innerText = currentBalanceAmount + amountBalance
  }
  else{
    currentBalanceText.innerText = currentBalanceAmount - amountBalance
  }
  
}

function getCurrentBalance(amount){
  const currentBalanceText = document.getElementById("balance-total");
  const currentBalanceAmount = parseFloat(currentBalanceText.innerText)
  return currentBalanceAmount;
}



document.getElementById("deposit-btn").addEventListener('click',function(){

  const currentDipositAmount = getInputValue("deposit-input")
  if(currentDipositAmount > 0){
    const previousDepositAmount = getUpdateTotal("deposit-total",currentDipositAmount)
    const depositBalance = updateBalance(currentDipositAmount,true)
  }
})



document.getElementById("withdraw-btn").addEventListener('click',function(){

  const currentBalance = getCurrentBalance()
  const currentWithdrawAmount = getInputValue('withdraw-input') 
  if(currentWithdrawAmount > 0 && currentWithdrawAmount < currentBalance ){
    const previousWithdrawAmount = getUpdateTotal("withdraw-total",currentWithdrawAmount)
    const withdrawBalance = updateBalance(currentWithdrawAmount,false)

  }
})