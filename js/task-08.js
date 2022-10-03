const form = document.querySelector(".login-form");

form.addEventListener("submit", atformSubmit)
function  atformSubmit(event) {
    event.preventDefault();
    const{
        elements: { email, password }
    } =  event.currentTarget;
    
  if (email.value === "" || password.value === "") {
    return("All fields must be filled");
   }else{
     console.log(`Email: ${email.value}, Password: ${password.value}`);
     event.currentTarget.reset();
   }
 }
  
