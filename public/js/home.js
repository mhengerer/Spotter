// const { response } = require("express");

const links = document.querySelectorAll('.new-routine-link');

if (links.length) {
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const day = this.dataset.day;
            const routineId = this.dataset.routine_id;
            console.log(day, routineId);
            document.location.replace(`/routine/${routineId}?day=${day}`);
        });
    });
}

const icons = document.querySelectorAll('#plus-btn');

if (icons.length) {
    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            const routineId = this.dataset.routine_id;
            const day = this.dataset.day;
            console.log(routineId);
            console.log();
            const response = fetch(`/api/routines`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": "Workout", 
                "description": "A routine that focuses on cardiovascular fitness", 
                "scheduled": `${day}` }),
            })
                .then(response => {
                    if (response.ok) {

                        document.location.replace(`/routine?day=${day}`);
                    } else {
                        console.log(response.statusText);
                    }
                })
        });
    });
}

//exercise.html LOGOUT (button id="logout-btn"), + BUTTON for ROUTINE DAY OF THE WEEK (button), PREVIOUS WORKOUTS (? a or button)
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#logout-btn')
    .addEventListener('click', logout);