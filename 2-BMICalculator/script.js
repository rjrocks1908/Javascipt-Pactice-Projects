const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#results')

    if (height === '' || isNaN(height) || height < 0) {
        result.innerHTML = `Please provide a valid height`
    } else if (weight === '' || isNaN(weight) || weight < 0) {
        result.innerHTML = `Please provide a valid weight`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        let bmiClass = ''

        if (bmi < 18.5) {
            bmiClass = 'Underweight'
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiClass = 'Normal'
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiClass = 'Overweight'
        } else {
            bmiClass = 'Obese'
        }

        result.innerHTML = `Your BMI is ${bmi} and you are ${bmiClass}`
    }


})