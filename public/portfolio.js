// Get all elements with class 'menu'
let listProjectTitles = ["Replace Color", "Color Palette", "Kung Fu Tea POS", "Custom Spotify Web Player", "TeamUp Bytes App", "Medcheck App"];
let listProjectObjects = [];
let currentSlide = 0;
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
        icon.style.backgroundColor = "var(--supp1)"
}

function unhighlightMenuIcon(){
        let icon = document.getElementsByClassName("menuIcon")[0];
        icon.style.backgroundColor = "transparent"
}

document.querySelectorAll('.projectTitle').forEach(titleDiv => {
        titleDiv.addEventListener('click', () => {
            titleDiv.closest('.flip-card-inner').classList.toggle('flipped');
        });
});


async function fetchData() {
    for (let i = 0; i < listProjectTitles.length; i++) {
        try {
            const data = await getAPIData(listProjectTitles[i]);
            console.log('Data received:', data);
            listProjectObjects.push(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }
    loadIndicators();
}

function getAPIData(name) {
    return fetch('https://portfolio-database-678ac8e230d3.herokuapp.com/api/v1/projects/title/' + name)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error; // Propagate the error so it can be caught in the calling function
        });
}

function loadIndicators(){
        document.getElementById("indicators").innerHTML += '<i class="fa-solid fa-heart"></i>';
        for(let i = 1; i < listProjectObjects.length; i++){
                document.getElementById("indicators").innerHTML += '<i class="fa-regular fa-heart"></i>';
        }
}


function updateSlide() {
        const slideDiv = document.getElementById("innerSlideDiv");
        slideDiv.classList.add("fade-out-animation");
      
        const projectTitle = document.getElementById("projectTitle");
        const projectImg = document.getElementById("projectImg");
        const projectDesc = document.getElementById("projectDesc");
        const demoLink = document.getElementsByClassName("left")[0];
        const githubLink = document.getElementsByClassName("right")[0];
        const backProjectTitle = document.getElementById("backProjectTitle");
      
        setTimeout(() => {
          slideDiv.style.visibility = "hidden";
          slideDiv.classList.remove("fade-out-animation");
      
          projectTitle.textContent = listProjectObjects[currentSlide].title;
          backProjectTitle.textContent = listProjectObjects[currentSlide].title;
          projectImg.src = "/portImgs/" + listProjectObjects[currentSlide].image_file;
          projectDesc.textContent = listProjectObjects[currentSlide].description;
          demoLink.href = listProjectObjects[currentSlide].demo_link;
          githubLink.href = listProjectObjects[currentSlide].github_link;
          updateIndicators();
      
          // Delay adding the fade-in animation
          setTimeout(() => {
            slideDiv.style.visibility = "visible";
            slideDiv.classList.add("fade-in-animation");
            
            // After fade-in animation completes, remove the class
            setTimeout(() => {
              slideDiv.classList.remove("fade-in-animation");
            }, 250);
          }, 250);
        }, 250);
      }
      

function updateIndicators(){
        document.getElementById("indicators").innerHTML = '';
        for(let i = 0; i < listProjectObjects.length; i++){
                if(i == currentSlide){
                        document.getElementById("indicators").innerHTML += '<i class="fa-solid fa-heart"></i>';   
                }else{
                        document.getElementById("indicators").innerHTML += '<i class="fa-regular fa-heart"></i>';
                }
        }
}

function prevSlide() {
        if(currentSlide == 0){
                currentSlide = listProjectObjects.length - 1;
        }else{
                currentSlide -= 1;
        }
        document.getElementsByClassName("flip-card-inner")[0].classList.remove("flipped");
        updateSlide();
}

function nextSlide() {
        if(currentSlide == listProjectObjects.length - 1){
                currentSlide = 0;
        }else{
                currentSlide += 1;
        }
        document.getElementsByClassName("flip-card-inner")[0].classList.remove("flipped");
        updateSlide();
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
        fetchData();
}