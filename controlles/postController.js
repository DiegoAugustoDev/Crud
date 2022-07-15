const Post = require("../model/Post")

const addPost = async (req,res)=>{
    let post = new Post(req.body)
    try{
        let doc = await post.save()
        res.redirect("/")
    }catch(error){
        res.send(error)
    }
}

const allPosts = async (req,res)=>{
    try{
      let docs = await Post.find({})
      res.render("index", {posts:docs})
    }catch (error){
      res.send(error)
    }
  }

  const deletePost = async (req,res)=>{
    let id = req.params.id

    if(!id){
      id = req.body.id
    }

    try{
      await Post.findByIdAndDelete(id)
      res.redirect("/")
    }catch (error){
      res.status(404).send(error)
    }
}


const loadPost = async (req,res)=>{
  let id = req.params.id
  try{
   let doc = await Post.findById(id)
    res.render("edit", {error:false, body: doc})
  }catch(error){
    res.status(404).send(error)
  }
}

const editPost = async (req,res)=>{
  let post = {}
  post.item = req.body.item

  let id = req.params.id

  if(!id){
    id = req.body.id
  }
  try{
    let doc = await Post.findByIdAndUpdate(id, post)
    res.redirect("/")
  }catch(error){
    res.render("edit",{error, body:req.body})
  }
}

module.exports = {addPost, allPosts, deletePost, loadPost, editPost}