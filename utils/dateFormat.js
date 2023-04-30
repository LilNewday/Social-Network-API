const addDateSuffix = (date) => {
    // an array of suffixes, with the index corresponding to the last digit of the date
    const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
    const dateStr = date.toString();
    // get the last digit of the date
    const lastDigit = date % 10;
    // use the corresponding suffix, or the default 'th' suffix
    const suffix = suffixes[lastDigit] || suffixes[0];
    // append the suffix to the date string and return i
    return `${dateStr}${suffix}`;
  };
  
  const getMonthName = (month, monthLength) => {
    // an array of month names, with the index corresponding to the month number
    const months = [
      monthLength === 'short' ? 'Jan' : 'January',
      monthLength === 'short' ? 'Feb' : 'February',
      monthLength === 'short' ? 'Mar' : 'March',
      monthLength === 'short' ? 'Apr' : 'April',
      'May',
      monthLength === 'short' ? 'Jun' : 'June',
      monthLength === 'short' ? 'Jul' : 'July',
      monthLength === 'short' ? 'Aug' : 'August',
      monthLength === 'short' ? 'Sep' : 'September',
      monthLength === 'short' ? 'Oct' : 'October',
      monthLength === 'short' ? 'Nov' : 'November',
      monthLength === 'short' ? 'Dec' : 'December',
    ];
    return months[month];
  };
  
  const formatTimestamp = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
  ) => {
    const dateObj = new Date(timestamp);
    const month = dateObj.getMonth();
    // get the name of the formatted month
    const formattedMonth = getMonthName(month, monthLength);
    // get the formatted day of the month, with suffix if necessary
    const formattedDayOfMonth = dateSuffix
      ? addDateSuffix(dateObj.getDate())
      : dateObj.getDate();
    const year = dateObj.getFullYear();
    let hour = dateObj.getHours();
    let periodOfDay = 'am';
  
    if (hour >= 12) {
      hour -= 12;
      periodOfDay = 'pm';
    }
  
    // handle the special case of midnight (00:00)
    if (hour === 0) {
      hour = 12;
    }
  
    // format the hour and minutes with leading zeros
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinutes = dateObj.getMinutes().toString().padStart(2, '0');
    // combine all the formatted values into a string and return it
    const formattedTimeStamp = `${formattedMonth} ${formattedDayOfMonth}, ${year} at ${formattedHour}:${formattedMinutes} ${periodOfDay}`;
    return formattedTimeStamp;
  };
  
  module.exports = formatTimestamp;
  