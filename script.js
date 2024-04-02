document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.onsubmit = function(e) {
        e.preventDefault(); // Empêcher la soumission par défaut
        
        // Vérifier si toutes les questions ont été répondues
        var allQuestionsAnswered = true;
        var questions = document.querySelectorAll('.question');
        questions.forEach(function(question) {
            var inputs = question.querySelectorAll('input[type="radio"]');
            var answered = Array.from(inputs).some(input => input.checked);
            if (!answered) {
                allQuestionsAnswered = false;
            }
        });
        
        // Procéder uniquement si toutes les questions ont été répondues
        if (allQuestionsAnswered) {
            var data = new FormData(form);
            fetch(form.action, {
                method: 'POST',
                body: data,
                mode: 'no-cors'
            }).then(response => {
                console.log('Form submitted successfully');
                alert("Form submitted successfully!");
            }).catch(error => console.error('Error:', error));
        } else {
            alert("Veuillez répondre à toutes les questions avant de soumettre le formulaire.");
        }
    };
});
