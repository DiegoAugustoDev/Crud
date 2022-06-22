module.exports = {
     posts: [ ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateId(), title, description});
    },

    deletePost(title, description){
        this.posts.splice({id: generateId(), title, description},1);
    }

}


function generateId(){
    return Math.random().toString(36).substring(2,9);
}