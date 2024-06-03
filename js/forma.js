document.getElementById('infoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        full_name: document.getElementById('fullName').value,
        stage_name: document.getElementById('stageName').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        whatsapp_number: document.getElementById('whatsappNo').value,
        other_number: document.getElementById('otherNo').value
    };

    fetch('https://forma.teners.net/api/v1/submit/de3a3a96-eb20-4493-b837-445422ea6f60', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer 11|KoJsaMeTkHOIK6JwYhReoOgyKTwQg7tXVRPBYgCXb9f69b5f"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            data.success ?
                alert('Form submitted successfully!') :
                alert('Error submitting form')
        })
        .catch(error => {
            alert('Error submitting form');
        });
});
