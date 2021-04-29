let usercode = "";
let SenCodes = ["BCCABAAAB", "BCCAAAAAB", "AAADDCBCA", "AAACDCBCA", "AABBCABBA", "AAABCAACA", "BCCABAAAB", "BCCAAAAAB", "AAABCABCA", "AAABDABCA", "BBCABAAAB", "BCCABAAAB", "BCCABAAAB", "BCCABAAAB", "BCCAAAAAA", "BCCABAAAB", "BCCABAAAA", "BCCABAAAC", "ACACCBBCA", "ACABCAACA", "BCCABAAAB", "BCCABAAAB", "BCCAAAAAB", "BCCAAAAAB", "AAACCCBCA", "AAACCCBCA", "BCCABAAAB", "BCCABAAAB", "AAADCAACA", "AAABCAACA", "ACAACAACA", "AAACCABCA", "AAABCAACA", "AAACCBBCA", "AAACCBBCA", "AAACCCBCC", "AAABCAACA", "AAACCABCA", "ACBACAABA", "CCCABAAAB", "BCCABAAAA", "BCCABAAAB", "BCCAAAAAB", "BCCAAAAAB", "BBCABAAAB", "BCCABAAAB", "BBCABAAAB", "BCCABAAAB", "AAACCCBCA", "AAACCAACA", "AAACCCBCA", "AAACCBACA", "BCCBBAAAB", "AAADCCBCA", "AAACCABCA", "AAACCAACA", "BBCABAAAA", "BCCABAAAA", "BCCABAAAA", "BCCABAAAB", "BCCABAAAB", "BCCAAAAAB", "BCCAAAAAB", "BCCAAAAAB", "BBCABAAAA", "BCCAAAAAB", "AAACCCBCA", "AAACCBBCA", "AAACCBBCA", "AAABCCBCB", "BBCABAAAB", "AAACCAACA", "AAACCBBCA", "AAACCCBCA", "BCCABAAAB", "BCCABAAAB", "BCCABAAAA", "ACACCACCA", "BCCABAAAA", "BCCAAAAAA", "AAAACACBA", "AAACCBBCA", "AAACCAACA", "AAABCBBBA", "AAACCCBCA", "AAACCBBCA", "AAACCAACA", "AAACCCBCA", "AAACCBBCA", "ABAACAACA", "BCCAAAAAB", "CBCAAAAAB", "BCCABAAAA", "BCAABAAAB", "BCCABAAAA", "BCCAAAAAA", "BCABAAAAA", "AABBDAACA", "AABCDABCA", "BCCAAAAAA", "AAABCAACA", "AABCDCBCA"]
let SenNames = ["Joe Biden", "Kamala Harris", "Richard Shelby", "Tommy Tuberville", "Lisa Murkowski", "Dan Sullivan", "Kyrsten Sinema", "Mark Kelly", "John Boozman", "Tom Cotton", "Dianne Feinstein", "Alex Padilla", "Micheal Bennet", "John Hickenlooper", "Richard Blumenthal", "Chris Murphy", "Tom Carper", "Chris Coons", "Marco Rubio", "Rick Scott", "Raphael Warnock", "Jon Ossoff", "Brian Schatz", "Mazie Hirono", "Mike Crapo", "Jim Risch", "Dick Durbin", "Tammy Duckworth", "Todd Young", "Mike Braun", "Chuck Grassley", "Joni Ernst", "Jerry Moran", "Roger Marshall", "Mitch McConnell", "Rand Paul", "Bill Cassidy", "John Kennedy", "Susan Collins", "Angus King", "Ben Cardin", "Chris Van Hollen", "Elizabeth Warren", "Ed Markey", "Debble Stabenow", "Gary Peters", "Amy Klobuchar", "Tina Smith", "Roger Wicker", "Cindy Hyde-Smith", "Roy Blunt", "Josh Hawley", "Jon Tester", "Steve Daines", "Deb Fischer", "Ben Sasse", "Catherine Cortez Masto", "Jacky Rosen", "Jeanne Shaheen", "Maggie Hassan", "Bob Menendez", "Cory Booker", "Martin Heinrich", "Ben Ray Luján", "Chuck Schumer", "Kirsten Gillibrand", "Richard Burr", "Thom Tillis", "John Hoeven", "Kevin Cramer", "Sherrod Brown", "Rob Portman", "Jim Inhofe", "James Lankford", "Ron Wyden", "Jeff Merkley", "Bob Casey Jr.", "Pat Toomey", "Jack Reed", "Sheldon Whitehouse", "Lindsey Graham", "Tim Scott", "John Thune", "Mike Rounds", "Marsha Blackburn", "Bill Hagerty", "John Cornyn", "Ted Cruz", "Mike Lee", "Mitt Romney", "Patrick Leahy", "Bernie Sanders", "Mark Warner", "Tim Kaine", "Patty Murray", "Maria Cantwell", "Joe Manchin", "Shelley Moore Capito", "Ron Johnson", "Tammy Baldwin", "John Barrasso", "Cynthia Lummis"];

function main() {
    grab();
    console.log("poop!")
    if (has9chars) {
        window.location.replace('directory.html')
    } else {
        alert("Please respond to all the questions.");
// }
}
}


