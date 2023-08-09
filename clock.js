let firstName = prompt("Lütfen adınızı girin: ") 
let greeting = document.querySelector("#myName") 
let body = document.querySelector(".bg-dark") 


greeting.innerHTML = `${firstName}` 

if (!firstName) {
    body.innerHTML= "Lütfen isim kısmını boş bırakmayın"
}



function currentDate () { 
    
    let clock = document.querySelector("#myClock"); 
    let today = new Date (); 
    
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
    let day = days[today.getDay()]; 
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ` ${day}` 

    let currentTime = `${time}`
    clock.innerHTML = currentTime
   
    setTimeout(currentDate, 1000) 

}

currentDate ();







