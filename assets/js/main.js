const times = document.querySelectorAll(".time");
for (let i = 0, len = times.length; i < len; i++) {
    times[i].innerHTML = timeForToday(times[i].textContent);
}

function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

const menuBar = document.querySelector(".menu-bar");
function toggleBar() {
    if (menuBar.style.display === "none") {
        menuBar.style.display = "block";
    } else {
        menuBar.style.display = "none";
    }
}

const groups = document.querySelectorAll(".archive-group");
function showTag(tagName) {
    for (let i = 0, len = groups.length; i < len; i++) {
        groups[i].style.display = 'none';
    }
    document.querySelector(`#${tagName}`).style.display = 'block'
}

let url = window.location.href;
let req = /\?tag=([^\s]+)$/.exec(url);
const s_groups = document.querySelectorAll(".group-selector");

if(Array.isArray(req)) {
    tagName = req.pop();
    for (let i = 0, len = s_groups.length; i < len; i++) {
        s_groups[i].style.backgroundColor = "#e2e8f0";
        s_groups[i].style.color = "#000";
    }
    document.querySelector(`#s_${tagName}`).style.backgroundColor = "#38b2ac";
    document.querySelector(`#s_${tagName}`).style.color = "#fff";
    showTag(tagName);
}
