let eventString = localStorage.getItem("event");
let inputName = document.getElementById("name");
let inputDate = document.getElementById("date");
let inputLocation = document.getElementById("location");
let inputCapacity = document.getElementById("capacity");
if (eventString) {
    let event = JSON.parse(eventString);
    localStorage.removeItem("event");
    inputName.value = event.name;
    inputDate.value = event.date;
    inputLocation.value = event.location;
    inputCapacity.value = event.capacity;
}