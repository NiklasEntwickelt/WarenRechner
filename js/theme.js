applyTheme("dark");
//init after loading elements
document.addEventListener("DOMContentLoaded", function() {
    
});

    

// for rewrite purposes
function applyTheme(theme) {
    for(i = 0;i < document.getElementsByClassName("themeable").length;i++) {
        var themeable = document.getElementsByClassName("themeable")[i];
        
            switch(theme) {
                case "dark":
                    document.body.style.backgroundImage = 'url("img/main/backgrounds/line-bg-edit-dark.png")';
                    
                    switch(themeable.tagName.toUpperCase()) {
                        case "NAV":
                            clearThemes(themeable);
                            themeable.classList.add("themeable-dark");
                            
                            themeable.style.backgroundColor = "#4f8ba2";
                        break;
                        
                        //All Elements wich should be recolored the same way
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "DIV":
                        case "P":
                            themeable.style.color = "white";
                        break;
                        
                        case "TABLE":
                            themeable.classList.remove("table-custom");
                            themeable.classList.add("table-dark");
                        break;
                            
                        case "INPUT":
                            themeable.style.color = "black";
                        break;
                        
                        case "BUTTON":
                            themeable.classList.add("btn-primary");
                            themeable.classList.remove("btn-danger");
                        break;
                    }
                    
                break;
                
                default:
                    document.body.style.backgroundImage = 'url("img/main/backgrounds/line-bg-edit-blue.png")'
                    
                    switch(themeable.tagName.toUpperCase()) {
                        case "NAV":
                            clearThemes(themeable);
                            themeable.classList.add("themeable-light");
                            
                            themeable.style.backgroundColor = "#2596be";
                        break;
                        
                        //All Elements wich should be recolored the same way
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "DIV":
                        case "P":
                            themeable.style.color = "black";
                        break;
                        
                        case "TABLE":
                            themeable.classList.remove("table-dark");
                            themeable.classList.add("table-custom");
                        break;
                        
                        case "INPUT":
                            themeable.style.color = "black";
                        break;
                        
                        case "BUTTON":
                            themeable.classList.remove("btn-primary");
                            themeable.classList.add("btn-danger");
                        break;
                    }
                break;
            }
    }
}


function clearThemes(themeable) {
    //for further implementation of more themes.
    themeable.classList.remove("themeable-light");
    themeable.classList.remove("themeable-dark");
}




//Select Theme button
let themeButton = document.getElementById("theme-button");

//Register click event
themeButton.onclick = function() {switchTheme();};

function switchTheme() {

    //Swap element on click        
    if(themeButton.value == "light") {

        themeButton.textContent = "Dunkles Theme";
        themeButton.value = "dark";
        themeButton.classList.remove("btn-outline-light");
        themeButton.classList.add("btn-outline-dark");

        applyTheme("dark");
    } else {
        themeButton.textContent = "Helles Theme";
        themeButton.value = "light";
        
        themeButton.classList.remove("btn-outline-dark");
        themeButton.classList.add("btn-outline-light");
        
        applyTheme("light");
    }
}