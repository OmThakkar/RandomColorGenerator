const bgcolor = () =>{
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" +  randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;
}

document.getElementById("btn").addEventListener("click", bgcolor)

bgcolor(); 