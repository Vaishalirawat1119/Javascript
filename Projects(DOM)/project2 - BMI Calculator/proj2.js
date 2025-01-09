const form = document.querySelector('form');
form.addEventListener('submit', ((e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === ''|| height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }
    else if(weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }
    else{
        const calculateBMI = (weight / ((height*height)/10000)).toFixed(2);

        //show result
        results.innerHTML = `<span>${calculateBMI}<span>`;

        if(calculateBMI <= 18.6){
            results.innerHTML += `<p>Underweight</p>`;
        }
        else if(calculateBMI >= 18.8 && calculateBMI <= 24.9){
            results.innerHTML = `<p>Normal weight</p>`;
        }
        else{
            results.innerHTML = `<p>Overweight</p>`;
        }
    }
}));