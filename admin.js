
function display(){
    var retrievedobject = JSON.parse(localStorage.getItem('user'));
    var tr = "<table>";
  for(let i in retrievedobject){
    let myObject = JSON.parse(retrievedobject[i])

      tr += "<tr><td>Name:</td>" + "<td>" + myObject.name + "</td>"
       + "<td>Email:</td>" + "<td>" + myObject.email + "</td>"
       + "<td>Number:</td>" + "<td>" + myObject.Number + "</td>"
       + "<td>gender:</td>" + "<td>" + myObject.gender + "</td>"
       + "<td>Age:</td>" + "<td>" + myObject.age + "</td>"
       + "<td>Interested class:</td>" + "<td>" + myObject.interested + "</td>"
       + "<td><button onclick = edit("+i+")>Edit</button> <button onclick = deleted("+i+")>delete</button> <button onclick = resubmit("+i+")>Update</button></td></tr>"
      tbody.innerHTML += tr;

    document.getElementById('tbody').innerHTML = tr
  }
  tr += "</table>"   
}

function edit(i){
  var retrievedobject = JSON.parse(localStorage.getItem('user'));
  console.log(i);
  let user = JSON.parse(retrievedobject[i]);
  console.log(user);
  $("#name").val(user['name']);
  $("#email").val(user['email']);
  $("#number").val(user['Number']);
  $("#gender").val(user['gender']);
  $("#age").val(user['age']);
  $("#interested").val(user['interested']);

  // for(let i in retrievedobject){
  //   let users = JSON.parse(localStorage.getItem('user'));
  //   let localData = users;
  //   let myObject = JSON.parse(retrievedobject[i]);
  //   console.log(i)
  //   console.log(users)
    
  //   $("#name").val(myObject.name);
  //   $("#email").val(myObject.email);
  //   $("#number").val(myObject.Number);
  //   $("#gender").val(myObject.gender);
  //   $("#age").val(myObject.age);
  //   $("#interested").val(myObject.interested);
  // }
};


function resubmit(i){
  let newdata = JSON.stringify({
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    Number:document.getElementById("number").value,
    gender:document.getElementById("gender").value,
    age:document.getElementById("age").value,
    interested:document.getElementById("interested").value,
  });
  console.log(i)
  let data = JSON.parse(localStorage.getItem('user'));
  data.splice(i, 1, newdata);
  localStorage.setItem("user", JSON.stringify(data));

  display()
}

function deleted(i){
  let getdata = JSON.parse(localStorage.getItem('user'))
  getdata.splice(i, 1)
  localStorage.setItem('user', JSON.stringify(getdata))
display()   
}

function store(event) {
  event.preventDefault();
  let user = localStorage.getItem("user")
  user = JSON.parse(user);
  if(user == null){
      user = []
  }
  let data=JSON.stringify({
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      Number:document.getElementById("number").value,
      gender:document.getElementById("gender").value,
      age:document.getElementById("age").value,
      interested:document.getElementById("interested").value,
  })


  user.push(data);
  localStorage.setItem("user",JSON.stringify(user));
  display()
};
