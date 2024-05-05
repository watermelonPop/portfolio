
function showHoverIcon(){
        let icons = document.getElementsByClassName("hoverIconDiv");
        for(let i = 0; i < icons.length; i++){
                icons[i].style.visibility = "visible"
        }
}

function hideHoverIcon(){
        let icons = document.getElementsByClassName("hoverIconDiv");
        for(let i = 0; i < icons.length; i++){
                icons[i].style.visibility = "hidden";
        }
}

function showSettingsIcon(){
        let icon = document.getElementById("settingsIcon");
        icon.style.visibility = "visible";
}

function hideSettingsIcon(){
        let icon = document.getElementById("settingsIcon");
        icon.style.visibility = "hidden";
}


function startTrans(next) {
        // Slide out animation for the current page
        if(document.getElementById('transDiv').classList.contains('fade-out')){
            document.getElementById('transDiv').classList.remove('fade-out');
        }
        document.getElementById('transDiv').style.visibility = "visible";
        document.getElementById('transDiv').classList.add('fade-in');
        // After a short delay, load the new page
        setTimeout(function() {
            window.location.href = next;
        }, 1000);
    }
    
    window.onload = function() {
        // Remove animation class when the new page loads
        if(document.getElementById('transDiv').classList.contains('fade-in')){
            document.getElementById('transDiv').classList.remove('fade-in');
        }
        document.getElementById('transDiv').classList.add('fade-out');
        setTimeout(function() {
            document.getElementById('transDiv').style.visibility = "hidden";
        }, 500); // Adjust delay time to match animation duration
    }
    