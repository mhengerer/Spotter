module.exports.todaysDate = () => {
    const date = new Date(Date.now());
    const parts = date.toISOString().split('T');
    return `${parts[0]} ${parts[1].substring(0, 8)}`;
};

module.exports.lastDayWeek = () => {
    const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const parts = date.toISOString().split('T');
    return `${parts[0]} ${parts[1].substring(0, 8)}`;
};

// const today = 

// const lastDay = 
