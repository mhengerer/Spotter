    //index.html LOGIN (button added QS to login.handlebars), NEW HERE (button href="#" id="new-user") 
    
    const signupFormHandler = async (event) => {
        event.preventDefault();
      
        const response = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({
            email: document.querySelector('#email-input').value,
            password: document.querySelector('#password-input').value
          })
        });
      
        if (response.ok) {
          document.location.replace('/');
        }
    };
      

    document
    .querySelector('.new-user')
    .addEventListener('click', signupFormHandler);
      

//page 2 SUBMIT SIGNUP FORM (button needs to be created, not on mockup)
const form = document.querySelector('.signup-form');
const emailInput = document.querySelector('#email-login');
const nameInput = document.querySelector('#name-login');
const passwordInput = document.querySelector('#password-login');
const passwordConfirmInput = document.querySelector('#password-confirm');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
   
    const lastName = lastNameInput.value;
    const firstName = firstNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value; //should this be added to the signup form?
    const currentWeight = currentWeightInput.value;
    const currentHeight = currentHeightInput.value;
    const age = ageInput.value;


    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    }

    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert('Signup successful!');
    } else {
        alert('Error signing up');
    }
});





//page 4 BACK TO WEEKLY ROUTINE (? a or button)



//page 5 HOME (button), + BUTTON for EXERCISES (button), Learn Movement (id="link-text" href="#">Learn Movement)
document
.querySelector("#home-button")
.addEventListener("click", function() {
    window.location.href = "/home";
  });
  


const addButton = document.querySelector("#add-button");
//const exercises = ['Split Squat', 'Belgium Squat', 'Romanian Deadlift', 'Goblet Squats', 'Reverse Lunge', 'Leg Extension', 'Calf Raise'];
const selectedDay = document.querySelector("#selected-day");

addButton.addEventListener("click", function() {
  let selectedExercise = exercises[Math.floor(Math.random() * exercises.length)];
  selectedDay.innerHTML += `<li>${selectedExercise}</li>`;
});

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '083e01c47emsh0c712299a543f85p102dbajsn07f83c72bfdd',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/name/${user_input}', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));