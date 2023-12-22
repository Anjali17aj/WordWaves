
# Word-Waves

Word Wave is a RESTful API Project created using CRUD operations. Here the resource is "Post". Username and content are the details of the post. 
Functionality of Post : View, individual post view, edit post, delete post. Backend has the functionality that handles different types of request so I've implemented the following:
1) GET  -> /post  to get data for all the posts.
2) POST -> /posts   to add new post. 
3) GET ->  /posts/:id  to get one post(using id) i.e individual post view.
4) PATCH / PUT -> /posts/:id   to update specific post.
5) DELETE -> /posts/:id  to delete specific post.
6) Packages : UUID (Universally  unique identifier) -> package inside express create string type unique ids for different posts.



## Tech Stack

HTML, CSS, JavaScript(Node.js), Express.js,  EJS,  REST API.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Anjali17aj/Word-Waves.git
```

Go to the project directory

```bash
  cd my-project
```

Run the project / Start the server locally

```bash
  nodemon index.js
```


## View


Screenshot :
https://drive.google.com/file/d/1IUXuCt3ikGhmO4Nu73DupjL3_0DzqwbF/view?usp=sharing