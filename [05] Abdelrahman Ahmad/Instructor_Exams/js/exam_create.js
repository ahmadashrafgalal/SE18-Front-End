// Calendar variables
let currentStartDate = new Date();
let currentDueDate = new Date();
let selectedStartDate = null;
let selectedDueDate = null;
let currentQuestionType = 'multiple-choice';

// Initialize calendar
function initCalendar() {
    renderCalendar('start');
    renderCalendar('due');

    // Set current date as default
    selectDate('start', currentStartDate);
    selectDate('due', currentDueDate);
}

// Display calendar
function renderCalendar(type) {
    const date = type === 'start' ? currentStartDate : currentDueDate;
    const calendarId = `${type}-calendar-days`;
    const monthElement = document.getElementById(`current-month-${type}`);

    // Display month and year
    monthElement.textContent = `${getMonthName(date.getMonth())} ${date.getFullYear()}`;

    // Create calendar days
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    let calendarHTML = '';

    // Weekdays
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    weekdays.forEach(day => {
        calendarHTML += `<p class="text-[#0e141b] text-[13px] font-bold leading-normal tracking-[0.015em] flex h-12 w-full items-center justify-center pb-0.5">${day}</p>`;
    });

    // Empty spaces before first day of month
    for (let i = 0; i < startingDay; i++) {
        calendarHTML += `<div class="h-12 w-full"></div>`;
    }

    // Month days
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDate = new Date(date.getFullYear(), date.getMonth(), i);
        const isSelected = type === 'start'
            ? selectedStartDate && isSameDay(selectedStartDate, dayDate)
            : selectedDueDate && isSameDay(selectedDueDate, dayDate);

        const isToday = isSameDay(dayDate, new Date());

        calendarHTML += `
            <button class="calendar-day h-12 w-full text-sm font-medium leading-normal ${isSelected ? 'selected-day text-slate-50' : 'text-[#0e141b]'
            } ${isToday ? 'border border-[#4900FF]' : ''
            }" data-date="${dayDate.toISOString()}">
                <div class="flex size-full items-center justify-center rounded-full">${i}</div>
            </button>
        `;
    }

    document.getElementById(calendarId).innerHTML = calendarHTML;

    // Add event listeners for days
    document.querySelectorAll(`#${calendarId} .calendar-day`).forEach(day => {
        day.addEventListener('click', () => {
            const date = new Date(day.dataset.date);
            selectDate(type, date);
        });
    });
}

// Select date
function selectDate(type, date) {
    if (type === 'start') {
        selectedStartDate = date;
        // Ensure due date is after start date
        if (selectedDueDate && selectedDueDate < date) {
            selectedDueDate = new Date(date);
            selectedDueDate.setDate(date.getDate() + 1);
            renderCalendar('due');
        }
    } else {
        if (selectedStartDate && date < selectedStartDate) {
            alert('Due date must be after start date');
            return;
        }
        selectedDueDate = date;
    }

    renderCalendar(type);
}

// Check if two dates are the same day
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

// Get month name
function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}

// Month navigation
document.getElementById('prev-month-start').addEventListener('click', () => {
    currentStartDate.setMonth(currentStartDate.getMonth() - 1);
    renderCalendar('start');
});

document.getElementById('next-month-start').addEventListener('click', () => {
    currentStartDate.setMonth(currentStartDate.getMonth() + 1);
    renderCalendar('start');
});

document.getElementById('prev-month-due').addEventListener('click', () => {
    currentDueDate.setMonth(currentDueDate.getMonth() - 1);
    renderCalendar('due');
});

document.getElementById('next-month-due').addEventListener('click', () => {
    currentDueDate.setMonth(currentDueDate.getMonth() + 1);
    renderCalendar('due');
});

// Manage questions page
document.getElementById('upload-questions-btn').addEventListener('click', () => {
    document.getElementById('questions-page').classList.remove('hidden');
});

document.getElementById('close-questions-btn').addEventListener('click', () => {
    document.getElementById('questions-page').classList.add('hidden');
});

document.getElementById('cancel-questions-btn').addEventListener('click', () => {
    document.getElementById('questions-page').classList.add('hidden');
});

document.getElementById('save-questions-btn').addEventListener('click', () => {
    alert('Questions saved successfully! (Frontend only)');
    document.getElementById('questions-page').classList.add('hidden');
});

