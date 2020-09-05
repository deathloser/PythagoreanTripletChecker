console.log('hi!');


function checkForTriplets() {
    document.getElementById("displayAnswer").innerHTML = "You clicked the button!";
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;



    console.log('You clicked me!');
    console.log(a);
    console.log(b);
    console.log(c);

    let a2 = a * a;
    let b2 = b * b;
    let c2 = c * c;
    let legsSquaredSum = a2 + b2;

    console.log(a2);
    console.log(b2);
    console.log(c2);
    console.log(legsSquaredSum);

    if (legsSquaredSum == c2) {
        console.log('Triplets!');
        document.getElementById('displayAnswer').innerHTML = "Triplets! Try again?";
    } else {
        console.log('Not triplets');
        document.getElementById('displayAnswer').innerHTML = "Not Triplets :( Try again?";
    }

}