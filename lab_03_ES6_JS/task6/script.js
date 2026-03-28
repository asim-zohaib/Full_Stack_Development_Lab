// 1. CLASS: Student structure define karne ke liye
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.courses = new Set(); // 2. SET: Unique courses register karne ke liye
    }

    addCourse(courseName) {
        this.courses.add(courseName);
        console.log(`${courseName} added for ${this.name}`);
    }
}

// 3. MAP: Students ko unique ID ke sath store karne ke liye
const universityPortal = new Map();

// 4. PROMISE: Data save hone ka intezar (Simulation)
function saveStudentData(student) {
    return new Promise((resolve, reject) => {
        document.getElementById('status-msg').innerText = `Saving ${student.name}'s data...`;
        
        setTimeout(() => {
            const isServerOnline = true; // Simulating server status
            if (isServerOnline) {
                resolve(`Success: ${student.name} is now in the database.`);
            } else {
                reject("Error: Could not connect to server.");
            }
        }, 2500); // 2.5 seconds ka delay
    });
}

// --- Implementation ---

// Student create karein
const s1 = new Student(101, "Ahmed Ali");
s1.addCourse("Programming Fundamentals");
s1.addCourse("Data Structures");
s1.addCourse("Programming Fundamentals"); // Duplicate: Set ise automatically remove kar dega

// Map mein store karein
universityPortal.set(s1.id, s1);

// UI par dikhayein (Map se nikaal kar)
const listUI = document.getElementById('student-list');
universityPortal.forEach((std) => {
    listUI.innerHTML += `<li><strong>ID: ${std.id}</strong> - ${std.name} (${std.courses.size} courses)</li>`;
});

// Save process start karein (Promise)
saveStudentData(s1)
    .then((message) => {
        document.getElementById('status-msg').innerText = message;
        document.getElementById('status-msg').style.color = "green";
    })
    .catch((error) => {
        document.getElementById('status-msg').innerText = error;
        document.getElementById('status-msg').style.color = "red";
    });