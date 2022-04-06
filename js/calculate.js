calc();

for(let field of document.getElementsByClassName("input")) {
    field.oninput = function() { calc() };
}


//Remove all input values from the fields
function clearInput() {
        for(let field of document.getElementsByClassName("input")) {
                field.value = "";
                calc();
        }
}


//Calculate the generated fields
function calc() {
    const sumVK = [];
    const sumEK = [];
    
    
   //Get Loop amount of by reading tr elements in Table Generator
    let tg = document.getElementById('tableGenerator');
    let trAmount = tg.getElementsByTagName('tr').length;
   
   //Loop through Table Rows
   for(let i = 0;i < trAmount;i++) {
       
       /* Dirty code TBR */
       //PROBLEM SOLVING: CREATE METHOD RUN BEFORE . gets converted to ,
       
               
        //remove doubles
        if(document.getElementById(i+".amount").value.includes(".")) {
            document.getElementById(i+".amount").value = document.getElementById(i+".amount").value.replace(".","");
        }
        
                
        //remove doubles
        if(document.getElementById(i+".stackAmount") != null)
        if(document.getElementById(i+".stackAmount").value.includes(".")) {
            document.getElementById(i+".stackAmount").value = document.getElementById(i+".stackAmount").value.replace(".","");
        }
       
        let ek = document.getElementById(i+'.eki').textContent.replace(".","").replace(",",".").replace("€",'');
        let vk = document.getElementById(i+'.vki').textContent.replace(".","").replace(",",".").replace("€",'');
        let isStacked = document.getElementById(i+'.isStacked').value;
        let amount = document.getElementById(i+'.amount').value;
        let stackAmount = 0;
        
        
        //Check if element is NOT hidden.
        if(document.getElementById(i+".stackAmount") != null) {
            
            //Element is visible, check if element has value = null 
            if(document.getElementById(i+".stackAmount").value == null) {
                //Element is visible but value is empty, set it to 0
                document.getElementById(i+".stackAmount").value = "0";
            } else {
                //Element is visible, and the value is NOT null, assign value from it
                stackAmount = document.getElementById(i+".stackAmount").value;
            }
            
        }
        
        //function cleanup, TBA.



       
       //Remove negative numbers and limit amount to 1000
        removeNegatives("amount",i);
        removeNegatives("stackAmount",i);

        
        //Do the same for the stackAmount input
        limitAmount("amount",i,1000);
        limitAmount("stackAmount",i,1000);
       
       //Change display of doubles from international/eng view to German view
       //1.25 -> 1,25
       if(amount.toString().includes(".")) {
           document.getElementById(i+'.amount').value = transformFormat(amount);
       }
       
       
       //generate output einkaufspreis and push it into generated field
       if(isStacked == "true")
           eko = roundDouble(ek * amount + ek * (stackAmount*64));
       else
           eko = roundDouble(ek * amount);
        document.getElementById(i+".eko").textContent = transformFormat(eko);
        sumEK.push(eko);
    
    
    
       //generate output verkauspreis
        if(isStacked == "true") 
            vko = roundDouble(vk * amount + vk * (stackAmount*64));
        else
            vko = roundDouble(vk * amount);
       
        document.getElementById(i+".vko").textContent = transformFormat(vko);
        sumVK.push(vko);
         
         
       //generate winnings
        document.getElementById(i+".gewinn").textContent = transformFormat(vko - eko);


        //Sum of all EK/PurchasingPrices
        const reducer = (accumulator, curr) => accumulator + curr;
        document.getElementById("ekg").textContent = transformFormat(roundDouble(sumEK.reduce(reducer)));

        
        //Sum of all VK/SellingPrices
        const reducer2 = (accumulator2, curr2) => accumulator2 + curr2;
        document.getElementById("vkg").textContent = transformFormat(roundDouble(sumVK.reduce(reducer2)));
        
        //Sum of all winnings
        document.getElementById("gg").textContent = transformFormat(roundDouble(sumVK.reduce(reducer2)) - (sumEK.reduce(reducer)));

        
   }
    
}




function roundDouble(double) {
    return Math.ceil(double * 10) / 10;
}

function removeNegatives(elementId,iterator) {
            let i = iterator;
            
            //IF the element is not found, cancel function and print error that element is null
            if(document.getElementById(i+'.'+elementId) == null) {
                return;
            }
        
        let value = document.getElementById(i+'.'+elementId).value;
        if(value < 0) { 
            document.getElementById(i+'.'+elementId).value = (value * -1);
            
            setTimeout(function(){calc();
            }, 15);
        }
        
}

function limitAmount(elementId,iterator,max) {
        let maxAmount = max;
        let i = iterator;
        
        if(document.getElementById(i+'.'+elementId) == null) {
            return;
        }
        
        let amount = document.getElementById(i+'.'+elementId).value;
        
        if(amount > maxAmount) { 
            document.getElementById(i+'.'+elementId).value = maxAmount;
            
            setTimeout(function(){calc();
            }, 15);
        }
}

function transformFormat(element) {
    return element.toLocaleString("de-DE", {style: "currency",currency: "EUR"});
}


