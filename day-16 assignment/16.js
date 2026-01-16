const loading = document.getElementById("loading");
const usersDiv = document.getElementById("users");
const postsDiv = document.getElementById("posts");

/* -----------------------------
   SHOW / HIDE LOADING
--------------------------------*/
function showLoading() {
  loading.style.display = "block";
}

function hideLoading() {
  loading.style.display = "none";
}

/* -----------------------------
   1️ FETCH USERS & DISPLAY CARDS
--------------------------------*/
function fetchUsers() {
  showLoading();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      usersDiv.innerHTML = "";

      users.forEach(user => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.margin = "10px 0";

        card.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
        `;

        usersDiv.appendChild(card);
      });
    })
    .finally(hideLoading);
}

/* -----------------------------
   2️ FETCH POSTS (userId = 1)
--------------------------------*/
function fetchPosts() {
  showLoading();

  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(res => res.json())
    .then(posts => {
      postsDiv.innerHTML = "";

      posts.forEach(post => {
        const div = document.createElement("div");
        div.innerHTML = `<p><strong>${post.title}</strong></p>`;
        postsDiv.appendChild(div);
      });
    })
    .finally(hideLoading);
}

/* -----------------------------
   3 POST DATA (CREATE POST)
--------------------------------*/
const form = document.getElementById("postForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title,
      body,
      userId: 1
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Post Created:", data);
      alert("Post created successfully!");
    });
});

/* -----------------------------
   4️ UPDATE POST (PUT)
--------------------------------*/
document.getElementById("updatePost").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: 1,
      title: "Updated Title",
      body: "Updated body content",
      userId: 1
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Post Updated:", data);
      alert("Post updated successfully!");
    });
});

/* -----------------------------
   INITIAL CALLS
--------------------------------*/
fetchUsers();
fetchPosts();
