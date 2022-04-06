class CardSetupError extends Error {
  constructor(message) {
    super(message.toString()); // (1)
    this.name = "CardSetupError"; // (2)
  }
}

class FightSetupError extends Error {
  constructor(message) {
    super(message.toString()); // (1)
    this.name = "FightSetupError"; // (2)
  }
}

class Fight {
    constructor(attacker,attacked) {
        this.attacker = attacker;
        this.attacked = attacked;
        
        if(!(attacker instanceof Card) || !(attacked instanceof Card)) {
            return new FightSetupError("You can only start a fight between 2 duelcards");
        }
        
        //check if one of them is fighting.
        
        if((attacker.inBattle) || (attacked.inBattle)) {
            return new FightSetupError("You can only start a fight between 2 Cards who are not in battle");
        }
        

        this.startFight();
        
        //END OF CONSTRUCTOR
    }
    
    
    startFight() {
        this.attacked.inBattle = true;
        this.attacker.inBattle = true;
        console.log("The battle between",this.attacker.cardName + " and " + this.attacked.cardName + " has begun.");
    }
    
    endFight(winner) {
        if(!(this.attacked.inBattle) || !(this.attacker.inBattle)) {
            return new FightSetupError("The participants are not in a Battle!");
        }
        
        this.attacked.inBattle = false;
        this.attacker.inBattle = false;
        if(winner == "draw" || winner == null) {
            console.log("The battle between",this.attacker.cardName + " and " + this.attacked.cardName + " ended","\nThere was no winner!");
        } else {
            console.log("The battle between",this.attacker.cardName + " and " + this.attacked.cardName + " ended","\nThe Winner is: "+ winner.cardName);
        }


    }
    
    attack(attackCard,attackedCard) {
            if(!(attackCard.inBattle) || !(attackedCard.inBattle)) {
                return new FightSetupError("The participants are not in a Battle!");
            }
        
        
            if(attackedCard.health <= 0) {console.log(attackedCard.cardName + " cannot be attacked it's already dead!");return false} 
            
            let damage = attackCard.attackPower - attackedCard.defensePower >= 0 ? attackCard.attackPower - attackedCard.defensePower : 0;
            attackedCard.health = attackedCard.health - damage >= 0? attackedCard.health - damage : 0;
            
            if(attackedCard.health == 0) {
                this.endFight(attackCard);
            }
            
            attackCard.updateDisplay();
            attackedCard.updateDisplay();
            return damage;
        }
}





class Card {
    
    constructor(ID,cardName,health,attackPower,defensePower,starRating,imageFront,imageBack,activeImage,cardHolder,xPos,yPos) {
          
        try { 
            //Implement Card stats via getter/setter
            this.cardID = ID;
            this.cardName = cardName;
            this.health = health;
            this.attackPower = attackPower;
            this.defensePower = defensePower;
            this.starRating = starRating;
            this.imageFront = imageFront;
            this.imageBack = imageBack;
            this.activeImage = activeImage;
            this.cardHolder = cardHolder;
            this._isBroken = false;
            this.inBattle = false;
            
            //Object variables
            this.drawn = false;
            this.elementTree = null;
            this.mainElement = null;
            this.imageElement = null;

            if(checkForUndefined(this._ID))
                throw new CardSetupError("Error in new Card Object, ID missing");
 
            if(checkForUndefined(this._cardName))
                throw new CardSetupError("Error in new Card Object, CardName missing");
                  
            if(checkForUndefined(this._health))
                throw new CardSetupError("Error in new Card Object, Health missing");
       
            if(checkForUndefined(this._attackPower))
                throw new CardSetupError("Error in new Card Object, AttackPower missing");
       
            if(checkForUndefined(this._defensePower))
                throw new CardSetupError("Error in new Card Object, DefensePower missing");
               
            if(checkForUndefined(this._starRating))
                throw new CardSetupError("Error in new Card Object, StarRating missing");
            
            if(checkForUndefined(this._imageFront))
                throw new CardSetupError("Error in new Card Object, ImageFront missing");

            if(checkForUndefined(this._imageBack))
                throw new CardSetupError("Error in new Card Object, ImageBack missing");
              
            if(checkForUndefined(this._activeImage))
                throw new CardSetupError("Error in new Card Object, ActiveImage missing");
        
            if(checkForUndefined(this._cardHolder))
                throw new CardSetupError("Error in new Card Object, Holder missing");

            
        } catch(error) {
            if(error instanceof CardSetupError) {
                console.error(error);
                this._isBroken = true;
                return;
            }
        }
        
        
        //debug console.log(this.cardID + "\nName:" +this.cardName,this.checkForDuplicateID(this.cardID));
        //checkForDuplicateID if duplicate cancel creation
        if(this.checkForDuplicateID(this.cardID)) {
            console.error("Couldn't generate element from class Cards " + this.cardName
                +"Error with Duplicate ID: \"" + this.cardID + "\"");
            this.drawn = false;
            return;
        } else {
            //Draw yourself
            this.draw();
            this.move(xPos,yPos);  
        }
        

        
        //END OF CONSTRUCTOR       
    }
    
