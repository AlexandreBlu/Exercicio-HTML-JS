const form = document.getElementById('valid-form');

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const campoA = parseFloat(document.getElementById('n1').value);
    const campoB = parseFloat(document.getElementById('n2').value);

    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    if (numbervalid(campoA, campoB)) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});