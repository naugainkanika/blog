document.addEventListener("DOMContentLoaded", function() {
    const posts = {
        1: {
            title: "First Blog Post",
            content: "<p>This is the content of the first blog post. Lorem ipsum dolor sit amet...</p>"
        },
        2: {
            title: "Second Blog Post",
            content: "<p>This is the content of the second blog post. Lorem ipsum dolor sit amet...</p>"
        }
        // Add more posts as needed
    };

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');

    if (postId && posts[postId]) {
        document.title = posts[postId].title;
        document.getElementById('post-content').innerHTML = `
            <h2>${posts[postId].title}</h2>
            ${posts[postId].content}
        `;
    }
});
