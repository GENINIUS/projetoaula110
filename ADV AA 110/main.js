previsao1=""
previsao2=""
previsao3=""
Webcam.set({
    width:350,
    height:300,
    imageFormat:"png",
    pngQuality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image'src='"+data_uri+"'/>"
    })
}
function gotResult(error,results){
if (error) {
    console.error(error); 
     
}
else{
    if (results[0].label=="legal") {
      document.getElementById("emojiupdate").innerHTML="&#1F44D"
    }
    else if (results[0].label=="vitoria") {
        document.getElementById("emojiupdate").innerHTML="&#270C"
            
        }
    
    else if (results[0].label=="tranquilo") {
        document.getElementById("emojiupdate").innerHTML="&#1F919"
        
        }
        else if (results[0].label=="Muito legal") {
            document.getElementById("emojiupdate").innerHTML="&#1F917"
                
            }
        speak()
    }
}

    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/HAyrcwhmE/model.json',modelLoaded);
    function modelLoaded() {
        console.log("modelo carregado")
    }
    function speak() {
        var synth=window.SpeechSynthesis
         speakdata1="a primeira previsão é:"+previsao1
         speakdata2="a segunda  previsão é:"+previsao2
         speakdata3="a terceira  previsão é:"+previsao3
         speakdata4="a quarta  previsão é:"+previsao4
        var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2+speakdata3)
        synth.speak(utterThis)
    }