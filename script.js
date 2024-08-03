
// Array to store student data
const students = [];

// Function to save form data
function saveData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const level = document.getElementById('level').value;

    const student = {
        name: name,
        city: city,
        email: email,
        level: level
    };

    students.push(student);
    console.log('Student data saved:', student);
    console.log('All students:', students);
}

// Add event listener to the save button
document.getElementById('saveButton').addEventListener('click', saveData);

// create json
const studentJSON = JSON.stringify(students);
console.log('Student JSON:', studentJSON);

// save the data with ajex

const http=new XMLHttpRequest ();
http.onreadystatechange =() => {
    //CHECK STATE
    if(http.readyState===4 ){
        if(http.status==200){
            var jsonTypeResponse = JSON.parse(http.responseText);
            console.log("Student saved successfully: ", jsonTypeResponse);
        }else{
            console.error("Error saving student");
            console.error("status code: " , http.status);
            console.error("readyState: " , http.readyState);
        }
    }else{
        console.log("processing state: " , http.readyState);
        return;
    }
}
http.open("POST","http://localhost:8080/newStudent/student",true);
http.setRequestHeader('Content-Type', 'application/json');
http.send(studentJSON);





/*
// Array to store student data
const students = [];

// Function to save form data
function saveData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const level = document.getElementById('level').value;

    const student = {
        name: name,
        city: city,
        email: email,
        level: level
    };

    students.push(student);
    console.log('Student data saved:', student);
    console.log('All students:', students);
}

// Add event listener to the save button
document.getElementById('saveButton').addEventListener('click', saveData);

const studentJson=JSON.stringify(students);
console.log(studentJson)

//save the data with AJAX
   const http=new XMLHttpRequest();
http.onreadystatechange=()=>{
    // check state

}*/
