// window.onload = choosePic;

let kittyImages = ['images/kitty1.png', 'images/kitty2.png', 'images/kitty3.png', 'images/kitty4.png', 'images/kitty5.png', 'images/kitty6.png', 'images/kitty7.png'];
const thoughtInput = document.querySelector('.input');
const createBtn = document.querySelector('#create');
const feed = document.querySelector('#main');

createBtn.addEventListener('click', createPost);
feed.addEventListener('click', removePost);

function choosePic() {
    var randomNum = Math.floor(Math.random() * kittyImages.length);
    return kittyImages[randomNum];
}

function createPost() {
    if (thoughtInput.value === '') {

    }
    else if (feed.lastElementChild.classList.contains('newpost') || feed.lastElementChild.classList.contains('post2')) {
        createEle('post1')
    } else {
        createEle('post2')
    }
}

function removePost(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
}

function createEle(postclass) {
    let post = document.createElement("ARTICLE");
    post.className = postclass;
    let del = document.createElement("span");
    del.innerHTML = "delete";
    del.className = 'material-icons delete';
    post.appendChild(del);
    let blog = document.createElement("p");
    blog.className = 'blog';
    blog.appendChild(document.createTextNode(thoughtInput.value));
    post.appendChild(blog);
    const image = document.createElement('IMG');
    image.className = 'kitty';
    image.src = choosePic();
    post.appendChild(image);
    feed.appendChild(post);
    thoughtInput.value = '';

}