        checkForDuplicateID(value) {
            const IDs = document.querySelectorAll("#"+value).length;
            if(IDs >= 1) {
                return true;
            } else
                return false;
            
        }
        
        draw() {
            
            //Check if element is already drawn
                if(this.drawn == true) {
                    console.error("Element with ID \"" + this.cardID + "\" is already drawn on screen!");
                    return;
                } else
                    this.drawn = true;
                    
                    
                let that = this;
                
                
                //NOTE: if you change cardFrame change mainElement & return array;
                let cardFrame = createElement("div","cardDisplay","cardFrame");
                    cardFrame.style.zIndex = "-1";
                let cardBody = createElement("div",cardFrame,"cardBody","cfContainer");
                    //cardBody.style.border = "2px solid black"
                    cardBody.style.borderRadius = "15px"; 
                let cardImage = createElement("img",cardBody,"cardImage");
                    cardImage.src = this.activeImage.includes("front") ? this.imageFront : this.imageBack;
                    cardImage.width = "300";
                    cardImage.height = "400";
                    cardImage.style.borderRadius = "10px"; 
                let cardInformation = createElement("div",cardBody,"cfContent");
                    cardInformation.style.visibility = this.activeImage.includes("front") ? "visible" : "hidden";
                    cardInformation.style.opacity = "0.125";


            
                    //All elements important as an export;
                    this.elementTree = {
                         frame: cardFrame,
                         image: cardImage,
                         body: cardBody,
                         information: cardInformation
                     };
                     
                     
                    //specify reference element
                    this.mainElement = this.elementTree.frame;
                    this.mainElement.id = this.cardID;
                    this.mainElement.classList.add("cardObject");
                    
                    //specify frame attributes and style
                    this.mainElement.style.transform = this.activeImage.includes("front") ? "rotateY(0deg)" : "rotateY(360deg)";
                    this.mainElement.style.position = "absolute";
                    

                    this.mainElement.style.left = this.xPos+"px";  
                    this.mainElement.style.top = this.yPos+"px";
                        
                    this.mainElement.setAttribute("cm-activeImage",this.activeImage.includes("front") ? "front" : "back");
                    this.mainElement.style.transform = "scale(0,0)";
                    
                    this.mainElement.addEventListener('mouseover', function() {
                        if(that.mainElement.getAttribute("cm-activeImage").includes("front")) {
                            that.elementTree.information.style.opacity = "1";
                        }
                    });
                    
                    this.mainElement.addEventListener('mouseout', function() {
                        that.elementTree.information.style.opacity = "0.125";
                    });

                    this.mainElement.onclick = function() {turn()};

                    this.imageElement = this.elementTree.image;
             
                    //Updates the text inside the cards
                     this.updateDisplay();
                     
                     setTimeout(function() { 
                         that.mainElement.style.transform = "scale(1,1)"
                     },65);
                    
        }
        
        
        updateDisplay() {
            let textField = this.elementTree.information;
            textField.innerText = `Name: ${this.cardName} \n ID: ${this.cardID} \n HP: ${this.health} Attack: ${this.attackPower} Defense: ${this.defensePower} \nRating: ${this.starRating} ★`;
        }

        
        
        move(xPos,yPos) {
            this.mainElement.style.left = xPos+"px";
            this.mainElement.style.top = yPos+"px";
        }
        
        turn() {this.flip()}
        flip() {
            let that = this;
            let cardInformation = this.elementTree.information;

            if(this.activeImage.includes("front")) {
                this.activeImage = "back";
                this.mainElement.style.transform = "rotateY(360deg)";
                this.mainElement.setAttribute("cm-activeImage","back");
                
            } else {
                this.activeImage = "front";
                this.mainElement.style.transform = "rotateY(0deg)";
                this.mainElement.setAttribute("cm-activeImage","front");

                    }
            setTimeout(function() {
                that.imageElement.src = that.activeImage.includes("front") ? that.imageFront : that.imageBack;
                cardInformation.style.visibility = that.activeImage.includes("front") ? "visible" : "hidden";
            }, 100)
    
            return this.activeImage;
        }
        
