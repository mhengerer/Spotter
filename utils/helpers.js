// needs helper function to get date and date in a week for range in homeroutes
module.exports.todaysDate = () => {
    new Date(Date.now());
};

module.exports.lastDayWeek = () => {
    new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
};

// const today = 

// const lastDay = 
