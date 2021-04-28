
var scores = JSON.parse(localStorage.getItem("scores"))
distribute();


function changecolor(element) {
    elementname = element.innerText;
    var one = elementname.slice(0, -3);
   
    if (4 <= one && one <= 7) {
        element.style.color = "#F59E0B";
        //yellow
    } else if (one >= 7) {
        element.style.color = "#059669";
        //green
    }
    else {
        element.style.color = "#DC2626";
        //red
    }
}

function reveal(X) {
    var card = document.getElementById(X);
    console.log(card.classList);
    // console.log(card.innerText);
    if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
        // console.log(X);
    } else {
        card.classList.add("hidden");
    }
}

function cover(Y) {
    var cardid = Y.toString();
    var card = document.getElementById(cardid);

    if (true) {
        card.classList.add("covered");
        console.log("finished adding classes");

    }

    reveal(Y);

}



function distribute() {
    let overall = 0;
    var j=1;
    for (d = 1; d < 103; d++) {
    for (i = 1; i < 9; i++) {
        let eleid = ((j*10) + i).toString();
        // console.log(eleid);
        if (scores[j-1].charAt(i) == 1) {
            document.getElementById(eleid).innerText = scores[j-1].charAt(i) + "0";
        } else {
            document.getElementById(eleid).innerText = scores[j-1].charAt(i);
        }
        overall = overall + parseInt(document.getElementById(eleid).innerText);


        

     if (i % 8 === 0) {
        j++;
        // console.log((Math.ceil((overall/8) * 10)/10).toString())
        document.getElementById(eleid - 8).innerText = (Math.ceil((overall/8) * 10)/10).toString();
        console.log(eleid-8);
        overall = 0;
        // console.log(j)
        var elements = document.getElementsByClassName("text-green-600 float-right card ");
        for (i = 0; i < elements.length; i++) {
        changecolor(elements[i]);
    }
     }
    } 
    
    
}
}

