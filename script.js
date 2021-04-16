scores();

function scores() {
  var elements = document.getElementsByClassName("text-green-600 float-right card");
  for (i = 0; i < elements.length; i++) {
    changecolor(elements[i]);
  }
}

function changecolor(element) {
  elementname = element.innerText;
  var one = elementname.charAt(0);
  if (4 <= one && one <= 7) {
    element.style.color = "#F59E0B";
  } else if (5 > one) {
    element.style.color = "#DC2626";
  } else {
    element.style.color = "#059669";
  }

  }


function reveal(X) {
  var cardid = X.toString();
 
  var card = document.getElementById(cardid);
  console.log(card.innerText);
  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
    console.log(X);
  } else  {
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

