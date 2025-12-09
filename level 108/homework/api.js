fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data));

fetch("https://goa-api.vercel.app/api/users")
.then(res => res.json())
.then(data => console.log(data));
