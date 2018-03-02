// Your code goes here
let rootNode = document.getElementById("root");

showListOfTanks();

function showTank(obj){
    let header = document.createElement("div");
    header.className = "header";
    //create tank's information
    let h1 = document.createElement("h1");
    h1.className="tank-details-header";
    h1.innerHTML = obj.model + " (level " + obj.level + ")"; 
    let country = document.createElement('img');
    country.title=obj.country;
    country.className="tank-details-country";
    country.src = obj.country_image;      
    //append info to page
    header.appendChild(country);
    header.appendChild(h1);
    rootNode.appendChild(header);
    //main content
    let tankDetailsContent = document.createElement("div");
    tankDetailsContent.className= "tank-details-content";
    //left part of page
    let leftPart = document.createElement("div");
    leftPart.className="tank-details-left";
    let tankImg = document.createElement("img");
    tankImg.className="details-tank-img";
    tankImg.src = obj.preview;   
    let preview = document.createElement("h2");
    preview.innerHTML="Preview";
    
    let backToList = document.createElement("a");
    backToList.className="back-to-list";
    backToList.innerHTML="Back to list view";
    //set hashes 
    backToList.addEventListener('click', () => {
        location.hash = '';
        window.history.go();
    });
    leftPart.appendChild(preview);
    leftPart.appendChild(tankImg);
    leftPart.appendChild(backToList);
    tankDetailsContent.appendChild(leftPart); 
    //right part of page
    let rightPart = document.createElement("div");
    rightPart.className="tank-details-right";
    let char = document.createElement("h2");
    char.innerHTML="Characteristic";
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    //set a table
    for (let key in obj.details) {
        let row = document.createElement("tr");  
        let cell = document.createElement("td");
        let text = document.createTextNode(key.replace(/_/g, " "));//avoid underscope
        cell.appendChild(text);
        row.appendChild(cell);
        cell = document.createElement("td");
        text = document.createTextNode(obj.details[key]);
        cell.appendChild(text);
        row.appendChild(cell);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    rightPart.appendChild(char);
    rightPart.appendChild(tbl);
    tankDetailsContent.appendChild(rightPart);
    rootNode.innerHTML="";//remove list
    rootNode.appendChild(header);
    rootNode.appendChild(tankDetailsContent);
}

function showListOfTanks() {
    const hoverCols = ["#2e6bcc" ,
                       "#15d34e",
                       "#c3d215",
                       "#ba9f3f",
                       "#ba473f",
                       "#8e738a",
                       "#649edb",
                       "#78ede2"];
    var styleSheet = document.createElement('style');    
    let header = document.createElement("h1");
    header.innerHTML = "Most popular tanks";
    let tanksContent = document.createElement("div");
    tanksContent.className= "tanks-content";
    //forEach element in tanks.js 
    for ( let i = 0; i < tanks.length; i++) {    
        //create a div with tank's information
        let tankItem = document.createElement("div");
        tankItem.className="tank-item";
        tankItem.title="Click to details";
        //tank's properties
        let tankImg = document.createElement('img');
        tankImg.className= "tank-img";
        tankImg.src = tanks[i].preview;
        tankItem.appendChild(tankImg);
        //main properties
        let tankInfo = document.createElement("div");
        tankInfo.className="tank-info";
        let country = document.createElement('img');
        country.title=tanks[i].country;
        country.className="tank-country";
        country.src = tanks[i].country_image;
        let level = document.createElement('p');
        level.className="tank-level";
        level.innerHTML=tanks[i].level;
        let model = document.createElement('p');
        model.className="tank-model";
        model.title=tanks[i].model;
        model.innerHTML=tanks[i].model;
        //append items
        tankInfo.appendChild(country);
        tankInfo.appendChild(level);
        tankInfo.appendChild(model);
        tankItem.appendChild(tankImg);
        tankItem.appendChild(tankInfo);
        //set hash to each item
        tankItem.addEventListener('click', () => {
            location.hash = tanks[i].model;
        });
        tanksContent.appendChild(tankItem);
        //set different hover colors
        let style = `.tank-item:nth-child(${i+1}):hover {
            background-color: ${hoverCols[i]};
        }`;
        
        styleSheet.appendChild(document.createTextNode(style));
    }
    document.head.appendChild(styleSheet);
    rootNode.appendChild(header);   
    rootNode.appendChild(tanksContent);
}

//show info about chosen tank
function tanksDetails(){
    let hash = location.hash.slice(1);
    var arr = tanks;
    
    arr.forEach((i) =>{
        if (i.model === hash) {
            showTank(i);
        }
    });
}

window.onhashchange = tanksDetails;