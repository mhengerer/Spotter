import { searchExercises, postExercise, deleteExercise, getExercises } from "./exercises.js";

const movementList = document.querySelector(".movement-list");
const movementItems = document.querySelectorAll(".movement-item");

const workoutList = document.querySelector(".workout-list");
const deleteButtons = document.querySelectorAll(".delete-button");

//Create right column of objects
movementItems.forEach((el) =>
  el.addEventListener("click", () => {
    //TODO: update source
    if (data !== null) {
      data.push(el.name);
      localStorage.setItem("workout", JSON.stringify([...data]));
    } else {
      data = [el.id];
      localStorage.setItem("workout", JSON.stringify([el.id]));
    }
  })
);

// Creates the Exercises populated in the left column
function buildList(data) {
  // If the list has any children, remove them all 
  while (workoutList.firstChild) {
    workoutList.removeChild(workoutList.firstChild);
  }
  if (data != null) {
    //Create a card for each element in data
    for (let i = 0; i < data.length; i++) {
      let parentDiv = document.createElement("div");
      parentDiv.id = `routine${data[i].id}`; 

      // Column 1 of Exercise card
      let column1 = document.createElement("div");
      let firstLabel1 = document.createElement("div");
      let secondLabel1 = document.createElement("a");
      firstLabel1.textContent = data[i].name;
      firstLabel1.className = "font-bold text-[1.75rem]";
      secondLabel1.textContent = "learn movement";
      secondLabel1.className = "underline text-gray-300";
      secondLabel1.href = `${data[i].gif_url}`;

      column1.className = "w-full md:w-[60%] p-2 bg-secondary text-center";

      column1.appendChild(firstLabel1);
      column1.appendChild(secondLabel1);

      // // Column 2 of Exercise card
      // let column2 = document.createElement("div");
      // let firstLabel2 = document.createElement("div");
      // let secondLabel2 = document.createElement("div");

      // firstLabel2.textContent = "Reps : 5 x 8 //todo form";
      // secondLabel2.textContent = "Weight : 50lbs //todo form";

      // column2.className = "font-semibold text-[1.25rem] w-full md:w-[30%]";
      // column2.appendChild(firstLabel2);
      // column2.appendChild(secondLabel2);

      // Column 3 of Exercise card
      let column3 = document.createElement("div");
      column3.className =
        "text-[2rem] bg-secondary w-fit md:w-[10%] h-fit flex justify-center items-center rounded-full p-3";

      column3.innerHTML = `<img class="h-[2rem] cursor-pointer" src="./images/add.svg" alt=""/>`;

      // Remove the workout from the left column and DELETE it from the database
      column3.addEventListener("click", () => {
        deleteExercise($(this).parent)
        $(this);
        buildList(workoutData);
      });

      parentDiv.className =
        "text-white w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 bg-quarternary px-3 py-4 md:py-2";
      parentDiv.appendChild(column1);
      parentDiv.appendChild(column3);

      //Append full card to the workoutList div
      workoutList.appendChild(parentDiv);
    }
  }
}

document.querySelector('#home-button').addEventListener('click', async () => {
  document.location.replace('/');
});

$('#searchbar').submit(async (e) => {
  e.preventDefault();
  const userInput = $('#user-query').val(); 
  let exercises = await searchExercises(userInput);

  if(exercises.length > 10) {
    exercises = exercises.slice(0, 10);
  }
  console.log(exercises);
  buildList(exercises);
  }
);

const 

$('.addColumn').click(function (e) { 
  e.preventDefault();
  $()
});
