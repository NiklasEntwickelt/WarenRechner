//Main Element
let master = [];

class Entry {
     
    constructor(imagePath,itemName,purchasingPrice,sellingPrice,isStacked,...information) {
        this.imagePath = imagePath;
        this.itemName = itemName;
        this.purchasingPrice = purchasingPrice;
        this.sellingPrice = sellingPrice;
        this.isStacked = isStacked;
        this.information = information;
        
        master.push(this);
    }
    
    get imagePath() { return this._imagePath; }
    set imagePath(value) { this._imagePath = value; }
    
    get itemName() { return this._itemName; }
    set itemName(value) { this._itemName = value; }

    get purchasingPrice() { return this._purchasingPrice; }
    set purchasingPrice(value) { this._purchasingPrice = value; }
    
    get sellingPrice() { return this._sellingPrice; }
    set sellingPrice(value) { this._sellingPrice = value; }

    get isStacked() { return this._isStacked; }
    set isStacked(value) { this._isStacked = value; }

    get information() { return this._information; }
    set information(value) { this._information = value; }
    
}



new Entry("https://freesvg.org/img/Kiste-lineart.png","Lager Truhen",3.562,4.95,false);
new Entry("../img/main/frontpageIcon/banana.png","Regenbogen Banane",0.59,1.99,false);
let c = new Entry("../img/main/frontpageIcon/ziegelstein.png","10 graue Ziegelsteine",5.10,5.20,true,"Exklusiver","grauer Marmorstein");


//generate table
generate();







function generate() {
    
    
    //delete all elements inside field
    let table = document.getElementById("tableGenerator");
    if(table == null) throw new Error("missing tableGenerator ID on bodyTable");
    
    if(hasChildren(table)) {
        removeChildren(table);
    }
    
     
    
    
    //Generate Elements
    let rowNum = 0;
    for(let entry of master) {
         //Generate ROW
    
         let row = document.createElement("tr");
            row.id = rowNum;
         table.appendChild(row);
         
         
         //Add Image
         let image = document.createElement("img");
            image.src = entry.imagePath;
            image.height = "50";
            image.width = "50";
            image.setAttribute("alt","...");
            
            if(entry.information.length >= 1) {
                image.setAttribute('data-bs-toggle','tooltip');
                image.setAttribute('data-bs-placement','top');
                image.setAttribute('data-bs-html','true');
                image.setAttribute('title',"<h6>Produktinformationen: </h6>"+entry.information.toString().replaceAll(",","<br>")+"\n");
            }
            
        let td = createTableDataCell(image);
         row.appendChild(td);
        
        
        
         //Add Name
         let name = document.createElement("div");
            name.innerHTML = entry.itemName;
            
        td = createTableDataCell(name);
         row.appendChild(td);
         
         
         
         //Add einkaufspreis/purchasingPrice
         let eki = document.createElement("div");
            eki.innerText = entry.purchasingPrice.toLocaleString("de-DE", {style: "currency",currency: "EUR"});
            eki.id = rowNum+".eki";
            
        td = createTableDataCell(eki);
         row.appendChild(td);
        
        
        
        //Add verkaufspreis/sellingPrice
         let vki = document.createElement("div");
            vki.innerText = entry.sellingPrice.toLocaleString("de-DE", {style: "currency",currency: "EUR"});
            vki.id = rowNum+".vki";
    
        td = createTableDataCell(vki);        
         row.appendChild(td);
         
         
         
        //Add input amount (single)
        let amount = createRawInput();
            amount.id = rowNum+".amount";
        
        td = createTableDataCell(amount);        
         row.appendChild(td);
         
         
         //Add input amount (stacked)
        let stackAmountButton = createComplexInput(entry.isStacked).button;
            stackAmountButton.id = rowNum+".isStacked";
        let stackAmount = createComplexInput(entry.isStacked).stackInput;
            stackAmount.id = rowNum+".stackAmount";
            
        td = createTableDataCell(null);
        td.appendChild(stackAmountButton);
        td.appendChild(stackAmount);
         row.appendChild(td);
         
        if(!(entry.isStacked)) {
            td.setAttribute('data-bs-toggle','tooltip');
            td.setAttribute('data-bs-placement','top');
            td.setAttribute('title','Dieses Item unterstützt keinen Stack-Ankauf');
        }
        
         
      
      
        //Create EKO/PurchasingPrice Output
        td = createTableDataCell(null);
            td.id = rowNum + ".eko";
         row.appendChild(td);
         
        //Create VKO/SellingPrice Output
        td = createTableDataCell(null);
            td.id = rowNum + ".vko";
         row.appendChild(td);
    
        //Create Gewinn/Sellings Output
        td = createTableDataCell(null);
            td.id = rowNum + ".gewinn";
         row.appendChild(td);
    
    
        //END OF FOR, next element
        rowNum++;
    }
    
        
    
}








