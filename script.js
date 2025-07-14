var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var load = document.getElementsByClassName("hidden-project");
var loadMoreBtn = document.getElementById("load-more");
var loadLessBtn = document.getElementById("load-less");

function show_more() {
    for (var i = 0; i < load.length; i++) {
        load[i].style.display = "block";
    }
    loadLessBtn.style.display = "block";
    loadMoreBtn.style.display = "none";
}

function show_less() {
    for (var i = 0; i < load.length; i++) {
        load[i].style.display = "none";
    }
    loadMoreBtn.style.display = "block";
    loadLessBtn.style.display = "none";
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwl0FKfCIeN6aUy315_vYpiQPVukxJeXdeJQ9AiOWtjXsTdqHbr2H9ETWUDkalJUj9dcw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 1000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
