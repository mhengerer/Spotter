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


function buildList(data, routineId) {

  // If the list has any children, remove them all 
  while (workoutList.firstChild) {
    workoutList.removeChild(workoutList.firstChild);
  }
  if (data != null) {
    //Create a card for each element in data

    for (let i = 0; i < data.length; i++) {
      let parentDiv = document.createElement("div");

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

      let column2 = document.createElement("div");
      column2.className =
        "text-[2rem] bg-secondary w-fit md:w-[10%] h-fit flex justify-center items-center rounded-full p-3";

      column2.innerHTML = `<img class="h-[2rem] cursor-pointer" src="./images/add.svg" alt="" 
                            data-Exercise='[{"name":"${data[i].name}",
                            "target":"${data[i].target}", "body_part":"${data[i].bodyPart}",
                            "equipment":"${data[i].equipment}", "gif_url":"${data[i].gifUrl}" }]' />`;

      column2.addEventListener("click", (e) => {
        e.preventDefault();
        let exerciseData = JSON.parse(e.target.getAttribute("data-Exercise"))[0];
        console.log(exerciseData);
        postExercise(exerciseData, routineId);
        window.location.reload();
        // buildList(workoutData);
      });
      // Remove the workout from the left column and DELETE it from the database

      parentDiv.className =
        "text-white w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 bg-quarternary px-3 py-4 md:py-2";
      parentDiv.appendChild(column1);
      parentDiv.appendChild(column2);

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
  const routineId = $('#searchbar').attr("data-Id");
  const userInput = $('#user-query').val(); 
  let exercises = await searchExercises(userInput);

  console.log(exercises, routineId);
  if(exercises.length > 10) {
    exercises = exercises.slice(0, 10);
  }
  buildList(exercises, routineId);
  }
);