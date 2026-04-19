const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const feed = document.getElementById("feed");

postBtn.addEventListener("click", () => {
  const text = postInput.value.trim();

  if (text === "") return;

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const content = document.createElement("p");
  content.textContent = text;

  const time = document.createElement("div");
  time.classList.add("timestamp");
  time.textContent = new Date().toLocaleString();

  const actions = document.createElement("div");
  actions.classList.add("post-actions");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "🗑️ Delete";
  deleteBtn.addEventListener("click", () => {
    postDiv.remove();
  });

  actions.appendChild(deleteBtn);

  postDiv.appendChild(content);
  postDiv.appendChild(time);
  postDiv.appendChild(actions);

  feed.prepend(postDiv);

  postInput.value = "";
});