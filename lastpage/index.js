const data = [
  "Split Squat",
  "Belgium Squat",
  "Romanian Deadlift",
  "Goblet Squats",
  "Reverse Lunge",
  "Leg Extension",
  "Calf Raise",
];

const movementList = document.querySelector(".movement-list");
const movementItems = document.querySelectorAll(".movement-item");

const workoutList = document.querySelector(".workout-list");
const deleteButtons = document.querySelectorAll(".delete-button");

movementItems.forEach((el) =>
  el.addEventListener("click", () => {
    //TODO: update source
    let data = JSON.parse(localStorage.getItem("workout"));
    if (data !== null) {
      data.push(el.id);
      localStorage.setItem("workout", JSON.stringify([...data]));
    } else {
      data = [el.id];
      localStorage.setItem("workout", JSON.stringify([el.id]));
    }
    buildList(data);
  })
);

function buildList(data) {
  while (workoutList.firstChild) {
    workoutList.removeChild(workoutList.firstChild);
  }
  if (data != null) {
    for (let i = 0; i < data.length; i++) {
      let parentDiv = document.createElement("div");

      // Column 1
      let column1 = document.createElement("div");
      let firstLabel1 = document.createElement("div");
      let secondLabel1 = document.createElement("div");
      firstLabel1.textContent = data[i];
      firstLabel1.className = "font-bold text-[1.75rem]";
      secondLabel1.textContent = "learn movement";
      secondLabel1.className = "underline text-gray-300";

      column1.className = "w-full md:w-[60%] p-2 bg-secondary text-center";

      column1.appendChild(firstLabel1);
      column1.appendChild(secondLabel1);

      // Column 2
      let column2 = document.createElement("div");
      let firstLabel2 = document.createElement("div");
      let secondLabel2 = document.createElement("div");

      firstLabel2.textContent = "Reps : 5 x 8";
      secondLabel2.textContent = "Weight : 50lbs";

      column2.className = "font-semibold text-[1.25rem] w-full md:w-[30%]";
      column2.appendChild(firstLabel2);
      column2.appendChild(secondLabel2);

      // Column 3
      let column3 = document.createElement("div");
      let minusLabel = document.createElement("div");
      column3.className =
        "text-[2rem] bg-primary w-fit md:w-[10%] h-fit flex justify-center items-center rounded-full p-3";

      column3.innerHTML = `<img class="h-[2rem] cursor-pointer" src="assets/trash.svg" alt=""/>`;

      column3.addEventListener("click", () => {
        let workoutData = JSON.parse(localStorage.getItem("workout"));
        workoutData.splice(i, 1);
        if (workoutData.length > 0) {
          localStorage.setItem("workout", JSON.stringify([...workoutData]));
        } else {
          localStorage.clear("workout");
        }
        buildList(workoutData);
      });

      parentDiv.className =
        "text-white w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 bg-quarternary px-3 py-4 md:py-2";
      parentDiv.appendChild(column1);
      parentDiv.appendChild(column2);
      parentDiv.appendChild(column3);

      workoutList.appendChild(parentDiv);
    }
  }
}

let firstData = JSON.parse(localStorage.getItem("workout"));
buildList(firstData);
