// 1. Create 3 student objects
const studentsArray = [
    { name: "Zeeshan", age: 21, semester: 5, courses: ["React", "Node.js", "MongoDB"] },
    { name: "Ayesha", age: 20, semester: 3, courses: ["HTML", "CSS", "UI/UX"] },
    { name: "Bilal", age: 22, semester: 7, courses: ["Python", "Machine Learning"] }
];

// 2. Convert objects to JSON string (Sending data format)
const jsonString = JSON.stringify(studentsArray);
console.log("JSON String:", jsonString);

// 3. Convert JSON back to objects (Receiving data format)
const parsedData = JSON.parse(jsonString);

// 4. Use destructuring inside the loop to extract properties
const displayGrid = document.getElementById('student-grid');

// 6. Loop through students using forEach
parsedData.forEach((student) => {
    // Destructuring: variables ko direct object se nikaalna
    const { name, age, semester, courses } = student;

    // 5. Display student info in HTML using innerHTML
    displayGrid.innerHTML += `
        <div class="card">
            <h3>${name}</h3>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Semester:</strong> ${semester}</p>
            <p><strong>Courses:</strong> <span class="course-list">${courses.join(", ")}</span></p>
        </div>
    `;
});