function grab() {
    let questions = ["Q1A", "Q1B", "Q1C", "Q2A", "Q2B", "Q2C", "Q2D", "Q3A", "Q3B", "Q3C", "Q4A", "Q4B", "Q4C", "Q4D", "Q5A", "Q5B", "Q5C", "Q5D", "Q6A", "Q6B", "Q6C", "Q6D", "Q7A", "Q7B", "Q7C", "Q7D", "Q8A", "Q8B", "Q8C", "Q9A", "Q9B", "Q9C"]
    var i;
    for (i = 0; i < questions.length; i++) {
        if (document.getElementById(questions[i]).checked == 1) {
            usercode = usercode + cleancode(questions[i]);
        }
    }
    if (has9chars(usercode)) {
        runCompare(usercode);
    } else {
        alert("Please respond to all the questions.")
    }
}

var scores = [];

function store(usercode) {
    localStorage.clear();
    var thescores = JSON.stringify(usercode);
    localStorage.setItem("scores", thescores);

}

function save(score) {
    scores.push(score);

}

function cleancode(code) {
    code = code.replace("Q", "");
    for (i = 0; i < 9; i++) {
        code = code.replace((i + 1), "")
    }
    return code;
}

function has9chars(code) {
    if (code.length === 9) {
        return true;
    // } else if (code.length > 9) {
    //     code = code.splice(0, 9);
    }
    else {
        return false;
    }
}

function runCompare(User) {
    for (i = 0; i < SenCodes.length; i++) {
        compare(User, SenCodes[i]);
    }
    store(scores);
    // console.log(scores);

}


function compare(User, Sen) {

    // Defining variables
    let U1 = User.charAt(0);
    let U2 = User.charAt(1);
    let U3 = User.charAt(2);
    let U4 = User.charAt(3);
    let U5 = User.charAt(4);
    let U6 = User.charAt(5);
    let U7 = User.charAt(6);
    let U8 = User.charAt(7);
    let U9 = User.charAt(8);
    // Break between User/Sen codes
    let S1 = Sen.charAt(0);
    let S2 = Sen.charAt(1);
    let S3 = Sen.charAt(2);
    let S4 = Sen.charAt(3);
    let S5 = Sen.charAt(4);
    let S6 = Sen.charAt(5);
    let S7 = Sen.charAt(6);
    let S8 = Sen.charAt(7);
    let S9 = Sen.charAt(8);
    // Now, we begin the actual comparision
    var score = "000000000";

    // KEY:
    // 1 = Agree
    // 0 = Disagree
    // 5 = Somewhat agree
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    if (U1 === S1) {
        // console.log("Q1 Agree");
        score = score.replaceAt(0, "1")
    } else {
        // console.log("Q1 Disagree");
        score = score.replaceAt(0, "0")
    }

    if (U2 === S2) {
        // console.log("Q2 Agree");
        score = score.replaceAt(1, "1")
    } else if (U2 === "A" & S2 === "D" || U2 === "D" & S2 === "A") {
        // console.log("Q2 Disagree");
        score = score.replaceAt(1, "0")
    } else if (U2 === "A" & S2 === "B" || U2 === "B" & S2 === "A") {
        // console.log("Q2 Somewhat Agree");
        score = score.replaceAt(1, "5")
    } else if (U2 === "C" & S2 === "D" || U2 === "D" & S2 === "C") {
        // console.log("Q2 Somewhat Agree");
        score = score.replaceAt(1, "5")
    } else {
        // console.log("Q2 Disagree");
        score = score.replaceAt(1, "0")
    }

    if (U3 === S3) {
        // console.log("Q3 Agree");
        score = score.replaceAt(2, "1")
    } else if (U3 === "A" & S3 === "C" || U3 === "C" & S3 === "A") {
        // console.log("Q3 Disagree");
        score = score.replaceAt(2, "0")
    } else {
        // console.log("Q3 Somewhat Agree")
        score = score.replaceAt(2, "5")
    }

    if (U4 === S4) {
        score = score.replaceAt(3, "1")
            // console.log("Q4 Agree")
    } else {
        // console.log("Q4 Disagree");
        score = score.replaceAt(3, "0")
    }

    if (U5 === S5) {
        // console.log("Q5 Agree")
        score = score.replaceAt(4, "1")
    } else if (U5 === "A" & S5 === "D" || U5 === "D" & S5 === "A") {
        // console.log("Q5 Disagree")
        score = score.replaceAt(4, "0")
    } else {
        // console.log("Q5 Somewhat Agree")
        score = score.replaceAt(4, "5")
    }

    if (U6 === S6) {
        // console.log("Q6 Agree")
        score = score.replaceAt(5, "1")
    } else {
        // console.log("Q6 Disagree")
        score = score.replaceAt(5, "0")
    }

    if (U7 === S7) {
        score = score.replaceAt(6, "1")
            // console.log("Q7 Agree")
    } else {
        // console.log("Q7 Disagree")
        score = score.replaceAt(6, "0")
    }

    if (U8 === S8) {
        // console.log("Q8 Agree")
        score = score.replaceAt(7, "1")
    } else if (U8 === "A" & S8 === "B" || U8 === "B" & S8 === "A") {
        score = score.replaceAt(7, "5")
            // console.log("Q8 Somewhat Agree")
    } else {
        // console.log("Q8 Disagree")
        score = score.replaceAt(7, "0")
    }

    if (U9 === S9) {
        score = score.replaceAt(8, "1")
            // console.log("Q9 Agree")
    } else {
        // console.log("Q9 Disagree")
        score = score.replaceAt(8, "0")
    }

    save(score);

}

//BCCAAAAAB