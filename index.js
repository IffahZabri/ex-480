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

  postDiv.appendChild(content);
  postDiv.appendChild(time);

  feed.prepend(postDiv);

  postInput.value = "";
});