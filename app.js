var list =document.getElementById("list");

firebase.database().ref('todos').on('child_added',function(data){
    // console.log(data.val());

    
    var li =document.createElement('li');
    li.setAttribute("class","list")
    var litext = document.createTextNode(data.val().value);
    li.appendChild(litext);


// create delete button

    var delbtn= document.createElement("button");
    var deltext= document.createTextNode("DELETE");
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute('id',data.val().key)
    delbtn.setAttribute("onclick","deleteitem(this)")    
    delbtn.appendChild(deltext);

// create edit button

    var editbtn= document.createElement("button");
    var edittext= document.createTextNode("EDIT");
    editbtn.setAttribute("class","btn");
    editbtn.setAttribute('id',data.val().key)
    editbtn.setAttribute("onclick","edititem(this)");  
    editbtn.appendChild(edittext);


    li.appendChild(editbtn)

    li.appendChild(delbtn)


    list.appendChild(li);


})   

function addTodo() {
    var todo_item =document.getElementById("todo_item");

    // console.log(todo_item.value);
    var key = firebase.database().ref('todos').push().key;
    var todo = {
        value:todo_item.value,
        key : key
    }
    firebase.database().ref('todos').child(key).set(todo)


    todo_item.value="";

}
function deleteitem(d) {
    firebase.database().ref('todos').child(d.id).remove();
    // console.log(d.id);
    d.parentNode.remove()  ;  
}
function deleteAll(a) {
    firebase.database().ref('todos').remove();
    list.innerHTML=""
}


function edititem(e) {
    // var val = e.parent Node.firstchild.nodeValue;
    var val = prompt("Enter Updated value" , e.parentNode.firstChild.nodeValue);
    var editTodo = {
        value : val,
        key : e.id
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)
    console.log(editTodo)
    e.parentNode.firstChild.nodeValue=val;
}