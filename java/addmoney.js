document.getElementById('btn-add-money').addEventListener('click',function(event){

    event.preventDefault();
    
    const addMoney = getAddMoneyInputFieldById('input-add-money')
    const pinNumber = getAddMoneyInputFieldById('input-pin-number')

    if(isNaN(addMoney)){
        alert('input not number')
        return;
    }
    
    if(pinNumber === 1234){
        
        const balance = getTextInputFieldById('current-balance')
        const newBalance = balance + addMoney;
        
        document.getElementById('current-balance').innerText = newBalance;

        const div = document.createElement('div')

        div.classList.add('bg-green-400')

        div.innerHTML = `<h4 class="text-2xl text-center font-bold">Add Money</h4>
            <p>Added: ${addMoney} Tk. New Balance ${newBalance}</P>
        ` 
        console.log(div);

        document.getElementById('transaction-changing').appendChild(div)
    }
    else{
        alert('invalid pin number')
    }

})