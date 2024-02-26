function loadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => displaUserData(json))
}

function displaUserData(json) {
    console.log(json);
}