/*const bgcolor = () =>{
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" +  randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;
}

document.getElementById("btn").addEventListener("click", bgcolor)

bgcolor(); */

function bgcolor(){
    var random = "ABCDEF0123456789";
    var randomcode = "#";

    for(var i = 0; i <6 ; i++) {
        randomcode += random[Math.floor(Math.random()*16)];
    }

    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;

}



bgcolor();