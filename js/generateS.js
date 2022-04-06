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




new Entry('https://board.germanminer.de/cms/images/proxy/2e/2ecdaa957b60b73ec114d6945eadce727e3739a0.png',"Jagdmesser",0,1250,false);
new Entry('https://board.germanminer.de/cms/images/proxy/85/85e90381bd51d405e878b22391131e2884f7a950.png',"Militärmesser",0,2800,false);
new Entry('https://board.germanminer.de/cms/images/proxy/de/de2d2218739392776814e6afe3a2582ca301a693.png','M1911 Colt',0,1500,false);
new Entry('https://board.germanminer.de/cms/images/proxy/17/17f01f2cae308937455e3be3cb3b26475466bfd4.png','Uzi',0,2000,false);
new Entry('https://board.germanminer.de/cms/images/proxy/43/435835826ad70ee5061d63841a3ae22db0829bb6.png','Schrotflinte',0,2200,false);
new Entry('https://board.germanminer.de/cms/images/proxy/f1/f1d37d1ee24d939b51f9c77a02dd6fcf6d456c40.png','Ak-47',0,5200,false);
new Entry('https://board.germanminer.de/cms/images/proxy/d2/d27b283caa0fff2026ccdd1b7f8f8e474d758da8.png','M16',0,5500,false);
new Entry('https://board.germanminer.de/cms/images/proxy/97/97f86d97bd93520fe64811eed012b6a1e45c99da.png','M41A-S',0,5800,false);
new Entry('https://board.germanminer.de/cms/images/proxy/eb/ebef772f8847d2b617da03ad0e37396de65feef7.png','G22',0,5500,false);
new Entry('https://board.germanminer.de/cms/images/proxy/9e/9ef27e5c5fafd292baa818b993403d72242c1674.png','Pfefferspray',0,100,false);
new Entry('https://board.germanminer.de/cms/images/proxy/e4/e47b3c3c30fb5562575f98d6ec2918cfe50b44e6.png','Schild',0,600,false);
new Entry('https://board.germanminer.de/cms/images/proxy/c6/c6c8e5cfa7c3cc2c935cad5bc94c4d4154d5e76c.png','Flugabwehrrakete',0,9800,false);
new Entry('https://board.germanminer.de/cms/images/proxy/06/0656ca738f3d9e9a01b20c094d7f68cd35c2e601.png','Schutzweste SK2',0,200,false);
new Entry('https://board.germanminer.de/cms/images/proxy/9d/9d3747b078d1974454d68d0ef39a8bcf2fe3b315.png','Schutzweste SK3',0,300,false);
new Entry('https://board.germanminer.de/cms/images/proxy/c5/c5a95eefc760593353a9c67aaa266eeb3530a6bb.png','Schutzweste SK4',0,400,false);
 new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=966beac36ce179700c89c7c6e4ff85f5f37c4ce915238235b8b6f7a6a7ea56bc-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3QzdVUyb2JTc28wQS1zMEQxZ01GQjlMdFpUMXFrb2xsUEtzTDg1OEtzeXBJQVhVeXN2LS1zWmlUTkR5ZjFDTkthRXNxemxrY3I4MzI1eThqMHBfdi1yNC01U1hCS1g3QXFLY0pJUHRpR2tBbVoxYlotYmRqUllWeU9CYkY3TVZ1UktuT0FnQTk%3D','9mm Munition',0,7.03125,true);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=966beac36ce179700c89c7c6e4ff85f5f37c4ce915238235b8b6f7a6a7ea56bc-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3QzdVUyb2JTc28wQS1zMEQxZ01GQjlMdFpUMXFrb2xsUEtzTDg1OEtzeXBJQVhVeXN2LS1zWmlUTkR5ZjFDTkthRXNxemxrY3I4MzI1eThqMHBfdi1yNC01U1hCS1g3QXFLY0pJUHRpR2tBbVoxYlotYmRqUllWeU9CYkY3TVZ1UktuT0FnQTk%3D','12mm Munition',0,6.25,true);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=966beac36ce179700c89c7c6e4ff85f5f37c4ce915238235b8b6f7a6a7ea56bc-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3QzdVUyb2JTc28wQS1zMEQxZ01GQjlMdFpUMXFrb2xsUEtzTDg1OEtzeXBJQVhVeXN2LS1zWmlUTkR5ZjFDTkthRXNxemxrY3I4MzI1eThqMHBfdi1yNC01U1hCS1g3QXFLY0pJUHRpR2tBbVoxYlotYmRqUllWeU9CYkY3TVZ1UktuT0FnQTk%3D','18mm Munition',0,11.71875,true);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=966beac36ce179700c89c7c6e4ff85f5f37c4ce915238235b8b6f7a6a7ea56bc-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3QzdVUyb2JTc28wQS1zMEQxZ01GQjlMdFpUMXFrb2xsUEtzTDg1OEtzeXBJQVhVeXN2LS1zWmlUTkR5ZjFDTkthRXNxemxrY3I4MzI1eThqMHBfdi1yNC01U1hCS1g3QXFLY0pJUHRpR2tBbVoxYlotYmRqUllWeU9CYkY3TVZ1UktuT0FnQTk%3D','Schrot Munition',0,25.78125,true);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=966beac36ce179700c89c7c6e4ff85f5f37c4ce915238235b8b6f7a6a7ea56bc-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3QzdVUyb2JTc28wQS1zMEQxZ01GQjlMdFpUMXFrb2xsUEtzTDg1OEtzeXBJQVhVeXN2LS1zWmlUTkR5ZjFDTkthRXNxemxrY3I4MzI1eThqMHBfdi1yNC01U1hCS1g3QXFLY0pJUHRpR2tBbVoxYlotYmRqUllWeU9CYkY3TVZ1UktuT0FnQTk%3D','Raketen Munition',0,2000,true);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=d15fce6958010d25eb045647c3261aee7169ebe3a5971d1ec709b9b484a39421-aHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tL01JdkRnaTVtSjBKTWMyQUpRbmNHbDBGT0ozWk1iSDBHc0ZvM2x1WUtVT1ZGR09RVE42Y0x3TThoMERCb2lYRzV4RGtGRjhkdWcyaXhwN1lhOExBVmtjSjFiaHhfMHNVZlJONU1WNjczbkFhdEV0d2IzQnZxUndKQ3FydzRUMWc0Q0R6djFzaDk%3D','Dietrich',0,150,false);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=d15fce6958010d25eb045647c3261aee7169ebe3a5971d1ec709b9b484a39421-aHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tL01JdkRnaTVtSjBKTWMyQUpRbmNHbDBGT0ozWk1iSDBHc0ZvM2x1WUtVT1ZGR09RVE42Y0x3TThoMERCb2lYRzV4RGtGRjhkdWcyaXhwN1lhOExBVmtjSjFiaHhfMHNVZlJONU1WNjczbkFhdEV0d2IzQnZxUndKQ3FydzRUMWc0Q0R6djFzaDk%3D','Verbesserter Dietrich',0,100,false);

