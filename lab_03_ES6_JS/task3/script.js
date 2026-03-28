// Boolean flag to simulate failure
let isError = false; // Change to true to test reject()

// Function returning a Promise
function fetchUsers() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!isError) {
                resolve([
                    { id: 1, name: "AAbdul Rahman" },
                    { id: 2, name: "Zain" },
                    { id: 3, name: "Ali" }
                ]);
            } else {
                reject("Failed to load user data!");
            }

        }, 3000); // 3 seconds delay

    });
}

// Function to load users
function loadUsers() {

    document.getElementById("message").innerText = "Loading data... Please wait.";
    document.getElementById("userList").innerHTML = "";

    fetchUsers()
        .then(users => {

            document.getElementById("message").innerText = "Users Loaded Successfully ✅";

            let list = document.getElementById("userList");

            users.forEach(user => {
                let li = document.createElement("li");
                li.innerText = user.name;
                list.appendChild(li);
            });

        })
        .catch(error => {
            document.getElementById("message").innerText = error;
        });
}