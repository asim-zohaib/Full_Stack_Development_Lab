// Student Class
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    // Method to return student details
    getDetails() {
        return `
            <div class="student-card">
                <h3>${this.name}</h3>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong> ${this.courses.join(", ")}</p>
            </div>
        `;
    }
}

// Creating Student Objects
const student1 = new Student(1, "hamza Khan", "3rd", ["Web Development", "Database Systems"]);
const student2 = new Student(2, "Azmat Ahmed", "2nd", ["OOP", "Data Structures"]);
const student3 = new Student(3, "Aliyan Tariq", "1st", ["Programming Fundamentals", "Calculus"]);

// Store students in an array
const students = [student1, student2, student3];

// Select container
const studentContainer = document.getElementById("students");

// Display students dynamically
let output = "";

students.forEach(student => {
    output += student.getDetails();
});

studentContainer.innerHTML = output;