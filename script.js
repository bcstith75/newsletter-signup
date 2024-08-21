
const submitBtn = document.getElementById("submitBtn");

if(submitBtn) {
  submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    //alert(window.innerWidth);

    const email = document.getElementById("email");
    const emailVal = email.value;
    const errorLabel = document.getElementById("input-error");

    if(validateEmail(emailVal)){
      errorLabel.style.display = "none";
      email.classList.remove("email-input-error");

      window.location = 'confirm.html';

    } else{
      errorLabel.style.display = "block";
      email.classList.add("email-input-error");
    }

  });
}



const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const confirmBtn = document.getElementById("confirm-btn");

if(confirmBtn) {
  confirmBtn.addEventListener("click", function(){

    window.location = 'index.html';

   });
}