        scale(x,y) {
            this.imageElement.width = x;
            this.imageElement.height = y;
        }
        
    
    
    
    /*            *\
    |     Getter    |
    \*            */   
    
    get cardID(){
        return this._ID;
    }
    
    get cardName(){
        return this._cardName;
    }
    
    get health(){
        return this._health;
    }
        
    get attackPower(){
        return this._attackPower;
    }
        
    get defensePower(){
        return this._defensePower;
    }
        
    get starRating(){
        return this._starRating;
    }
            
    get imageFront(){
        return this._imageFront;
    }
            
    get imageBack(){
        return this._imageBack;
    }
            
    get activeImage(){
        return this._activeImage;
    }
    
    get cardHolder(){
        return this._cardHolder;
    }
    
    get isBroken() {
        return this._isBroken;
    }
    
    get inBattle() {
        return this._inBattle;
    }
    
    get Offset() {
            let el = this.mainElement;
            let _x = 0;
            let _y = 0;
            while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                _x += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            return { top: _y, left: _x };
    }

    /*            *\
    |     Setter    |
    \*            */          

    set cardID(value){
        this._ID = value;
    }
    
    set cardName(value){
        this._cardName = value;
    }
    
    set health(value){
        if(isNaN(value)) 
            value = 0;
        this._health = value;
        return this._health;
    }
        
    set attackPower(value){
        if(isNaN(value)) 
            value = 0;
        this._attackPower = value;
        return this._attackPower;
    }
        
    set defensePower(value){
        if(isNaN(value)) 
            value = 0;
        this._defensePower = value;
        return this._defensePower;
    }
        
    set starRating(value){
        if(isNaN(value)) 
            value = 0;
        this._starRating = value;
        return this._starRating;
    }
            
    set imageFront(value){
        if(!(value instanceof String)) 
            value.toString();
        this._imageFront = value;
    }
            
    set imageBack(value){
        if(!(value instanceof String)) 
            value.toString();
        this._imageBack = value;
    }
            
    set activeImage(value) {
        if(value == "front" || value == "back")
            this._activeImage = value;
        else
            this._activeImage = "front";
    }
    
    set cardHolder(value){
        this._cardHolder = value;
    }
    
    set isBroken(value) {
        this._isBroken = value;
    }
    
    set inBattle(value) {
        this._inBattle = value
    }

}

//CHEST

function drawChest() {
    let img = createElement("img","cardDisplay","chest");
    img.height = "100";
    img.width = "100";
    img.src = "chest.png";
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.id = "chest";
    
    img.onclick = function() {
        img.style.transform = "scale(0,0)";

        setTimeout(function() {
            img.remove();
            generateNewCard();
        },1000);
        
    }
}

function generateNewCard() {
    globalCard = new Card("ID","test",50,1,2,3,"cards/businezz.png","cards/backside.png","back","player",500,100);
}

//GENERAL FUNCTIONS

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkForUndefined(value) {
        
        if(value == null || value == undefined) {
            return true;
        } else
            return false;
    }


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function createElement(elementName,parent,...styleClasses) {
    let element = document.createElement(elementName.toLowerCase());
  
    for(let styleClass of styleClasses) {
        element.classList.add(styleClass);    
    }
    
    if(Object.prototype.toString.call(parent) == '[object String]')
        parent = document.getElementById(parent);
    parent.appendChild(element);

    return element;
}



//PAGE ONLOAD CODE
let globalCard;
drawChest();

/*

TODO NEXT:
CHECK IF ID IS EXISTENT
CHECK IF VALUES CAN BE MODIFIED TO CAUSE PROBLEMS ON SPAWN

DRAW ELEMENT WITH BACKGROUND AND STATIC POSITION.

POSITION ALL SUB elements in MAIN CARD ELEMENT
DISPLAY INFORMATING FROM OBJECT ON ELEMENT

getter for xpos and ypos are still wrong


WHEN A CARD STARTS ON BACKSIDE FIRST FLIP IS NOT DISPLAYED
OVERWORK THE FIGHT SYSTEM

{
    WHEN FIGHT INITATED CHANGE BACKGROUND WITH ELEMENTS TO.... whatever battle stage
    WHEN FIGHT INITATED ALLOW CARDS TO USE THE ATTACK ELEMENTS 
    MAKE FIGHT CHECKS OWN METHODS , inBattle
    OVERDO THE VARIABLE NAMES IN EXITING METHODS
}


*/
