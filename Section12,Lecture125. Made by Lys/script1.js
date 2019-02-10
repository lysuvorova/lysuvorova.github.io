var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var but = document.querySelector("ul").querySelectorAll("button");



function inputLength() {
    return input.value.length;
}



function createListElement() {
    
    var div = document.createElement("div");
    ul.appendChild(div);    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));    
    div.appendChild(li);
    input.value = "";
    var delbutton = document.createElement("button");    
    delbutton.appendChild(document.createTextNode("Click to delete the item"));
    div.appendChild(delbutton);
    div.classList.add("dok");
    
    li.addEventListener("click",function(){
        li.classList.toggle("done");
    });
    
    delbutton.addEventListener("click", function() {
        delbutton.parentElement.style.display = "none";
    });
    
    }


function addListAfterClick() {
    if (inputLength() > 0) {
     createListElement();  
    }
 }

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
     createListElement(); 
    }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);


lis.forEach(function(li) { 
        li.addEventListener("click",function(){
        li.classList.toggle("done");
    });
});


but.forEach(function(button) {
    button.addEventListener("click", function() {
        button.parentElement.style.display = "none";
    });
});

