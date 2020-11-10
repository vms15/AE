$('.modal__button').click(function(event) {
	$('.modal__content').fadeOut();
	$('.modal').fadeOut();
});

$('.prize-wheel__static-image').click(function(event) {
	spin();
});

let myLink = 'https://www.google.com/';


function getRandomInt(e, t) { return Math.floor(Math.random() * (t - e + 1)) + e }

function loadCom(e, t) { setTimeout(function() { $(e).fadeIn(250) }, t) }

function dater(e) { var t = new Date; return $(e).html(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t.getDay()] + ", " + t.getDate() + ". " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t.getMonth()] + " " + t.getFullYear() + " "), !1 }


function checkZero(e) { return e < 10 ? "0" + e : e }

function timer(e, t) {
    var n = checkZero(Math.round((e - 30) / 60)),
        o = checkZero(e % 60);
    $(t).html(n + " minuts " + o + " seconds");
    var i = setInterval(function() { e--, n = checkZero(Math.round((e - 30) / 60)), o = checkZero(e % 60), $(t).html(n + " minuts " + o + " sekonds"), 0 == e && clearInterval(i) }, 1e3);
    return !1
}

function setButtonHeight() {conMid = (whCon.getBoundingClientRect().bottom - whCon.getBoundingClientRect().top) / 2, button.style.top = conMid - button.offsetHeight / 2 - .2 * button.offsetHeight / 2 + "px" }

function spin() {
    switch (count) {
        case 1:
            dWheel.className = "spinAround", setTimeout(function() { alert("نحن آسفون. \ N \ n حاول مرة أخرى. سنمنحك فرصة إضافية فقط!");
                /*document.querySelector('.content-top__subdesc').textContent = ': 2'*/ }, 6800);
            break;
        case 2:
            dWheel.className = "spinAround2", setTimeout(()=>{$('.prize-wheel__prize-image[data-v-84b44f44]').addClass('active')},7500),  setTimeout(function() { dWheel.className = dWheel.className + " transparent" }, 6800), setTimeout(function() { device.style.display = "block", device.style.left = whCon.offsetWidth / 2 - device.offsetWidth / 2 + "px", device.style.top = conMid - device.offsetHeight / 2 + "px" }, 7e3), 
            setTimeout(
                function() { 
                    window.location = myLink;
                    // first.innerHTML = "<img src='./img/loading.gif'>", 
                    // first.style.padding = "195px 0px", 
                    // setTimeout(
                    //     function() { 
                    //         first.parentNode.removeChild(first), 
                    //         second.style.display = "block"
                    // }, 1500)
                },
            9e3)
        }
    count++
}

var conMid, o,
    mydate = new Date,
    year = mydate.getFullYear(),
    month = mydate.getMonth(),
    day = mydate.getDate(),
    weekday = mydate.getDay(),
    montharray = new Array("JanuÃ¡r", "februÃ¡r", "marec", "aprÃ­l", "mÃ¡j", "jÃºn", "jÃºl", "august", "september", "oktober", "november", "december"),
    weekdayarray = new Array("NedÄ›le", "pondÄ›lÃ­", "ÃºterÃ½", "stÅ™eda", "Ätvrtek", "pÃ¡tek", "sobota"),
    count = 1,
    headline = document.getElementById("headline"),
    topDate = document.getElementById("topDate"),
    today = document.getElementById("today"),
    con = document.getElementById("content"),
    whCon = document.getElementById("wheelCon"),
    dWheel = document.getElementById("wheel"),
    button = document.getElementById("pressButton"),
    device = document.getElementById("devMockup"),
    first = document.getElementById("questions"),
    second = document.getElementById("final");

