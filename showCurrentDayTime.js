function showCurrentDaytime() {
  var currentData = new Date();
  var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  var day = daysOfWeek[currentData.getDay()];
  var timePM;
  timePM = currentData.getHours() > 12 ? " PM" : " AM";
  console.log("Today is : " + day);
  console.log("Current time is : " + currentData.getHours() + timePM + " : " + currentData.getMinutes() + " : " + currentData.getSeconds());
}
