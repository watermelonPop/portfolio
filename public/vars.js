

let themes = [
        {name: 'strawberry', main: '#F6838C', supp1: '#FFBEC5', supp2: '#A2D18D', accent: '#FEF8E6'},
        {name: 'dabadeedabadi', main: '#1B263B', supp1: '#415A77', supp2: '#778DA9', accent: '#E0E1DD'},
        {name: 'red velvet', main: '#461220', supp1: '#8C2F39', supp2: '#B23A48', accent: '#FCB9B2'},
        {name: 'purple rain', main: '#370824', supp1: '#6B4663', supp2: '#7EA0B7', accent: '#F5DEF0'},
];
if(localStorage.getItem('customTheme') == null){
        let initialCustom = {name: 'custom', main: '#F6838C', supp1: '#FFBEC5', supp2: '#A2D18D', accent: '#FEF8E6'};
        localStorage.setItem("customTheme", JSON.stringify(initialCustom));
}

changeTheme(parseInt(localStorage.getItem("currentTheme")));
if(document.getElementById('themesDiv') != null){
        for(let i = 0; i < themes.length; i++){
                document.getElementById('themesDiv').innerHTML += '<div class="outerThemeDiv" onclick="changeTheme(' + i + ')"><p class="themeTitle">' + themes[i].name + '</p><div class="themeDiv"><div class="colorDiv" id="mainColor" style="background-color: ' + themes[i].main + ';"></div><div class="colorDiv" id="supp1Color" style="background-color: ' + themes[i].supp1 + ';"></div><div class="colorDiv" id="supp2Color" style="background-color: ' + themes[i].supp2 + ';"></div><div class="colorDiv" id="accentColor" style="background-color: ' + themes[i].accent + ';"></div></div></div>';
        }
        let currentCustom = JSON.parse(localStorage.getItem("customTheme"));
        document.getElementById('themesDiv').innerHTML += '<div class="outerThemeDiv" onclick="setCustom()"><p class="themeTitle">' + currentCustom.name + ' <i class="fa-solid fa-pen-to-square" id="editIcon" onclick="openCustom()"></i></p><div class="themeDiv"><div class="colorDiv" id="mainColor" style="background-color: ' + currentCustom.main + ';"></div><div class="colorDiv" id="supp1Color" style="background-color: ' + currentCustom.supp1 + ';"></div><div class="colorDiv" id="supp2Color" style="background-color: ' + currentCustom.supp2 + ';"></div><div class="colorDiv" id="accentColor" style="background-color: ' + currentCustom.accent + ';"></div></div></div>';
        document.getElementsByClassName("outerThemeDiv")[parseInt(localStorage.getItem("currentTheme"))].style.backgroundColor = 'black';
        document.getElementsByClassName("themeTitle")[parseInt(localStorage.getItem("currentTheme"))].style.color = 'var(--accent)';
}



function changeTheme(index){
        if(index == themes.length){
                setCustom();
        }else{
                let theme = themes[index];
                var r = document.querySelector(':root');
                r.style.setProperty('--main', theme.main);
                r.style.setProperty('--accent', theme.accent);
                r.style.setProperty('--supp1', theme.supp1);
                r.style.setProperty('--supp2', theme.supp2);
                localStorage.setItem("currentTheme", String(index));
                if(document.getElementsByClassName("outerThemeDiv").length != 0){
                        for(let i = 0; i < document.getElementsByClassName("outerThemeDiv").length; i++){
                                document.getElementsByClassName("outerThemeDiv")[i].style.backgroundColor = 'var(--accent)';
                                document.getElementsByClassName("themeTitle")[i].style.color = 'black';
                        }
                        document.getElementsByClassName("outerThemeDiv")[parseInt(localStorage.getItem("currentTheme"))].style.backgroundColor = 'black';
                        document.getElementsByClassName("themeTitle")[parseInt(localStorage.getItem("currentTheme"))].style.color = 'var(--accent)';
                }
        }
}

function setCustomTheme(main, supp1, supp2, accent){
        let custom = {name: 'custom', main: main, supp1: supp1, supp2: supp2, accent: accent};
        localStorage.setItem("customTheme", JSON.stringify(custom));
}

function setCustom(){ //set custom as theme
        let currCustom = JSON.parse(localStorage.getItem("customTheme"));
        
        var r = document.querySelector(':root');
        r.style.setProperty('--main', currCustom.main);
        r.style.setProperty('--accent', currCustom.accent);
        r.style.setProperty('--supp1', currCustom.supp1);
        r.style.setProperty('--supp2', currCustom.supp2);
        localStorage.setItem("currentTheme", String(themes.length));
        if(document.getElementsByClassName("outerThemeDiv").length != 0){
                for(let i = 0; i < document.getElementsByClassName("outerThemeDiv").length; i++){
                        document.getElementsByClassName("outerThemeDiv")[i].style.backgroundColor = 'var(--accent)';
                        document.getElementsByClassName("themeTitle")[i].style.color = 'black';
                }
                document.getElementsByClassName("outerThemeDiv")[parseInt(localStorage.getItem("currentTheme"))].style.backgroundColor = 'black';
                document.getElementsByClassName("themeTitle")[parseInt(localStorage.getItem("currentTheme"))].style.color = 'var(--accent)';
        }
}

