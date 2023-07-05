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
    window.location.replace("thanks.html")
};



