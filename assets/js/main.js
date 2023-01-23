const userDivBtn = document.getElementById("user-div-btn");
const shareDivBtn = document.getElementById("share-div-btn");
const shareDiv = document.getElementById("share-div");

const toggleShareDiv = () => {shareDiv.classList.toggle("hidden")}

userDivBtn.addEventListener("click",toggleShareDiv);
shareDiv.addEventListener("click",toggleShareDiv);