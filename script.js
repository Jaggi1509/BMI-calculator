document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResult = document.getElementById('bmi');
    const interpretation = document.getElementById('interpretation');

    calculateButton.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert height to meters
        const bmi = weight / (height * height);
        bmiResult.textContent = bmi.toFixed(2); // Display BMI with two decimal places

        // Interpretation of BMI
        if (bmi < 18.5) {
            interpretation.textContent = 'Underweight';
        } else if (bmi < 24.9) {
            interpretation.textContent = 'Normal Weight';
        } else if (bmi < 29.9) {
            interpretation.textContent = 'Overweight';
        } else {
            interpretation.textContent = 'Obese';
        }
    }
});
