var clicks = 0; 
var col = 1;
var upd = 100;
var miner1 = 1000;
var miner2 = 2000;
var miner3 = 5000;
var miner4 = 10000;
var miner5 = 100000;
var doupd = upd - clicks;
var domin = miner1 - clicks;
var clicksPerMin = 0;
var prin = false;
var provRand = false;
var provMin5 = false;
function startMining() {
    clicks += clicksPerMin;
    document.getElementById("clicks").innerHTML = clicks;
}
function countClicks() {
    if (col <= 1) {
        clicks += 1;
    } if( col > 1) {
        clicks += col;
    }
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("Counter_clicks").innerHTML = col;
};
function spendClick() {
    if (clicks < upd) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR / Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        clicks -= upd;
        col += 1;
        upd *= 2;
    }
    document.getElementById("clicks").innerHTML = clicks;
    alert("Количество кликов до стледующего обновления: " + (upd - clicks));
    document.getElementById("Counter_clicks").innerHTML = col;
}
function spendMin1() {
    if (clicks < miner1) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR / Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min1?");
        if (confirmation) {
            clicks -= 1000;
            clicksPerMin += 100;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin2() {
    if (clicks < miner2) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR / Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min2?");
        if (confirmation) {
            clicks -= 2000;
            clicksPerMin += 200;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin3() {
    if (clicks < miner3) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR / Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min3?");
        if (confirmation) {
            clicks -= 5000;
            clicksPerMin += 500;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin4() {
    if (clicks < miner4) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR / Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 1000 clicks on Min4?");
        if (confirmation) {
            clicks -= 10000;
            clicksPerMin += 1000;
            setInterval(startMining, 60000);
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin5() {
    if (clicks < miner5) {
        var message = document.getElementById("message");
        message.innerHTML = "ERROR / Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 100000 clicks on Min5?");
        if (confirmation) {
            clicks -= 100000;
            clicksPerMin += 10000;
            setInterval(startMining, 60000);
            provMin5 == true;
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
}
function spendMin6() {
    if (clicks < miner4) {
        var message = document.getElementById("message");
        message.innerHTML = "if you buy a Randcard, you will receive from 10 to 100 clicks / ERROR: Not enough clicks!";
        message.style.display = "block"; 
        setTimeout(function() {
            message.style.display = "none"; 
        }, 2000);
    } else {
        var confirmation = confirm("Do you want to spend 10000 clicks on RandCart?");
        if (confirmation) {
            clicks -= 10000;
            col += Math.floor(Math.random() * 10000);
            prin == true;
            provRand == true;
        }
    }
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("Counter_clicks").innerHTML = col;
}
function activParagh1() {
    if(clicks < miner1) {
        var Str1 = document.getElementById("Str1");
        Str1.innerHTML = "if you buy : 1 min = 100 clicks / Not enough clicks!";
        Str1.style.display = "block"; 
        setTimeout(function() {
            Str1.style.display = "none"; 
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh2() {
    if(clicks < miner2) {
        var Str2 = document.getElementById("Str2");
        Str2.innerHTML = "if you buy : 1 min = 200 clicks / Not enough clicks!";
        Str2.style.display = "block"; 
        setTimeout(function() {
            Str2.style.display = "none"; 
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh3() {
    if(clicks < miner2) {
        var Str3 = document.getElementById("Str3");
        Str3.innerHTML = "if you buy : 1 min = 500 clicks / Not enough clicks!";
        Str3.style.display = "block";
        setTimeout(function() {
            Str3.style.display = "none";
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh4() {
    if(clicks < miner2) {
        var Str4 = document.getElementById("Str4");
        Str4.innerHTML = "if you buy : 1 min = 1000 clicks / Not enough clicks!";
        Str4.style.display = "block";
        setTimeout(function() {
            Str4.style.display = "none";
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
function activParagh5() {
    if(clicks < miner2) {
        var Str5 = document.getElementById("Str5");
        Str5.innerHTML = "if you buy : 1 min = 10000 clicks / Not enough clicks!";
        Str5.style.display = "block";
        setTimeout(function() {
            Str5.style.display = "none";
        }, 2000);
    } 
    document.getElementById("clicks").innerHTML = clicks;
}
let taskCompleted = false;

function updateTask() {
    alert("Задание на сегодня, купить RandCart");
    if(prin == true) {
        if(completed && !taskCompleted) {
            clicks += 100;
            taskCompleted = true;
        } else {
            alert("Задание уже выполнено!");
        }
    } else {
        alert("задание не выполнено");
    }
}

function giveClicks(number) {
    let currentClicks = parseInt(document.getElementById("clicks").innerText);
    currentClicks += number;
    document.getElementById("clicks").innerText = currentClicks;
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function updateLeaderboard() {
    document.getElementById('mes').textContent = 'received';
    clicks = parseInt(document.getElementById('clicks').innerText);
    if(clicks >= 1000) {
        document.getElementById('mes1').textContent = 'received';
    } else {
        document.getElementById('mes1').textContent = 'no_received';
    }

    if(provRand == true) {
        document.getElementById('mes2').textContent = 'received';
    } else {
        document.getElementById('mes2').textContent = 'no_received';
    }

    if(provMin5 == true) {
        document.getElementById('mes4').textContent = 'received';
    } else {
        document.getElementById('mes2').textContent = 'no_received';
    }
    document.getElementById("clicks").innerHTML = clicks;
}

var nn = document.getElementById('clicks');

function save_element(){
    var confirmation = confirm("Do you want to save element");
    if(confirmation) {
        localStorage.setItem("clicks", clicks);
        localStorage.setItem("Counter_clicks", col);
        localStorage.setItem("min01", spendMin1());
    }
}
function UdateServ() { 
    clicks = localStorage.getItem("clicks") ? parseInt(localStorage.getItem("clicks")) : 0;
    col = localStorage.getItem("Counter_clicks") ? parseInt(localStorage.getItem("Counter_clicks")) : 0;
    spendMin1() = localStorage.getItem("min01") ? parseInt(localStorage.getItem("min01")) : 0;
    document.getElementById("clicks").innerHTML = clicks;
}