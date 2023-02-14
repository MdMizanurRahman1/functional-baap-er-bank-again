



document.getElementById('btn-deposit').addEventListener('click', function () {
    //1-deposit field
    const newDepositAmount = getInputFieldValueById('deposit-field');

    //2-deposit total
    const previousDepositTotal = getTextElementValueById('deposit-total');

    //3-calculate deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    //4-set the value
    setTextElementValueById('deposit-total', newDepositTotal);

    //previous balance get by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    //calculate
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set
    setTextElementValueById('balance-total', newBalanceTotal);
})