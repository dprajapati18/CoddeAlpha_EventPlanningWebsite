document.addEventListener("DOMContentLoaded", function () {
    checkUserStatus();
});

function checkUserStatus() {
    const userInfo = document.getElementById("user-info");
    const username = localStorage.getItem("username");

    if (username) {
        userInfo.textContent = `Logged in as: ${username} | `;
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logout";
        logoutButton.addEventListener("click", logout);
        userInfo.appendChild(logoutButton);
    } else {
        const loginButton = document.createElement("button");
        loginButton.textContent = "Login";
        loginButton.addEventListener("click", login);
        userInfo.appendChild(loginButton);
    }
}

function login() {
    const username = prompt("Enter your username:");
    if (username) {
        localStorage.setItem("username", username);
        checkUserStatus();
    }
}

function logout() {
    localStorage.removeItem("username");
    checkUserStatus();
    
}
function CreateEvent() {
   
    const eventName = document.getElementById("eventName").value;
   
    const eventDate = document.getElementById("eventDate").value;

    const eventCalendar = document.getElementById("eventCalendar");
    const eventElement = document.createElement("div");
    eventElement.textContent = `${eventName} - ${eventDate}`;

    const rsvpButton = document.createElement("button");
    rsvpButton.textContent = "you have event on this day";
    rsvpButton.addEventListener("click", function () {
        alert(`You have Event'd for ${eventName} on ${eventDate}`);
    });

    eventElement.appendChild(rsvpButton);
    eventCalendar.appendChild(eventElement);
   
}