// Select question type
document.querySelectorAll('.question-type-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.question-type-card').forEach(c => {
            c.classList.remove('selected');
        });
        card.classList.add('selected');
        currentQuestionType = card.dataset.type;
    });
});

// Add new question
document.getElementById('add-question-btn').addEventListener('click', () => {
    const questionId = Date.now();
    let questionHTML = '';

    // Base HTML common to all question types
    const baseHTML = `
        <div class="border rounded-lg p-4" data-question-id="${questionId}">
            <div class="flex justify-between items-center mb-3">
                <h4 class="font-bold">New Question</h4>
                <button class="text-red-500 delete-question" data-question-id="${questionId}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="mb-3">
                <label class="block text-sm font-medium mb-1">Question Text</label>
                <textarea class="w-full border rounded p-2" rows="2" placeholder="Enter question text"></textarea>
            </div>
            <div class="mb-3">
                <label class="block text-sm font-medium mb-1">Points</label>
                <input type="number" class="w-full border rounded p-2" value="1" min="1">
            </div>
    `;

    // HTML specific to each question type
    switch (currentQuestionType) {
        case 'multiple-choice':
            questionHTML = baseHTML + `
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Options</label>
                    <div class="space-y-2 options-container">
                        <div class="flex items-center">
                            <input type="radio" name="correct-${questionId}" class="mr-2" checked>
                            <input type="text" class="border rounded p-2 flex-grow" placeholder="Option 1">
                            <button class="ml-2 text-red-500 remove-option">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" name="correct-${questionId}" class="mr-2">
                            <input type="text" class="border rounded p-2 flex-grow" placeholder="Option 2">
                            <button class="ml-2 text-red-500 remove-option">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <button class="mt-2 px-3 py-1 bg-gray-200 rounded add-option" data-question-id="${questionId}">
                        <i class="fas fa-plus mr-1"></i> Add Option
                    </button>
                </div>
            `;
            break;

        case 'true-false':
            questionHTML = baseHTML + `
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Correct Answer</label>
                    <div class="flex items-center space-x-4">
                        <label class="inline-flex items-center">
                            <input type="radio" name="correct-${questionId}" class="mr-2" value="true" checked>
                            <span>True</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="radio" name="correct-${questionId}" class="mr-2" value="false">
                            <span>False</span>
                        </label>
                    </div>
                </div>
            `;
            break;

        case 'short-answer':
            questionHTML = baseHTML + `
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Sample Answer</label>
                    <input type="text" class="w-full border rounded p-2" placeholder="Enter sample answer">
                </div>
            `;
            break;

        case 'essay':
            questionHTML = baseHTML + `
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Guidelines</label>
                    <textarea class="w-full border rounded p-2" rows="2" placeholder="Enter guidelines for students"></textarea>
                </div>
            `;
            break;

        case 'matching':
            questionHTML = baseHTML + `
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Matching Pairs</label>
                    <div class="space-y-2 matching-pairs">
                        <div class="flex items-center space-x-2">
                            <input type="text" class="border rounded p-2 flex-1" placeholder="Item">
                            <span>→</span>
                            <input type="text" class="border rounded p-2 flex-1" placeholder="Match">
                            <button class="ml-2 text-red-500 remove-pair">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="flex items-center space-x-2">
                            <input type="text" class="border rounded p-2 flex-1" placeholder="Item">
                            <span>→</span>
                            <input type="text" class="border rounded p-2 flex-1" placeholder="Match">
                            <button class="ml-2 text-red-500 remove-pair">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <button class="mt-2 px-3 py-1 bg-gray-200 rounded add-pair" data-question-id="${questionId}">
                        <i class="fas fa-plus mr-1"></i> Add Pair
                    </button>
                </div>
            `;
            break;

        case 'fill-blank':
            questionHTML = baseHTML + `
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Question Text with Blanks</label>
                    <textarea class="w-full border rounded p-2" rows="2" placeholder="Enter text with _____ for blanks"></textarea>
                    <p class="text-xs text-gray-500 mt-1">Use underscores (_____) to indicate blanks</p>
                </div>
                <div class="mb-3">
                    <label class="block text-sm font-medium mb-1">Answers for Blanks</label>
                    <div class="space-y-2 blank-answers">
                        <div class="flex items-center">
                            <span class="mr-2">1.</span>
                            <input type="text" class="border rounded p-2 flex-grow" placeholder="Answer for blank 1">
                            <button class="ml-2 text-red-500 remove-blank">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <button class="mt-2 px-3 py-1 bg-gray-200 rounded add-blank" data-question-id="${questionId}">
                        <i class="fas fa-plus mr-1"></i> Add Blank Answer
                    </button>
                </div>
            `;
            break;
    }

    questionHTML += `</div>`; // Close main div

    document.getElementById('questions-list').insertAdjacentHTML('beforeend', questionHTML);
});

