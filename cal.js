const userInput = document.querySelector(".user-input");
const keys = document.querySelectorAll(".key");
const resetKey = document.querySelector(".reset-key");
const answerKey = document.querySelector(".answer-key");
const deleteKey = document.querySelector(".delete-key");

let lastKeyIsOperater = false;
let decimalAdded = false; 

deleteKey.addEventListener("click", () =>{
let initialValue = userInput.value;
let updatedValue = initialValue.substring(0, initialValue.length - 1);
userInput.value = updatedValue;
return;
});

answerKey.addEventListener("click", () =>{
 const expression = userInput.value;
 const formattedExpression = expression.replace("x","*");
 const result = eval(formattedExpression);
 userInput.value = result;
});

resetKey.addEventListener("click", () => {
    console.log("reset");
    userInput.value = "";
});

const keysArray = Array.from(keys);
keysArray.forEach((key)=> { 
    key.addEventListener("click", (event) => { 
        console.log(event.target.innerText);
        const value = event.target.innerText;

        if (value === "." &&  decimalAdded) {
            return;
        }

         if ("+-*/".includes(value)){
            if (lastKeyIsOperater){
                let initialValue = userInput.value;
                let updatedValue = 
                initialValue.substring(0, initialValue.length - 1) + value;
                userInput.value = updatedValue;
                return;
            }
            lastKeyIsOperater = true;
            decimalAdded = false;
            } else {
            lastKeyIsOperater = false;
            if(value === "."){ 
                decimalAdded = true;
            }
            }
         userInput.value += value;
    });
       
});

