
        // Event listeners for buttons
       // Event listeners and submission time logic
document.addEventListener('DOMContentLoaded', function() {
    // Example submission and deadline times
    const submissionTime = new Date('2025-04-09T10:55:00');
    const deadline = new Date('2025-04-09T11:00:00');
    
    // Get reference to status text container
    const statusContainer = document.querySelector('.bg-gray-100.rounded-lg.p-6.mb-6');
    
    // Create status element if it doesn't exist
    let statusElement = statusContainer.querySelector('.flex.justify-between.items-center:last-child');
    if (!statusElement) {
        statusElement = document.createElement('div');
        statusElement.className = 'flex justify-between items-center mb-4';
        statusElement.innerHTML = `
            <span class="text-gray-700 font-medium">Status:</span>
            <span id="statusText"></span>
        `;
        statusContainer.appendChild(statusElement);
    }
    
    const statusText = document.getElementById('statusText') || statusElement.querySelector('span:last-child');
    const viewScoreBtn = document.getElementById('viewScoreBtn');
    const returnToDashboardBtn = document.getElementById('returnToDashboardBtn');
    
    // Logic to handle button visibility and links based on submission time
    if (submissionTime > deadline) {
        // Submission after deadline
        
        // Enable view score button
        viewScoreBtn.addEventListener('click', function() {
            window.location.href = 'detailed_exam_result.html';
        });
        
        // Hide return to dashboard button
        //returnToDashboardBtn.style.display = 'none';
    } else {
        // Submission before deadline
        
        // Disable view score button and add message
        viewScoreBtn.classList.remove('custom-btn');
        viewScoreBtn.classList.add('bg-gray-400');
        viewScoreBtn.innerHTML = '<i class="fas fa-eye mr-2"></i> View Score Details <i class="fas fa-lock ml-2"></i>';
        viewScoreBtn.style.cursor = 'not-allowed';
        
        // Remove existing click event and add new one with alert
        viewScoreBtn.replaceWith(viewScoreBtn.cloneNode(true));
        document.getElementById('viewScoreBtn').addEventListener('click', function(e) {
            e.preventDefault();
            alert('The exam is still active. Detailed results will be available after the deadline.');
        });
        
        // Enable return to dashboard button
        returnToDashboardBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
    