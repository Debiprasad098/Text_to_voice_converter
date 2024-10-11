
let text_container=document.querySelector("#text_container");
let language_selection=document.querySelector("#language_selection");
let btn=document.querySelector("#btn");


let speech=new SpeechSynthesisUtterance();
let allvoices=[];
window.speechSynthesis.onvoiceschanged=()=>{
    allvoices=window.speechSynthesis.getVoices();
    speech.voice=allvoices[0];


    allvoices.forEach((voice,i)=>
      (  language_selection.options[i]=new Option(voice.name,i)
    ))
}
language_selection.addEventListener("change",()=>{
    speech.voice=allvoices[language_selection.value];
})

btn.addEventListener("click",()=>{
    

    speech.text=text_container.value;
    window.speechSynthesis.speak(speech);
})