new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=bfb0a9ebd830561f2308c78117c0541b95a5730415ea936a304cbb75cdcc1db2-aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0hnVF92Qjd2U21QaEFFeHB0YkdUWHZHVjN6WC1sMWtjM01BQ3VscGdqZ2ZRbThnQXlWdlhJcE9oWHZwLTRTR0VpTXVvOF9qRXpqaW5aQVFtLUMyRTdjM0E5TWdEWXNXMkMzeUg2RENZb3R5d0VnY08xQzJPZDVuazgzYVJhcWVWNDhTWkU2X1I%3D','Ecstasy',0,250,false);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=841fcc98593570c23348aad7ee1eb0bc296ec5d244787289799de4dd82a93475-aHR0cHM6Ly9saDUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0VuM3JqbUJVRS1OVFBwSnU3RlA2R243V2l0aWpUOFlZWFVkZzhJYjhwaHlHX3Nac2lQb2ViNzd4N3JfeG9HdmtrZzl6eEItdk15djRTZjNmWWUxd29CVElPM1dJYmJCbkZXWk5aSzBaNlBsM0lMY1ExMklvOXhDRlVtTDdWX0FBVmJId2F3SUU%3D','Kokain',0,150,false);
new Entry('https://board.germanminer.de/cms/images/proxy/3f/3fbff8b3e241289cde076146d292033302338ab4.png','Fluoxetin',0,250,false);
new Entry('https://board.germanminer.de/cms/images/proxy/04/04f075036ce2e18a905b2e5571c43802cf2d69cf.png','Fentanyl',0,250,false);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=f926b6ec80f537e56c6439f3163f9f4bd84cd36c885861066c701c07584ddb79-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL1oxTGltVFJWX3prVWttam96OEhCMFI4Zi1JSGtXbVNOZE56cTdaN1Y5WFRXWTU0cnBQRXVxYVZvTDlRUWllMjdEd1Y4a2pjRkFsYVMxSzBwSTRUd2QwUzBVNWNLeFVjVWx3dkpab0o5dXVMeXVNZEZyY1k2SnFPNVozWkJWX002X2RBYVIxRE4%3D','Tilidin',0,250,false);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=fe0da125a09b6980c52d281df3624ba1bc1e397b77fa5b1f33f9cfcd9a4d97b3-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3RKWjU0QlVxd2dpOXduOThHeE04YU1Ed2lEcUo2cW1XU2RwR1VrSzZEeE5LYlpFdE41LWNkUkViSXh6amNZTXRTZ2hSZmtyaHlRWURUbTRkY1NYRDhNU1hkM09lbTlocnpvRjdCOERxUTRhamlwRTVZbWYyalkwWnNnNUtLUm16Sk1BWlRXQ1I%3D','Heroin',0,200,false);
new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=9edac8a94017bbddca3a59afae8944a2a5f4486c92f580c03678ff2b5584ea77-aHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLzVSaU02YXZXLTlUbWljM19JaGJPZFYwenpkbG1BZ0EwQ3F2dUVJZENTTTJhZUJyN2w5OGhQc2otb1FDM3VfRktQclFndzJUZF9Oa2xnZTNYN2lXQTRKeG1Bb3VhbjNMdFlYQnowRkY0bHVNdjkwRTZBc2U5SDRNRjdtcDFqOHVObVpqbUliSzc%3D','Cannabis',0,100,false);
 new Entry('https://board.germanminer.de/cms/index.php?image-proxy/&key=269927ba76202ac33018c0ef678411c03bda73b8303881b773d4196f7261c327-aHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLzdHTjlBUk5YM3dhSERDVWZVTENIWDRYOWRyQ3BORVZpNy1uc1ZPNjA5SE1yeEJWYlQ5X2pVbjBKai1SNDNhTFJ0aWUtVjRrS0Y4WElnRVpKTjAwZnpwZzE3eUdNaWpjY0FrMXZyTGtrVGk3dlVXWVJHTHB1VFE1clBZMk9zbmZGemJtSFFVVmM%3D','Hanfsamen',0,150,false); 

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
    input.setAttribute("pattern", "new Entry(0-9]*");

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