for(i = 0;i < document.getElementsByClassName("timeSinceDate").length;i++) {
    timeSince(document.getElementsByClassName("timeSinceDate")[i]);
}

function timeSince(element) {

    let date1 = new Date(element.getAttribute('dateData').toString());
    
    let today = new Date();
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+" "+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    let date2 = new Date(date);
    
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffHours = Math.ceil(timeDiff / (1000 * 3600))-1; 
    
    diffHours = Math.round(diffHours * 100) / 100;
    element.innerText = formatHours(diffHours);
}

function formatHours(hours) {
    if(hours != 0) {
        if(hours <= 24)
            return "vor "+hours+" std";
        else
            return "vor "+(Math.round(hours/24)*100)/100+"t";
    } else {
        return "vor weniger als 1 Std";
    }
}