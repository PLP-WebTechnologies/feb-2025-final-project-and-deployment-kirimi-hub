function likePost() {
  alert("Thanks for liking the post!");
  // Optional: Store in localStorage
  let count = localStorage.getItem("likes") || 0;
  count++;
  localStorage.setItem("likes", count);
}
