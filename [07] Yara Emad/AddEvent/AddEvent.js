function addEvent() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let location = document.getElementById("location").value;
    let capacity = document.getElementById("capacity").value;
    if (name === "" || date === "" || location === "" || capacity === "") {
        alert("Please fill all fields.");
        return;
    }
    let event = {
        id: events.length + 1,
        name: name,
        date: date,
        location: location,
        capacity: parseInt(capacity),
        registered: 0
    };
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));
    window.location.href = "EventsAdmin.html";
}