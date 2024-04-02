document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.onsubmit = function(e) {
        e.preventDefault(); 

        
        const data = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: data,
            mode: 'no-cors' 
        }).then(response => {
            console.log('Form submitted successfully');
            
            alert("Form submitted successfully!");
        }).catch(error => console.error('Error:', error));
    };
});


document.querySelector('form').addEventListener('submit', function(event) {
    let questions = document.querySelectorAll('.question');
    let isFormComplete = true;
    for (let i = 0; i < questions.length; i++) {
        let radios = questions[i].querySelectorAll('input[type="radio"]');
        let isChecked = false;
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                isChecked = true;
                break;
            }
        }
        if (!isChecked) {
            isFormComplete = false;
            let errorMsg = document.getElementById('error-msg');
            if (!errorMsg) {
                errorMsg = document.createElement('p');
                errorMsg.id = 'error-msg';
                errorMsg.style.color = 'red';
                errorMsg.textContent = 'Remplir toutes les questions';
                this.insertBefore(errorMsg, this.firstChild);
            }
        }
    }
    if (!isFormComplete) {
        event.preventDefault();
    } else {
        let errorMsg = document.getElementById('error-msg');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
});