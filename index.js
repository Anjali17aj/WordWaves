const express = require("express");
const app = express();
const port = 8080;
const path = require("path");//view and public folders to be used 
const { v4: uuidv4 } = require("uuid");
// uuidv4(); ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    { 
        id: uuidv4(),
        username : "Anjalik17",
        content : "Once upon a time in a quaint little garden, there lived two flowers that stood out among the rest - a radiant sunflower named Sunny and a delicate rose named Rosie. Despite their differences, they were the best of friends.Sunny was known for his tall, cheerful face that always followed the sun across the sky. Rosie was admired for her soft. She was known for her elegance and grace."
    },
    {
        id:uuidv4(),
        username : "AshChiky",
        content: " Life is a journey, a remarkable adventure filled with moments of joy, sorrow, and everything in between. It begins with a single breath, and from that moment onward, we embark on a path of discovery."
    },
    {
        id:uuidv4(),
        username : "AnitaR",
        content : " Adulthood brings responsibilities and challenges, but also the freedom to make choices. We pursue careers, build families, and chase our dreams. Life becomes a delicate balance of work and play. "
    },
];
app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => { //sent request to /posts/new
    res.render("new.ejs"); //form comes
} );

app.post("/posts", (req, res) =>{ 
   let {username, content} = req.body; //form's data came and we created new post
   let id = uuidv4(); //for new id creation
   posts.push({ id, username, content});
    res.redirect("/posts"); //sends a get request to /posts
});

app.get("/posts/:id", (req, res) =>{  //id
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
 });

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let  newContent  = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});


app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id); //delete from memory
     res.redirect("/posts");
});

app.listen(port, () =>{
    console.log("Listening to port: 8080");
});
