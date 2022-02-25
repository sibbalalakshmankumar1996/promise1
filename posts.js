let postsNode = document.getElementById("posts-container");

function displayPost(post){
    let {body, title} = post;
    //h1 element 
    let headNode = document.createElement("h3");
    headNode.textContent = title;
    headNode.classList.add("title");
    postsNode.appendChild(headNode);

    //para element 
    paraNode = document.createElement("p");
    paraNode.textContent = body;
    paraNode.classList.add("description");
    postsNode.appendChild(paraNode);

    //hr element 
    let lineNode = document.createElement("hr");
    postsNode.appendChild(lineNode);
}

let postButton = document.getElementById("posts");


function getPosts(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response=>{
        return response.json();
    })
    .then(data =>{
        displayResults(data);
    });
}
function displayResults(postsData){
    for (let post of postsData){
        displayPost(post);
    }
}
