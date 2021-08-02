var mic = document.getElementById("mic");
var txtbox = document.getElementById("txtbox");
var send= document.getElementById("send");
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

var hello = ["hi", "I am your chatbot", "hello! Nice to meet you","hi"];
var who = ["i am robo", "i am your chatbot"];



let container = document.querySelector('.container');
let outercont = document.querySelector('.outer-cont');
window.addEventListener("load", function(){

    defchatbotvoice("aa");
});


const showusermsg = (usermsg)=>{
    let output='';
    output = output+`<div class="img1 f1" ><img src="./icons/user.png" alt="" id="image1" style="float: left;"><div id="box1">${usermsg}</div></div>`;
    outercont.innerHTML += output;
    window.scrollTo(0,document.querySelector(".container").scrollHeight);
    return outercont;
}
const showbotmsg = (botmsg)=>{
    let output='';
    output = output+`<div class="img1 f2" ><img src="./icons/robot.png" alt="" id="image2" style="float: right;"><div id="box2">${botmsg}</div></div>`;
    outercont.innerHTML += output;
    window.scrollTo(0,document.querySelector(".container").scrollHeight);
    return outercont;
}



const chatbotvoice =(msg)=>{
    var mic = document.getElementById("mic");
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
    const speech= new SpeechSynthesisUtterance();
    if(msg.includes('hello') ||msg.includes('hi') || msg.includes('hii')  )
    {
        // alert();
        speech.text=hello[Math.floor(Math.random() * hello.length)];
    }
    else speech.text = "Sorry, I didn't get it";
    window.speechSynthesis.speak(speech);
    container.appendChild(showbotmsg(speech.text));
}

const defchatbotvoice =(msg)=>{
    const speech= new SpeechSynthesisUtterance();
    speech.text = "Hello I am your chatbot";
    window.speechSynthesis.speak(speech);
    container.appendChild(showbotmsg(speech.text));
}


recognition.onresult=(e)=>{
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
  console.log(transcript);
   container.appendChild(showusermsg(transcript));
   chatbotvoice(transcript);
//   alert(transcript);
}
recognition.onend = ()=>{
    mic.style.backgroundColor="red";
}


mic.addEventListener("click", function()
{
    recognition.start();
    mic.style.backgroundColor="#00ff73";
})
send.addEventListener("click",()=>{
    // alert(txtbox.value);
    container.appendChild(showusermsg(txtbox.value));
    chatbotvoice(txtbox.value);
    txtbox.value="";
})


