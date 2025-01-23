// Your code here
function greet() {
    let name = prompt("What is your name?");
    if (name === null || name === "") {
        alert("Oops! You ddn't enter your name.");
    } else (name.toLowerCase() === name );
        alert("Hello, " + name + "!");

    let ageInput = prompt("How old are you?");
    
    let age = parseInt(ageInput);

    let hasHadBirthday = confirm("Have you had your birthday this year?");

    let birthYear
        if (hasHadBirthday === true) {
            birthYear = new Date().getFullYear()  - age;
            alert("You were born in " + birthYear + ".");
        } 
        else {
            birthYear = new Date().getFullYear()  - age - 1;
            alert("You were born in " + birthYear + ".");
        }
}