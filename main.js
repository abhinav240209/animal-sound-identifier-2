//https://teachablemachine.withgoogle.com/models/HFk3lVzIC/model.json



function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true,

    });
   Mysoundclassifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/HFk3lVzIC/model.json", modelReady);
  
}

function modelReady() {
    Mysoundclassifier.classify(gotResult);
}

function gotResult(error,results){
      if(error) {
          console.error(error);
      }

      else {
          console.log(results);
      }
}
