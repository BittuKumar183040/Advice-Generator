const url="https://api.adviceslip.com/advice";
const adviceId=document.querySelector("#AdID");
const adviceQuote=document.querySelector(".quote");
const mobileDivier=document.querySelector(".divider");
if(window.innerWidth <= 600){
    mobileDivier.src="./images/pattern-divider-mobile.svg";
}

const adviceChanger= async ()=>{
    const request = await fetch(url)
    const data = await request.json()
    // console.log(data)
    adviceId.innerHTML=data.slip.id;
    adviceQuote.innerHTML=data.slip.advice;
}
adviceChanger();