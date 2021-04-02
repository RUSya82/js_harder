document.addEventListener('DOMContentLoaded', () => {
    const cash = document.getElementById('cash');
    const currency = document.querySelectorAll('.currency');
    const form = document.getElementById('form');
    const cleanBtn = document.querySelector('.clean');
    const moneyInputs = document.querySelectorAll('.money');
    let queryString = 'https://api.exchangeratesapi.io/latest?base=RUB&symbols=';
    let message = document.querySelector('.message');
    let currentCurrency;


    cleanBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moneyInputs.forEach(item => item.value = '');
        message.textContent = '';
    });
    

    moneyInputs.forEach(item => {
        item.addEventListener('input', (e) => {
            let target = e.target;
            target.value = target.value.replace(/[^0-9.]/ig, '')
        })
    })

    const showCurrentCurrency = () => {
        const val = cash.value;
        currency.forEach(item => {
            if(item.classList.contains(val)){
                item.style.display = 'flex';
                currentCurrency = item;
            } else {
                item.style.display = 'none';
            }
        });
        moneyInputs.forEach(item => item.value = '');
    }
    showCurrentCurrency();

    const valid = () => {
        let rub = currentCurrency.querySelector('.rub').value;
        let noRub = currentCurrency.querySelector('.no-rub').value;
        return !(!rub && !noRub)
    };


    cash.addEventListener('change', showCurrentCurrency);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let cashValue = cash.value.toUpperCase();
        let rubVal = currentCurrency.querySelector('.rub').value;
        let noRubVal = currentCurrency.querySelector('.no-rub').value;
        rubVal = parseFloat(rubVal);
        noRubVal = parseFloat(noRubVal);
        message.textContent = 'work!';
        let rates;
        if(valid()){
            fetch(queryString + cashValue)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status not 200');
                    }
                    message.textContent = 'done!';
                    return (response.json());
                })
                .then((response) => {
                    rates = response.rates[cashValue];
                    if(rubVal){
                        currentCurrency.querySelector('.no-rub').value = Math.ceil(rates*rubVal*100) / 100;
                    } else {
                        currentCurrency.querySelector('.rub').value = Math.ceil(noRubVal*1/rates*100) / 100;
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            message.textContent = "введите число в одно из полей!";
        }

    });


})