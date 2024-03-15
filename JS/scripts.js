// Function to change the language of the page
function changeLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;

    // Logic to change the language based on the selected option
    // You can implement language-specific content changes here
    console.log('Selected Language:', selectedLanguage);
}

// Function to submit the form data
function submitForm() {
    // Implement logic for form validation before submitting
    if (validateForm()) {
        // Collect form data and send it to the server using Axios
        console.log('Submitting form data...');

        // Sample Axios request (replace with your actual endpoint)
        // axios.post('/api/submit', formData)
        //   .then(response => {
        //     console.log('Form submitted successfully', response.data);
        //   })
        //   .catch(error => {
        //     console.error('Error submitting form', error);
        //   });
    }
}

// Function to validate the form
function validateForm() {
    // Implement your form validation logic here
    // Return true if the form is valid, otherwise return false

    // Example validation (replace with your actual validation logic)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (!firstName || !lastName) {
        displayError('Please fill in all required fields.');
        return false;
    }

    // Additional validation logic can be added as needed

    return true;
}

// Function to display error messages
function displayError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message;
}

// Function to upload files and display them in the table
function uploadFile() {
    const fileInput = document.getElementById('file');
    const files = fileInput.files;

    if (files.length === 0) {
        displayError('Please select one or more files.');
        return;
    }

    const fileTableBody = document.getElementById('fileTableBody');

    // Display the uploaded files in the table
    for (let i = 0; i < files.length; i++) {
        const fileName = files[i].name;

        const row = document.createElement('tr');

        const fileNameCell = document.createElement('td');
        fileNameCell.textContent = fileName;

        const actionsCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            removeFile(fileName, row);
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            editFileName(fileName);
        };

        actionsCell.appendChild(removeButton);
        actionsCell.appendChild(editButton);

        row.appendChild(fileNameCell);
        row.appendChild(actionsCell);

        fileTableBody.appendChild(row);
    }

    // Clear the file input
    fileInput.value = null;
}

// Function to remove a file from the table
function removeFile(fileName, row) {
    // Implement logic to remove the file from the table
    row.remove();

    // You may also want to update your backend to remove the file from storage
    console.log('Removing file: ' + fileName);
}

// Function to edit the file name in the table
function editFileName(fileName) {
    // Implement logic to edit the file name in the table
    alert('Editing file name: ' + fileName);
}

// Initialize Flatpickr for date input
flatpickr(document.getElementById('dateOfBirth'), {
    dateFormat: 'd-m-Y',
    locale: {
        firstDayOfWeek: 1, // Start with Monday
    },
});
