https://teachablemachine.withgoogle.com/models/9RRt11F--/
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json",modelLoaded)
  }
  function modelLoaded(){
      classifier.classify(gotResult)
  }
  function gotResult(error,result){
      if (error){console.log(error)}
 else  {console.log(result)}
  }