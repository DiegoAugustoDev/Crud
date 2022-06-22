

document.addEventListener("DOMContentLoaded", ()=>{
    updatePosts()
})

function updatePosts(){

    fetch("http://192.168.100.9:3000/api/all").then(res=>{
       return res.json()
}).then(json=>{

    let postElements = ""

    let posts = JSON.parse(json)
    posts.forEach((post)=>{
        let postElement = `   <div id=${post.id} class="card mb-3">
        <div class="card-header">
            <button onclick="deletePost()" class="btn btn-danger float-end"><i class="fa-solid fa-trash"></i></button>
            <button data-bs-toggle="modal" data-bs-target="#editModal"  class="btn btn-primary float-end"><i class="fa-solid fa-pen"></i></button>
            <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
            <div class="card-text">${post.description}</div>
        </div>
        </div>`

        postElements += postElement;
    })
    document.getElementById("posts").innerHTML = postElements
})

}

function newPost(){
    let title = document.getElementById("title").value
    let description = document.getElementById("desc").value

    

    let post = {title, description}

    const options = {method: "POST",
    headers: new Headers({"content-type": "application/json"}),
    body:JSON.stringify(post)
    }

fetch("http://192.168.100.9:3000/api/new", options).then(res=>{
console.log(res)
updatePosts()
document.getElementById("title").value = ""
document.getElementById("desc").value = ""
})
}   

function deletePost(){
    
    let post = {}

    fetch("http://192.168.100.9:3000/api/delete/:id", {method:"DELETE",
    headers: new Headers({"content-type": "application/json"}),
    body:JSON.stringify(post)})
    .then(res=>{
        console.log(res)
    })
    updatePosts()
}

function editPost(){
   let editTitle = document.getElementById("editTitle")
   let editDescription = document.getElementById("editDescription")

   const editedPost = {
        title: editTitle.value,
        description: editDescription.value
   }

   fetch("http://192.168.100.9:3000/api/editPost", {method:"PUT",
    headers: new Headers({"content-type": "application/json"}),
    body:JSON.stringify(editedPost)})
    .then(res=>{
        console.log(res)
    })
    updatePosts()

}