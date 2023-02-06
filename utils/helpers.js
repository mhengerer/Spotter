
//possible values for date range
const getMonday = (d) => {
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

const getSunday = (d) => {
  d = new Date(d);
  const day = d.getDay(),
    diff = d.getDate() + (day === 0 ? 0 : 7) - day;
  return new Date(d.setDate(diff));
};

const getBlankTime = (date) => {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
};

module.exports = {

  // needs helper function to get date and date in a week for range in homeroutes 
  today: getBlankTime(new Date()),
  lastDay: getBlankTime(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)),
  sundayThisWeek: getBlankTime(getSunday(new Date())),
  mondayThisWeek: getBlankTime(getMonday(new Date())),
   
  filter: (arr, fn) => {
    return arr.filter(function(item) {
      return fn(item);
    });
  },

  
  compareDateToDay: (date, day) => {
    let dayNumber;
    switch (day) {
      case "Sunday":
        dayNumber = 0;
        break;
      case "Monday":
        dayNumber = 1;
        break;
      case "Tuesday":
        dayNumber = 2;
        break;
      case "Wednesday":
        dayNumber = 3;
        break;
      case "Thursday":
        dayNumber = 4;
        break;
      case "Friday":
        dayNumber = 5;
        break;
      case "Saturday":
        dayNumber = 6;
        break;
      default:
        dayNumber = null;
        break;
    }

    if (date.getUTCDay() == dayNumber) {
      return true;
    } 
  }
};

// needs helper function to get date and date in a week for range in homeroutes
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
