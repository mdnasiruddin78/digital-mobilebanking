
document.getElementById('btn-cash-out').addEventListener('click',function(event){

    event.preventDefault();

    const cashout = getAddMoneyInputFieldById('input-cash-out')
    const pinNumber = getAddMoneyInputFieldById('input-cash-out-pin-number')

    if(isNaN(cashout)){
        alert('invalid cashout number');
        return;
    }
    
    if(pinNumber === 1234){

        const balance = getTextInputFieldById('current-balance');
        const newBalance = balance - cashout;

        document.getElementById('current-balance').innerText = newBalance;

        const div = document.createElement('div')

        div.classList.add('bg-red-400')

        div.innerHTML = `<h4 class="text-2xl text-center font-bold">Cashout</h4>
            <p>Added: ${cashout} Tk. New Balance ${newBalance}</P>
        ` 
        console.log(div);

        document.getElementById('transaction-changing').appendChild(div)
    }
    else{
        alert('invaled pin number');
    }
})