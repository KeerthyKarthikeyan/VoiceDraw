var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var apple;
var number=0;
var content;


function preload(){
    apple=loadImage("apple.png");
    
    }



function setup(){
    canvas=createCanvas(900,600);
    
    
    }


x=0;
y=0;
var set="";



function start(){
    document.getElementById("status").innerHTML="System is listening.Please Speak ";
    recognition.start();


}


recognition.onresult=function(event){
console.log(event);
content=event.results[0][0].transcript;
console.log(content);
number = Number(content);
console.log(number)
document.getElementById("status").innerHTML="The speech has been recognised as :"+number;
}



if(Number.isInteger(number)){
    var counter=0;
    
    
    }

    
    

function draw(){

    
      
       
if (counter<number){
   for(i=1; i<=number ;i++){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
     image(apple,x,y,60,60);
     counter=counter+1;
    }
    document.getElementById("status").innerHTML="Apples are drawn";
   
}


}
