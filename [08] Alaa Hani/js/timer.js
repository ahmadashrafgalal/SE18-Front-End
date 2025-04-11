// Timer functionality that persists on page refresh
document.addEventListener('DOMContentLoaded', function() {
  const timerDisplay = document.getElementById('timer');
  let timeLeft;
  
  // Check if there's a saved timer value in localStorage
  const savedTime = localStorage.getItem('examTimeLeft');
  const examEndTime = localStorage.getItem('examEndTime');
  
  if (examEndTime) {
      // Calculate remaining time based on the stored end time
      const now = new Date().getTime();
      const endTime = parseInt(examEndTime);
      timeLeft = Math.max(0, Math.floor((endTime - now) / 1000));
  } else if (savedTime) {
      // Use the directly saved time if available
      timeLeft = parseInt(savedTime);
  } else {
      // If no saved time, set default exam duration (e.g., 60 minutes)
      timeLeft = 60 * 60; // 60 minutes in seconds
      
      // Save end time in localStorage
      const endTime = new Date().getTime() + (timeLeft * 1000);
      localStorage.setItem('examEndTime', endTime.toString());
  }
  
  // Update the timer display
  updateTimerDisplay();
  
  // Start the countdown
  const timerInterval = setInterval(function() {
      timeLeft--;
      
      // Save current time left to localStorage every second
      localStorage.setItem('examTimeLeft', timeLeft.toString());
      
      updateTimerDisplay();
      
      // If time runs out
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          localStorage.removeItem('examTimeLeft');
          localStorage.removeItem('examEndTime');
          alert('Time is up! Your exam will be submitted automatically.');
          
          // You could trigger automatic form submission here
          document.getElementById('examForm').submit();
      }
  }, 1000);
  
  // Function to update the timer display in HH:MM:SS format
  function updateTimerDisplay() {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      
      timerDisplay.textContent = 
          (hours < 10 ? '0' + hours : hours) + ':' + 
          (minutes < 10 ? '0' + minutes : minutes) + ':' + 
          (seconds < 10 ? '0' + seconds : seconds);
  }
  
  // Clear timer data when exam is submitted
  document.getElementById('examForm').addEventListener('submit', function() {
      localStorage.removeItem('examTimeLeft');
      localStorage.removeItem('examEndTime');
  });
  
  // Clean up when leaving the page
  window.addEventListener('beforeunload', function() {
      // We'll keep the timer in localStorage for page refresh
      // but update the current value before leaving
      localStorage.setItem('examTimeLeft', timeLeft.toString());
  });
});