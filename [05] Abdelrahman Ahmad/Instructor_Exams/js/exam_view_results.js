// Sample data - exams and results
const exams = [
    { id: 1, name: "Midterm 1 - Mathematics" },
    { id: 2, name: "Final Exam - Physics" },
    { id: 3, name: "Quiz 2 - Chemistry" },
    { id: 4, name: "Lab Exam - Biology" }
];

const results = [
    // Midterm 1 - Mathematics results
    { id: 1, examId: 1, studentName: "Ahmed Mohamed", grade: "85/100", percentage: 85, status: "Passed", submissionDate: "2024-09-21" },
    { id: 2, examId: 1, studentName: "Ali Mahmoud", grade: "45/100", percentage: 45, status: "Failed", submissionDate: "2024-09-21" },
    { id: 3, examId: 1, studentName: "Sara Ahmed", grade: "92/100", percentage: 92, status: "Passed", submissionDate: "2024-09-22" },
    { id: 4, examId: 1, studentName: "Mohamed Ibrahim", grade: "78/100", percentage: 78, status: "Passed", submissionDate: "2024-09-20" },
    { id: 5, examId: 1, studentName: "Fatma Hassan", grade: "65/100", percentage: 65, status: "Passed", submissionDate: "2024-09-21" },

    // Final Exam - Physics results
    { id: 6, examId: 2, studentName: "Ahmed Mohamed", grade: "72/100", percentage: 72, status: "Passed", submissionDate: "2024-12-15" },
    { id: 7, examId: 2, studentName: "Ali Mahmoud", grade: "88/100", percentage: 88, status: "Passed", submissionDate: "2024-12-15" },

    // Quiz 2 - Chemistry results
    { id: 8, examId: 3, studentName: "Sara Ahmed", grade: "18/20", percentage: 90, status: "Passed", submissionDate: "2024-10-19" },
    { id: 9, examId: 3, studentName: "Mohamed Ibrahim", grade: "12/20", percentage: 60, status: "Passed", submissionDate: "2024-10-18" },

    // Lab Exam - Biology results
    { id: 10, examId: 4, studentName: "Fatma Hassan", grade: "45/50", percentage: 90, status: "Passed", submissionDate: "2023-11-04" }
];

// DOM elements
const examSelect = document.getElementById('examSelect');
const viewResultsBtn = document.getElementById('viewResultsBtn');
const statsContainer = document.getElementById('statsContainer');
const resultsContainer = document.getElementById('resultsContainer');
const noExamMessage = document.getElementById('noExamMessage');
const resultsTableBody = document.getElementById('resultsTableBody');
const examTitle = document.getElementById('examTitle');
const exportBtn = document.getElementById('exportBtn');

// Stats elements
const totalStudentsEl = document.getElementById('totalStudents');
const passedStudentsEl = document.getElementById('passedStudents');
const failedStudentsEl = document.getElementById('failedStudents');
const averageScoreEl = document.getElementById('averageScore');

// Initialize the exam dropdown
function initExamSelect() {
    exams.forEach(exam => {
        const option = document.createElement('option');
        option.value = exam.id;
        option.textContent = exam.name;
        examSelect.appendChild(option);
    });
}

// View results button click handler
viewResultsBtn.addEventListener('click', () => {
    const selectedExamId = parseInt(examSelect.value);
    if (selectedExamId) {
        displayResults(selectedExamId);
    } else {
        alert('Please select an exam first');
    }
});

// Display results for selected exam
function displayResults(examId) {
    const exam = exams.find(e => e.id === examId);
    const examResults = results.filter(r => r.examId === examId);

    if (examResults.length === 0) {
        alert('No results found for this exam');
        return;
    }

    // Update UI
    examTitle.textContent = exam.name;
    statsContainer.classList.remove('hidden');
    resultsContainer.classList.remove('hidden');
    noExamMessage.classList.add('hidden');

    // Calculate statistics
    calculateStatistics(examResults);

    // Populate results table
    populateResultsTable(examResults);
}

// Calculate and display statistics
function calculateStatistics(examResults) {
    const totalStudents = examResults.length;
    const passedStudents = examResults.filter(r => r.status === 'Passed').length;
    const failedStudents = totalStudents - passedStudents;
    const averagePercentage = examResults.reduce((sum, r) => sum + r.percentage, 0) / totalStudents;

    totalStudentsEl.textContent = totalStudents;
    passedStudentsEl.textContent = passedStudents;
    failedStudentsEl.textContent = failedStudents;
    averageScoreEl.textContent = `${averagePercentage.toFixed(1)}%`;
}

// Populate the results table
function populateResultsTable(examResults) {
    resultsTableBody.innerHTML = '';

    examResults.forEach(result => {
        const row = document.createElement('tr');
        row.className = result.status === 'Passed' ? 'passed-row' : 'failed-row';

        row.innerHTML = `
            <td>${result.studentName}</td>
            <td>${result.grade}</td>
            <td>${result.percentage}%</td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${result.percentage}%"></div>
                </div>
            </td>
            <td>
                <span class="badge ${result.status === 'Passed' ? 'badge-success' : 'badge-error'}">
                    ${result.status}
                </span>
            </td>
            <td>${formatDate(result.submissionDate)}</td>
        `;

        resultsTableBody.appendChild(row);
    });
}

// Format date as "MMM DD, YYYY"
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Export to Excel (simulated)
exportBtn.addEventListener('click', () => {
    const selectedExamId = parseInt(examSelect.value);
    if (selectedExamId) {
        alert('Export to Excel functionality would be implemented here.\nIn a real app, this would download an Excel file.');
    } else {
        alert('Please select an exam first');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initExamSelect();
});