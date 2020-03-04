function taxBracket(Income) {
  return lblOutput.value
  }

btnSubmit.onclick=function(){
  if (inptIncome.value < 30000) {
    lblOutput.value = `With your income of ${inptIncome.value}, you are in a tax bracket of 8%`
  } else if (inptIncome.value >= 30000 && inptIncome.value < 99999) {
    lblOutput.value = `With your income of ${inptIncome.value}, you are in a tax bracket of 15%`
  } else if (inptIncome.value >= 99999) {
    lblOutput.value = `With your income of ${inptIncome.value}, you are in a tax bracket of 25%`
  } else {
    lblOutput.value = 'no entry'
  }
}

btnAgain.onclick=function(){
  inptIncome.value == ""
}