function createTableDataCell(appendable) {
    
    let td = document.createElement("td");
    if(appendable != null)
      td.appendChild(appendable);
    
    return td;
}

function createRawInput() {
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "0");
    input.setAttribute("step", "1");
    input.setAttribute("pattern", "[0-9]*");

    input.classList.add("input-transparent");
    input.classList.add("text-center");
    input.classList.add("input");
    input.classList.add("themeable");
    
    return input;
}

function createComplexInput(isLocked) {
    let input = createRawInput();
    if(input == null) throw new Error("Simple Input is Null");
    
    let button = document.createElement("button");
    
    if(isLocked) {
        button.setAttribute('data-bs-toggle','tooltip');
        button.setAttribute('data-bs-placement','left');
        button.setAttribute('title','Angegebene Menge wird alleinig addiert');
        
        button.textContent = "Einzel";
        button.value = "false";
        button.classList.add("btn","btn-danger");
        button.type = "button";
        } else {
        
        button.classList.add("btn","btn-danger");
        button.setAttribute('disabled','');
        
        //Grab icon from bootstrap icon libary
        let fonticon = document.createElement("i");
        fonticon.classList.add("bi","bi-lock-fill");
        button.appendChild(fonticon);
    }
    
    button.onclick = function() {swap(this);};
    
    //Create input bar for stacked input
    let stackInput = createRawInput();
    
    //hide the bar by default
    stackInput.style.display = "none";
    stackInput.style.marginTop = "5px";
    
    return {
        button: button,stackInput: stackInput};
}


   
//Function to toggle isStacked button "Yes"/"No"
function swap(that) {

    //button element stores true/false in value
    if(that.value == "true") {
        //Default position is true
        that.textContent = "Einzel";
        that.value = false;
        that.classList.remove("btn-success");
        that.classList.add("btn-danger");
        
        that.setAttribute('data-bs-toggle','tooltip');
        that.setAttribute('data-bs-placement','left');
        that.setAttribute('title','Angegebene Menge wird alleinig addiert');
        that.setAttribute('data-bs-original-title','Angegebene Menge wird alleinig addiert');
        
        //Loop through element children of the button to get the input field
        let children = that.parentElement.children;
        for(let child of children) {
            if(child.tagName == "INPUT") {
                let input = child;
                input.style.display = "none";
            }
        }
        
    } else {

        that.textContent = "Stacks:";
        that.value = true;
        that.classList.remove("btn-danger");
        that.classList.add("btn-success");
        
        that.setAttribute('data-bs-toggle','tooltip');
        that.setAttribute('data-bs-placement','left');
        that.setAttribute('title','Die unten angegebene Menge wird x64 gerechnet, und zusätzlich zur Einzelmenge addiert');
        that.setAttribute('data-bs-original-title','Die unten angegebene Menge wird x64 gerechnet, und zusätzlich zur Einzelmenge addiert');
        
        
        let children = that.parentElement.children;
        for(let child of children) {
            if(child.tagName == "INPUT") {
                let input = child;
                input.style.display = "block";
            }
        }
    }

}

function hasChildren(element) {return element.children.length != 0 ? true : false;}

function removeChildren(element) { 
    if(hasChildren(element)) {
        let child = element.firstChild;
        child.remove();
        removeChildren(element);
    }
}