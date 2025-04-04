const cardsDiv = document.querySelector('.cards');
let bookedEvents = events.filter(element => {
    for (const userEvent of userEvents) {

        if (userEvent.userId == currentUser.id && userEvent.eventId === element.id) {
            return true;
        }
    }
})

bookedEvents.forEach(element => {
    cardsDiv.innerHTML += `
<div class="card join-item bg-base-100 w-96 rounded-lg shadow-sm hover:shadow-lg">
                    <div class="card-body bg-gray-100">
                        <h4 class="card-title">${element.name}</h4>
                        <p class="text-primary">${element.date}</p>
                        <p class="text-primary">${element.location}</p>
                        <div class="card-actions justify-start">
                        <button class="btn btn-primary text-capitalize">Cancel</button>

                        </div >
                    </div >
                </div >
    `
});