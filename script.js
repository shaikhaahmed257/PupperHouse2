 //quiz form function
 function checkQuizAnswer(){
    const form = document.getElementById('quizForm');
    const feedback = document.getElementById('quizFeedback');
    const selecttedJob = form.querySelector('input[name="job"]:checked');

    if (!selecttedJob){
        feedback.innerText = "Please select an answer first!";
        feedback.style.color = "orange";
        return;
    }

if (selecttedJob.value ==="teacher"){
    feedback.innerText = "Correct! Ahmed was an Elementary Teacher";
    feedback.style.color = "green";
    feedback.style.fontWeight = "bold";
}

else{
    feedback.innerText = "Wrong answer! Try again";
    feedback.style.color = "red";
    feedback.style.fontWeight = "normal";
}

}




//Form 1 error messages
function validateRequestForm(){
    const name = document.getElementById ('client_name').value;
    const email = document.getElementById ('email').value;

    const nError = document.getElementById ('nError');
    const eError = document.getElementById ('eError');
    const feedback = document.getElementById ('requestSuccess');

    nError.innerText = "";
    eError.innerText = "";
    feedback.innerText = "";



    let isValid = true;

    if (name === ""){
        nError.innerText = "Please enter your name";
        nError.style.color = "red";
        isValid = false;
    }

    if (email === ""){
        eError.innerText = "Please enter your email";
        eError.style.color = "red";
        isValid = false;
    }
    else if(!email.includes("@") || !email.includes(".")){
        eError.innerText = "Email must have @ and .";
        eError.style.color = "red";
        isValid = false;
    }

    if (isValid){
        feedback.innerText = "Your Request has been submetted";
        feedback.style.color = "green";
    }


}






//Form 2 error messages
function validateRBookForm(){
   const show_choice = document.getElementById ('show_choice').value;
   const show_date = document.getElementById('show_date').value;

    const showError = document.getElementById ('showError');
    const dateError = document.getElementById ('dateError');
    const succesMsg = document.getElementById ('submitSuccess');


    showError.innerText = "";
    dateError.innerText = "";
    succesMsg.innerText = "";


    let isValid = true;

    if (show_choice === ""){
        showError.innerText = "Please select a show";
        showError.style.color = "red";
        isValid = false;
    }

    if (show_date === ""){
        dateError.innerText = "please pick a date";
        dateError.style.color = "red";
        isValid = false;
    }


    if (isValid){
        succesMsg.innerText = "Booking confirmed! We will contact you soon";
        succesMsg.style.color = "green";
    }

}