let tableContent = document.querySelector("tbody");
events.forEach((event) => {
    tableContent.innerHTML += `
        <tr id="event-${event.id}">
            <td>${event.name}</td>
            <td>${event.date}</td>
            <td>${event.location}</td>
            <td>${event.capacity}</td>
            <td>${event.registered}</td>
            <td><button class="btn btn-primary" onclick="editEvent(${event.id})">Edit</button></td>
            <td><button class="btn btn-red-700" onclick="deleteEvent(${event.id})">Delete</button></td>
        </tr>`;

});
function editEvent(id) {
    let event = events.find((event) => event.id === id);
    localStorage.setItem("event", JSON.stringify(event));
    window.location.href = "../EditEvent/EditEvent.html";
}
function deleteEvent(id) {
    let event = events.find((event) => event.id === id);
    if (event.registered > 0) {
        let confirmation = confirm("This event has registered users. Are you sure you want to delete it?");
        if (!confirmation) {
            return;
        }
        userEvents = userEvents.filter((userEvent) => userEvent.eventId != id);
        let removedContent = document.getElementById(`event-${id}`);
        removedContent.remove(); // Remove the event from the tableContent.

        return;
    }
    let index = events.indexOf(event);
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    document.getElementById(`event-${id}`).remove();
}
