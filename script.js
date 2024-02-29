document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.onsubmit = function(e) {
        e.preventDefault(); 

        
        var data = new FormData(form);
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