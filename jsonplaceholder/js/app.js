function loadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displaUserData(data))
}

function displaUserData(data) {
    console.log(data);
}