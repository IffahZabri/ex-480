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
  actions.classList.add("actions");

  const likeBtn = document.createElement("button");
  likeBtn.classList.add("like-btn");
  likeBtn.textContent = "Like";

  const likeCount = document.createElement("span");
  likeCount.classList.add("like-count");
  likeCount.textContent = "0";

  let likes = 0;
  let liked = false;

  likeBtn.addEventListener("click", () => {
    if (liked) {
      likes--;
      likeBtn.textContent = "Like";
      likeBtn.classList.remove("liked");
    } else {
      likes++;
      likeBtn.textContent = "Unlike";
      likeBtn.classList.add("liked");
    }
    liked = !liked;
    likeCount.textContent = likes;
  });

  actions.appendChild(likeBtn);
  actions.appendChild(likeCount);

  postDiv.appendChild(content);
  postDiv.appendChild(actions);
  postDiv.appendChild(time);

  feed.prepend(postDiv);

  postInput.value = "";
});