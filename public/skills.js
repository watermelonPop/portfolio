// Get all elements with class 'menu'
const menuElements = document.querySelectorAll('.menu');

// Loop through each menu element
menuElements.forEach(menu => {
    // Get all 'a' elements within the menu element
    const menuLinks = menu.querySelectorAll('a');

    // Loop through each 'a' element
    menuLinks.forEach(link => {
        // Add event listener for mouseover event
        link.addEventListener('mouseover', () => {
            // Your code here
            // For example, you can add a class to the element
            highlightMenuIcon()
            link.classList.add('hovered');
        });

        // Add event listener for mouseout event
        link.addEventListener('mouseout', () => {
            // Your code here
            // For example, you can remove a class from the element
            unhighlightMenuIcon()
            link.classList.remove('hovered');
        });
    });
});


function highlightMenuIcon(){
        let icon = document.getElementsByClassName("menuIcon")[0];
        icon.style.backgroundColor = "var(--main)"
}

function unhighlightMenuIcon(){
        let icon = document.getElementsByClassName("menuIcon")[0];
        icon.style.backgroundColor = "transparent"
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
