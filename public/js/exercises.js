const { search } = require("../../controllers/homeRoutes");

module.exports = {
    searchExercises: async(searchQuery) => {
        const numQueries = 10;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '25fbaa9945msh290accac7c89253p1830bejsn2410bc90a027',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/%7B${searchQuery}%7D`, options);
        const exercises = response.json(); 
        console.log(exercises);
        return exercises; 
    }
}