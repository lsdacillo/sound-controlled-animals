var barking = 0
var barking_results = barking
var meowing = 0
var meowing_results = meowing
var roaring = 0
var roaring_results = roaring
var mooing = 0
var mooing_results = mooing


function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vhgSOZl8e/model.json', modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    } else{
        console.log(results)

        random_number_r = Math.floor(Math.random()* 255)+1;
        random_number_g = Math.floor(Math.random()* 255)+1;
        random_number_b = Math.floor(Math.random()* 255)+1;

        barking = barking_results
        meowing = meowing_results
        roaring = roaring_results
        mooing = mooing_results

        document.getElementById("sound-heard").innerHTML = 'I heard -'+ results[0].label;
        if(results[0].label == 'Barking'){
            barking_results = barking + 1;
            document.getElementById("barking").innerHTML = 'Barking -'+barking_results;
        } else if(results[0].label == 'Meowing'){
            meowing_results = meowing + 1;
            document.getElementById("meowing").innerHTML = 'Meowing -'+meowing_results;
        } else if(results[0].label == 'Roaring'){
            roaring_results = roaring + 1;
            document.getElementById("roaring").innerHTML = 'Roaring -'+roaring_results;
        }else{
            mooing_results = mooing + 1;
            document.getElementById("mooing").innerHTML = 'Mooing -'+mooing_results;
        }
        
        animal = document.getElementById("animal");
        if(results[0].label == "Barking"){
            animal.src = 'dog.gif'
        } else if(results[0].label == 'Meowing'){
            animal.src = 'cat.gif'
        } else if(results[0].label == 'Roaring'){
            animal.src = 'lion.gif'
        } else if(results[0].label == 'Background Noise'){
            animal.src = 'sound.png'
        } else{
            animal.src = 'cow.gif'
        }
    }
    
    document.getElementById("sounds").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("sound-heard").style.color ="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
}