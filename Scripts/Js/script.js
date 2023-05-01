let searchForm = document.querySelector('.search-form');
const giBtn = document.getElementById("gi-btn");
const peppaBtn = document.getElementById("peppa-btn");

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
}

giBtn.addEventListener("click", () => alert("Genshin Impact lore"));
peppaBtn.addEventListener("click", () => window.location.href = "https://www.youtube.com/watch?v=GBIIQ0kP15E");
