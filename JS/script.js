let pagename = window.location;
pagename = pagename.pathname.split("/").pop();
if (pagename == "index.html") {
    let path = document.getElementsByClassName("navbar-item")[0]
    path.classList.toggle("is-active")
} else {
    let path = document.getElementsByClassName("navbar-item")[1]
    path.classList.toggle("is-active")
}