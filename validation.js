document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            // You can add your form submission logic here
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                showError(input, 'This field is required');
                isValid = false;
            } else {
                clearError(input);

                switch(input.id) {
                    case 'birthday':
                        if (!isValidDate(input.value)) {
                            showError(input, 'Please enter a valid date');
                            isValid = false;
                        }
                        break;
                    case 'height':
                        if (input.value < 1 || input.value > 300) {
                            showError(input, 'Height must be between 1 and 300 cm');
                            isValid = false;
                        }
                        break;
                    case 'weight':
                        if (input.value < 1 || input.value > 500) {
                            showError(input, 'Weight must be between 1 and 500 kg');
                            isValid = false;
                        }
                        break;
                }
            }
        });

        return isValid;
    }

    function showError(input, message) {
        clearError(input);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
        input.classList.add('error');
    }

    function clearError(input) {
        const errorElement = input.nextSibling;
        if (errorElement && errorElement.className === 'error-message') {
            errorElement.remove();
        }
        input.classList.remove('error');
    }

    function isValidDate(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) return false;
        const date = new Date(dateString);
        return !isNaN(date.getTime());
    }
});