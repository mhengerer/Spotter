export async function searchExercises(searchQuery) {
    const numQueries = 10;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '25fbaa9945msh290accac7c89253p1830bejsn2410bc90a027',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${searchQuery}`, options);
    return response.json(); 
}

export async function postExercise(exercise, routine_id) {
    const options = {
        method: 'POST', 
        headers: {
            "content-type":"application/json"
        }, 
        body: JSON.stringify({
            ...exercise, 
            routine_id: routine_id
        })
    }

    const response = await fetch('/api/exercises', options);

    return response.json();
}

export async function deleteExercise(exercise_id) {
    const options = {
        method: 'DELETE', 
        headers: {
            "content-type":"application/json"
        }
    }
    const response = await fetch(`api/exercises/${exercise_id}`, options);
    return response.json();
}

export async function getExercises(routine_id) {
    const options = {
        method: 'GET', 
        headers: {
            "content-type":"application/json"
        }
    }
    const response = await fetch(`api/routines/${routine_id}`, options);
    return response.json();
}