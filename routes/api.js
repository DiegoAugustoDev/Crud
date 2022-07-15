const express = require("express");
const router = express.Router();
const postController = require("../controlles/postController")
const methodOverrride = require("method-override")

router.use(methodOverrride("_method"))

router.get("/edit/:id", postController.loadPost)
router.get("/", postController.allPosts)


router.post("/", express.urlencoded({extended:true}), postController.addPost)
router.post("/edit/:id", express.urlencoded({extended:true}), postController.editPost)

router.delete("/:id", postController.deletePost)
router.delete("/", express.urlencoded({extended:true}), postController.deletePost)

module.exports=router;