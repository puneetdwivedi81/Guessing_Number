
// let formTag=document.querySelector('#form');
// // console.log(formTag);

//     let pTag=document.querySelector('#result')
//     let resetButon=document.querySelector('.button-2');
//     let livesCount = document.querySelector('#lives');
//     let guessingNumber = Math.floor(Math.random()*100)+1;
//     let lives=10;
     





//      formTag.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     const inputTag=document.querySelector('#input-number');


//       let guessingNumber = Math.floor(Math.random()*100)+1;

//       let userGuess=Number(inputTag.value)



//           if(!userGuess ||userGuess < 1 ||userGuess> 100 ){
//              pTag.textContent='pls enter the number between 1 or 100';

//              return


//           }

//          if(userGuess === guessingNumber){

//             pTag.textContent='correct ! you guess the right number'+ guessingNumber;
//             formTag.querySelector('#button-check').disabled = true;
//         }
 
//         else if(userGuess < guessingNumber){
//             pTag.innerHTML='Too Low! Try again.'

//             lives=lives-1;
//            livesCount.textContent= "you have " +  lives + " lives left"  ;


//         }
//      else if(userGuess > guessingNumber){
//             pTag.innerHTML='Too high! Try again.'
//             lives=lives-1;
//             livesCount.textContent= "you have " +  lives + " lives left"  ;
//         }

//         if(lives===0){

//                 pTag.textContent=' game over ! the number was  ' + guessingNumber;
//                  formTag.querySelector('#button-check').disabled = true;
            





//         }


        
//     inputTag.value = "";


//      });
  

     
//         resetButon.addEventListener('click' ,()=>{
//              guessingNumber = Math.floor(Math.random()*100)+1;
//              lives=10;
//             // inputTag.value=' ';
//             pTag.innerHTML="'Try to guess the secret number between 1 and 100. After each guess, you'll get a hint if your guess is too high or too low. Good luck!'"
//             livesCount.textContent = "You have 10 lives left.";
//               formTag.querySelector('#button-check').disabled = true;
            
//            inputTag.value = "";

//         })

     

         
  


// Generate random number once
let guessingNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

// Select all needed elements
let formTag = document.querySelector('#form');
let inputTag = document.querySelector('#input-number');
let pTag = document.querySelector('#result');
let livesCount = document.querySelector('#lives');
let resetButton = document.querySelector('.button-2');

// When user submits (clicks Check)
formTag.addEventListener('submit', function (e) {
  e.preventDefault();

  let userGuess = Number(inputTag.value);

  // Validation
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    pTag.textContent = "⚠️ Please enter a number between 1 and 100!";
    return;
  }

  // Main logic
  if (userGuess === guessingNumber) {
    pTag.textContent = "🎉 Correct! You guessed the right number: " + guessingNumber;
    formTag.querySelector('#button-check').disabled = true;
  } else if (userGuess < guessingNumber) {
    pTag.textContent = "Too low! Try again.";
    lives = lives - 1;
    livesCount.textContent = "You have " + lives + " lives left.";
  } else if (userGuess > guessingNumber) {
    pTag.textContent = "Too high! Try again.";
    lives = lives - 1;
    livesCount.textContent = "You have " + lives + " lives left.";
  }

  // Check if lives finished
  if (lives === 0) {
    pTag.textContent = "💀 Game Over! The number was " + guessingNumber;
    formTag.querySelector('#button-check').disabled = true;
  }

  // Clear input
  inputTag.value = "";
});

// Reset button functionality
resetButton.addEventListener('click', function () {
  guessingNumber = Math.floor(Math.random() * 100) + 1;
  lives = 10;
  pTag.textContent = "Try to guess the secret number between 1 and 100. After each guess, you'll get a hint if your guess is too high or too low. Good luck!";
  livesCount.textContent = "You have 10 lives left.";
  formTag.querySelector('#button-check').disabled = false;
  inputTag.value = "";
});


      
         





     





    






      













