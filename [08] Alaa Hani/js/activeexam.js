
// Question navigation
document.querySelectorAll('.question-nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const questionNumber = this.getAttribute('data-question');
        
        // Hide all questions
        document.querySelectorAll('.question-card').forEach(card => {
            card.classList.add('hidden');
            card.classList.remove('active-question');
        });
        
        // Show selected question
        const selectedQuestion = document.getElementById(`question-${questionNumber}`);
        selectedQuestion.classList.remove('hidden');
        selectedQuestion.classList.add('active-question');
        
        // Update active state in navigation
        document.querySelectorAll('.question-nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Next and Previous buttons functionality
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', function() {
    const currentActive = document.querySelector('.question-nav-item.active');
    const currentQuestionNum = parseInt(currentActive.getAttribute('data-question'));
    
    if (currentQuestionNum < 10) {
        const nextQuestionNum = currentQuestionNum + 1;
        const nextQuestionNavItem = document.querySelector(`.question-nav-item[data-question="${nextQuestionNum}"]`);
        
        // Trigger click event on next question nav item
        nextQuestionNavItem.click();
    }
});

prevBtn.addEventListener('click', function() {
    const currentActive = document.querySelector('.question-nav-item.active');
    const currentQuestionNum = parseInt(currentActive.getAttribute('data-question'));
    
    if (currentQuestionNum > 1) {
        const prevQuestionNum = currentQuestionNum - 1;
        const prevQuestionNavItem = document.querySelector(`.question-nav-item[data-question="${prevQuestionNum}"]`);
        
        // Trigger click event on previous question nav item
        prevQuestionNavItem.click();
    }
});

// Simulate answering questions by marking them in the navigation
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const questionName = this.getAttribute('name');
        const questionNum = questionName.replace('q', '');
        
        // Mark as answered in the navigation
        document.querySelector(`.question-nav-item[data-question="${questionNum}"]`).classList.add('answered');
    });
});

document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', function() {
        const questionCard = this.closest('.question-card');
        const questionId = questionCard.getAttribute('id');
        const questionNum = questionId.replace('question-', '');
        
        if (this.value.length > 0) {
            // Mark as answered in the navigation
            document.querySelector(`.question-nav-item[data-question="${questionNum}"]`).classList.add('answered');
        } else {
            // Remove answered mark if emptied
            document.querySelector(`.question-nav-item[data-question="${questionNum}"]`).classList.remove('answered');
        }
    });
}); 


