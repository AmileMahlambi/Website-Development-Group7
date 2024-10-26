function calculateFees() {
    let selectedCourse = document.querySelector('input[name="course"]:checked').value;
    let fees = selectedCourse === '6Month' ? 3000 : 1500;
    document.getElementById('feeResult').innerHTML = `The total fee is R${fees}`;
}
