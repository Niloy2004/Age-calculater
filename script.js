const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

calculatebtn.addEventListener("click", () =>{
    if(inputbtn.value == ""){
        alert("Pls Enter Your Date Of Birth")
    }else{
        
        const dob = new Date (inputbtn.value);

        const dob_year = dob.getFullYear();
        
        //now current date....

        const now = new Date();
        const now_year = now.getFullYear();

        const age = now_year - dob_year;

        ageresult.innerHTML = `Your Age is: ${age}`;
    }
});