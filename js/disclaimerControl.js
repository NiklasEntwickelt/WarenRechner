window.onload = function() {
        
    //Webhoster 000webhost.com has a message regarding ukraine war, it blocks view so it was modified to be visible more.
    if(document.getElementsByClassName("disclaimer")[0] == null) return;
    
    //get disclaimer element
    let text = document.getElementsByClassName("disclaimer")[0].innerHTML;

    //make it more transparent and add the disclaimer that this is a hostmessage and not privided by me.
    document.getElementsByClassName("disclaimer")[0].innerHTML = "<b>Hostbroadcast:</b> " + text;
    document.getElementsByClassName("disclaimer")[0].style.filter = "opacity(0.5)";
    
    //Add mouseover hover transparancy for better reading, if intrested.
    document.getElementsByClassName("disclaimer")[0].addEventListener("mouseover", function( event ) {
        event.target.style.filter = "opacity(1)";
    }, true)
    
    document.getElementsByClassName("disclaimer")[0].addEventListener("mouseout", function( event ) {
        event.target.style.filter = "opacity(0.5)";
    }, true)
    
} 