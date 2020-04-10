// mimiking like its fetching from database


const posts = [
    { title: "Post One", body: 'This is Post one' },
    { title: "Post Two", body: 'This is Post Two' }
]

//  set timeout---- 

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}  ${post.body}</li>`;

        })

        // addn the post to body

        document.body.innerHTML = output;
    }, 1000);
}

// create post

function createPost(post, callbacks) {
    setTimeout(() => {
        posts.push(post);
        callbacks();
    }, 2000)
}

