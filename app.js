var list =document.getElementById("list");

function addTodo() {
    var todo_item =document.getElementById("todo_item");

    var li =document.createElement('li');
    li.setAttribute("class","list")
    var litext = document.createTextNode(todo_item.value);
    li.appendChild(litext);


// create delete button

    var delbtn= document.createElement("button");
    var deltext= document.createTextNode("DELETE");
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteitem(this)")    
    delbtn.appendChild(deltext);


    var editbtn= document.createElement("button");
    var edittext= document.createTextNode("EDIT");
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","edititem(this)")    
    editbtn.appendChild(edittext);


    li.appendChild(editbtn)

    li.appendChild(delbtn)


    list.appendChild(li);

    todo_item.value="";
    console.log(li)

}
function deleteitem(d) {
    d.parentNode.remove()  ;  
}
function deleteAll(a) {
    list.innerHTML=""
}


function edititem(e) {
    // var val = e.parentNode.firstchild.nodeValue;
    var Val = prompt("Enter Updated value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=Val;
}