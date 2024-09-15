const inputList = document.getElementById("inputList");
const listItem = document.querySelector(".list-item");
console.log("Hello")



function addItem(){

if(inputList.value ===''){
    alert("You have to enter something")
}

else{

    let li = document.createElement('li');
    li.innerHTML = inputList.value;
    listItem.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML ="\u00d7";
    li.appendChild(span);

    saveData ();

}
    inputList.value= "";

   

}

listItem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData ();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData ();
    }
}, false)


function saveData (){
    localStorage.setItem("data", listItem.innerHTML);
}

function showData(){
    listItem.innerHTML = localStorage.getItem("data");
}

showData();