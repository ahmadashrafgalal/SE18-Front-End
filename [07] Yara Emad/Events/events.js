// const cardsDiv = document.querySelector('.cards');
// events.forEach(element => {
//     let flag = false;
//     let completed = (element.registered == element.capacity);
//     for (const userEvent of userEvents) {

//         if (userEvent.userId == currentUser.id && userEvent.eventId === element.id) {
//             flag = true;
//             break;
//         }
//     }
//     cardsDiv.innerHTML += `
// <div class="card join-item bg-base-100 rounded-lg shadow-sm hover:shadow-lg">
//                     <div class="card-body bg-gray-100">
//                         <h4 class="card-title">${element.name}</h4>
//                         <p class="text-primary">${element.date}</p>
//                         <p class="text-primary">${element.location}</p>
//                         <div class="card-actions justify-start">
//                         ${((flag) ? ('<button class="btn btn-primary text-capitalize">Cancel</button>') : (((completed) ? ('<button class="btn btn-light text-capitalize" disabled>Book Now</button>') : ('<button class="btn btn-neutral-content text-capitalize">Book Now</button>'))))}

//                         </div >
//                     </div >
//                 </div >
//     `;
//     let btn = cardsDiv.querySelectorAll('.btn')[cardsDiv.querySelectorAll('.btn').length - 1];
//     console.log(btn.innerText);
//     console.log("*****************************");
//     if (btn) {
//         btn.addEventListener('click', () => {

//             if (btn.innerText == 'Cancel') {
//                 // Cancel the booking
//                 userEvents = userEvents.filter(userEvent => !(userEvent.userId == currentUser.id && userEvent.eventId === element.id));
//                 element.registered--;
//                 btn.classList.remove('btn-primary');
//                 btn.classList.add('btn-neutral-content');
//                 btn.innerText = 'Book Now';
//             } else if (element.registered < element.capacity) {
//                 // Book the event
//                 userEvents.push({ userId: currentUser.id, eventId: element.id });
//                 element.registered++;
//                 btn.classList.remove('btn-neutral-content');
//                 btn.classList.add('btn-primary');
//                 btn.innerText = 'Cancel';
//             }
//             console.log(events);
//             console.log("*****************************");
//             console.log(userEvents);

//         });
//     }
// });


const cardsDiv = document.querySelector('.cards');

// Clear the container first
cardsDiv.innerHTML = '';
let thisEvents = events;
thisEvents.forEach(element => {
    let isRegistered = userEvents.some(userEvent =>
        userEvent.userId == currentUser.id && userEvent.eventId === element.id
    );
    let isFull = element.registered == element.capacity;

    const card = document.createElement('div');
    card.className = 'card join-item bg-base-100 rounded-lg shadow-sm hover:shadow-lg';
    card.innerHTML = `
        <div class="card-body bg-gray-100">
            <h4 class="card-title">${element.name}</h4>
            <p class="text-primary">${element.date}</p>
            <p class="text-primary">${element.location}</p>
            <div class="card-actions justify-start">
                ${isRegistered
            ? '<button class="btn btn-primary text-capitalize">Cancel</button>'
            : isFull
                ? '<button class="btn btn-light text-capitalize" disabled>Book Now</button>'
                : '<button class="btn btn-neutral-content text-capitalize">Book Now</button>'
        }
            </div>
        </div>
    `;

    const btn = card.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', () => {
            if (btn.textContent === 'Cancel') {
                // Cancel the booking
                userEvents = userEvents.filter(userEvent =>
                    !(userEvent.userId == currentUser.id && userEvent.eventId === element.id)
                );
                element.registered--;

                btn.classList.replace('btn-primary', 'btn-neutral-content');
                btn.textContent = 'Book Now';
            } else if (element.registered < element.capacity) {
                // Book the event
                userEvents.push({ userId: currentUser.id, eventId: element.id });
                element.registered++;
                btn.classList.replace('btn-neutral-content', 'btn-primary');
                btn.textContent = 'Cancel';

                // Disable button if event is now full
                if (element.registered == element.capacity) {
                    btn.disabled = true;
                }
            }
        });
    }

    cardsDiv.appendChild(card);
});