// Delete question (using event delegation)
document.getElementById('questions-list').addEventListener('click', (e) => {
    if (e.target.closest('.delete-question')) {
        const questionId = e.target.closest('.delete-question').dataset.questionId;
        document.querySelector(`[data-question-id="${questionId}"]`).remove();
    }

    // Add new option for multiple choice questions
    if (e.target.closest('.add-option')) {
        const questionId = e.target.closest('.add-option').dataset.questionId;
        const optionsContainer = document.querySelector(`[data-question-id="${questionId}"] .options-container`);
        const optionCount = optionsContainer.children.length + 1;

        const optionHTML = `
            <div class="flex items-center">
                <input type="radio" name="correct-${questionId}" class="mr-2">
                <input type="text" class="border rounded p-2 flex-grow" placeholder="Option ${optionCount}">
                <button class="ml-2 text-red-500 remove-option">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        optionsContainer.insertAdjacentHTML('beforeend', optionHTML);
    }

    // Remove option from multiple choice questions
    if (e.target.closest('.remove-option')) {
        e.target.closest('.flex.items-center').remove();
    }

    // Add matching pair for matching questions
    if (e.target.closest('.add-pair')) {
        const questionId = e.target.closest('.add-pair').dataset.questionId;
        const pairsContainer = document.querySelector(`[data-question-id="${questionId}"] .matching-pairs`);
        const pairCount = pairsContainer.children.length + 1;

        const pairHTML = `
            <div class="flex items-center space-x-2">
                <input type="text" class="border rounded p-2 flex-1" placeholder="Item">
                <span>→</span>
                <input type="text" class="border rounded p-2 flex-1" placeholder="Match">
                <button class="ml-2 text-red-500 remove-pair">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        pairsContainer.insertAdjacentHTML('beforeend', pairHTML);
    }

    // Remove matching pair from matching questions
    if (e.target.closest('.remove-pair')) {
        e.target.closest('.flex.items-center').remove();
    }

    // Add blank answer for fill-in-the-blank questions
    if (e.target.closest('.add-blank')) {
        const questionId = e.target.closest('.add-blank').dataset.questionId;
        const blanksContainer = document.querySelector(`[data-question-id="${questionId}"] .blank-answers`);
        const blankCount = blanksContainer.children.length + 1;

        const blankHTML = `
            <div class="flex items-center">
                <span class="mr-2">${blankCount}.</span>
                <input type="text" class="border rounded p-2 flex-grow" placeholder="Answer for blank ${blankCount}">
                <button class="ml-2 text-red-500 remove-blank">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        blanksContainer.insertAdjacentHTML('beforeend', blankHTML);
    }

    // Remove blank answer from fill-in-the-blank questions
    if (e.target.closest('.remove-blank')) {
        e.target.closest('.flex.items-center').remove();
        // Renumber remaining blanks
        const blanksContainer = e.target.closest('.blank-answers');
        Array.from(blanksContainer.children).forEach((child, index) => {
            child.querySelector('span').textContent = `${index + 1}.`;
            child.querySelector('input').placeholder = `Answer for blank ${index + 1}`;
        });
    }
});

// Save exam (display data only)
document.getElementById('save-exam-btn').addEventListener('click', () => {
    const examData = {
        course: document.querySelector('select').value,
        title: document.querySelector('input[placeholder="Enter the title of the exam"]').value,
        description: document.querySelector('textarea').value,
        duration: document.querySelector('select[name="duration"]').value,
        startTime: selectedStartDate ? selectedStartDate.toDateString() + ' ' + document.getElementById('start-time').value : '',
        dueTime: selectedDueDate ? selectedDueDate.toDateString() + ' ' + document.getElementById('due-time').value : ''
    };

    console.log('Exam data to be saved:', examData);
    alert('Exam data will be saved here (Frontend only)\nCheck console for data object');
});

// Initialize page on load
window.addEventListener('DOMContentLoaded', () => {
    initCalendar();

    // Set first question type as default
    document.querySelector('.question-type-card').classList.add('selected');
});