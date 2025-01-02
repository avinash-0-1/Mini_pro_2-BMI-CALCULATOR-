const nu = document.querySelector('#button')

nu.addEventListener('click', function (e) {
    e.preventDefault();

    const he = parseInt(document.querySelector('#height').value);
    const we = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#result');

    if(he === '' || he < 0 || isNaN(he)){
        res.innerHTML('PLZ ENTER VALID NUMBER');
    }
    else if(we === '' || we < 0 || isNaN(we)){
        res.innerHTML('PLZ ENTER VALID NUMBER');
    }
    else {
        const bmi = ((we/((he*he)/10000)).toFixed(2));
        res.innerHTML = `<span>${bmi}</span>`;
    }
});