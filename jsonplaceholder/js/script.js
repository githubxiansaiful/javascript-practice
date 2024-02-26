// Load User Data from JSONPlaceholder API
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(userData => displayUserName(userData))
}

// Show User name on ul list
function displayUserName(userData) {
    const ul = document.getElementById('users-name');
    for(const user of userData) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

// Load User Data
function showUserZip() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(userData => displayUserZip(userData))
}
// Show User Zip code
function displayUserZip(userData) {
    const getUl = document.getElementById('users-zipcode');
    for(const userZip of userData) {
        const li = document.createElement('li');
        li.innerText = userZip.address.zipcode;
        getUl.appendChild(li);
    }
}