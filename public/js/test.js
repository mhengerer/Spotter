    // //index.html LOGIN (button added QS to login.handlebars), NEW HERE (button href="#" id="new-user") 
    
    // const signupFormHandler = async (event) => {
    //     event.preventDefault();
      
    //     const response = await fetch('/api/signup', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         email: document.querySelector('#email-input').value,
    //         password: document.querySelector('#password-input').value
    //       })
    //     });
      
    //     if (response.ok) {
    //       document.location.replace('/');
    //     }
    // };
      

    // document
    // .querySelector('.new-user')
    // .addEventListener('click', signupFormHandler);
      



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