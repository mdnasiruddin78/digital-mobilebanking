
function getAddMoneyInputFieldById(id){
    const inputMoney = document.getElementById(id).value;
    const upterConvert = parseFloat(inputMoney);
    return upterConvert;
}

function getTextInputFieldById(id){
    const balanceText = document.getElementById(id).innerText;
    const balanceValue = parseFloat(balanceText);
    return balanceValue;
}

function showSectionById(id){

    document.getElementById('add-money-changing').classList.add('hidden');
    document.getElementById('cash-out-changing').classList.add('hidden');
    document.getElementById('transaction-changing').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}