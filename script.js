
const students = [];

document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById('saveButton');
    const resetButton = document.getElementById('resetButton');

    // Function to save form data
    function saveData(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value;
        const level = document.getElementById('level').value;

        // Validate input (optional but recommended)
        if (!id || !name || !city || !email || !level) {
            alert("All fields are required!");
            return;
        }

        // Create a student object
        const student = {
            id: id,
            name: name,
            city: city,
            email: email,
            level: level
        };

        // Save student data in the array
        students.push(student);
        console.log('Student data saved:', student);
        console.log('All students:', students);

        // Convert the students array to JSON
        const studentJSON = JSON.stringify(students);
        console.log('Student JSON:', studentJSON);

        // Send the data using AJAX
        const http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    const jsonResponse = JSON.parse(http.responseText);
                    console.log("Student saved successfully: ", jsonResponse);
                    alert("Student data saved successfully!");
                } else {
                    console.error("Error saving student");
                    console.error("Status code: ", http.status);
                    alert("Failed to save student data!");
                }
            }
        };

        http.open("POST", "http://localhost:8080/NewStudent/student", true);
       /* http.open("POST", "http://localhost:8080/NewStudent_JNDI_war_exploded", true);*/
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(studentJSON);
    }

    // Function to reset form data
    function resetForm() {
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('city').value = '';
        document.getElementById('email').value = '';
        document.getElementById('level').value = '';
        console.log('Form reset');
    }

    // Add event listeners
    saveButton.addEventListener('click', saveData);
    resetButton.addEventListener('click', resetForm);
});
