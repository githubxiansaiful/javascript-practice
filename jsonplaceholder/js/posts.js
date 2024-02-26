// load posts from API
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => posts(data))
}
// display posts
function posts(posts) {
    const postContainer = document.getElementById('posts-conatiner');
    for(const post of posts) {
        const createPostDiv = document.createElement('div');
        createPostDiv.innerHTML = `
            <h3 class="post-title">${post.title}</h3>
            <p class="post-content">${post.body}</p>
            <h5 class="author-name">Author Id: ${post.userId}</h5>
        `;
        postContainer.appendChild(createPostDiv);
    }
}
loadPosts();