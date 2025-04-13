// Sample exam data
const exams = [
    { id: 1, name: "Midterm 1", dueDate: "2024-09-20", duration: 120, questions: 20, submissions: 150 },
    { id: 2, name: "Final Exam", dueDate: "2024-12-14", duration: 180, questions: 30, submissions: 150 },
    { id: 3, name: "Quiz 2", dueDate: "2024-10-18", duration: 45, questions: 5, submissions: 150 },
    { id: 4, name: "Lab Exam", dueDate: "2023-11-03", duration: 60, questions: 10, submissions: 150 },
    { id: 5, name: "Homework 1", dueDate: "2024-10-04", duration: 0, questions: 0, submissions: 150 }
];

// Current exam being edited
let currentEditExamId = null;

// Function to format date as "MMM DD, YYYY"
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to render exams table
function renderExamsTable() {
    const tableBody = document.getElementById('examsTableBody');
    tableBody.innerHTML = '';

    exams.forEach(exam => {
        const row = document.createElement('tr');
        row.className = 'exam-card';
        row.innerHTML = `
            <td class="exam-title">${exam.name}</td>
            <td>${formatDate(exam.dueDate)}</td>
            <td>${exam.duration}</td>
            <td>${exam.questions}</td>
            <td>${exam.submissions}</td>
            <td>
                <div class="flex space-x-2">
                    <button onclick="openEditModal(${exam.id})" class="action-btn edit-btn">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button onclick="deleteExam(${exam.id})" class="action-btn delete-btn text-red-500">
                        <i class="fas fa-trash-alt"></i> Delete
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to open edit modal
function openEditModal(examId) {
    const exam = exams.find(e => e.id === examId);
    if (exam) {
        currentEditExamId = examId;
        document.getElementById('editExamName').value = exam.name;
        document.getElementById('editDueDate').value = exam.dueDate;
        document.getElementById('editDuration').value = exam.duration;
        document.getElementById('editQuestions').value = exam.questions;
        document.getElementById('editExamModal').showModal();
    }
}

// Function to save edited exam
document.getElementById('saveChangesBtn').addEventListener('click', () => {
    const examIndex = exams.findIndex(e => e.id === currentEditExamId);
    if (examIndex !== -1) {
        exams[examIndex].name = document.getElementById('editExamName').value;
        exams[examIndex].dueDate = document.getElementById('editDueDate').value;
        exams[examIndex].duration = parseInt(document.getElementById('editDuration').value);
        exams[examIndex].questions = parseInt(document.getElementById('editQuestions').value);

        renderExamsTable();
        document.getElementById('editExamModal').close();
    }
});

// Function to delete exam
function deleteExam(examId) {
    if (confirm('Are you sure you want to delete this exam?')) {
        const examIndex = exams.findIndex(e => e.id === examId);
        if (examIndex !== -1) {
            exams.splice(examIndex, 1);
            renderExamsTable();
        }
    }
}

// Initialize the table on page load
document.addEventListener('DOMContentLoaded', renderExamsTable);