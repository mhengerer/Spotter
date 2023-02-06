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
            // const day = this.dataset.day;
            const response = fetch(`/api/routines`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'name': 'littteraly annnything', "description": "A routine that focuses on cardiovascular fitness", 'scheduled': '2021-01-01T05:00:00.000Z' }),
            }).then(response => response.json())
                .then(routine => {
                    if (routine.ok) {
                        document.location.replace('/routine');
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