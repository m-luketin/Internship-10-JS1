//task 1

function Reverse(stringToReverse) {
    let reversedString = "";

    for (let i = 0; i < stringToReverse.length; i++) {
        reversedString += stringToReverse[stringToReverse.length - i - 1];
    }

    return reversedString;
}

function Capitalize(stringToCapitalize) {
    let capitalizedString = "";

    for (let i = 0; i < stringToCapitalize.length; i++) {
        if (i === 0 || stringToCapitalize[i - 1] === " ")
            capitalizedString += stringToCapitalize[i].toUpperCase();
        else
            capitalizedString += stringToCapitalize[i].toLowerCase();
    }

    return capitalizedString;
}

function MaxLetter(stringToCount) {
    let maxAppearances = 0;
    let maxLetter;

    for (let i = 0; i < stringToCount.length; i++) {
        if (stringToCount[i] !== " ") {
            let numberOfAppearances = stringToCount.split(stringToCount[i]).length - 1;

            if (numberOfAppearances > maxAppearances) {
                maxAppearances = numberOfAppearances;
                maxLetter = stringToCount[i].toUpperCase();
            }
        }
    }

    return maxLetter;
}

function ReverseSentence(stringToReverse) {
    let parsedSentence = stringToReverse.split(" ");
    let reversedSentence = "";

    for (let i = 0; i < parsedSentence.length; i++) {
        reversedSentence += Reverse(parsedSentence[i]) + " ";
    }

    return reversedSentence;
}


let selectionString;

while (selectionString !== "END") {
    selectionString = prompt("Pick the algorithm you'd like to use:\n\n 1 ▶ Reverse\n\n 2 ▶ Capitalize\n\n 3 ▶ Max Letter\n\n 4 ▶ Reverse words\n\n END ▶ Quit program");

    let algorithmText;
    if (selectionString !== "END" && selectionString !== "" && (selectionString === "1" || selectionString === "2" || selectionString === "3" || selectionString === "4")) {
        algorithmText = prompt("Enter the algorithm text:\n");

        if (algorithmText === "") {
            alert("Input error!");

        }
        else {
            switch (selectionString) {
                case "1":
                    alert(Reverse(algorithmText));
                    break;
                case "2":
                    alert(Capitalize(algorithmText));
                    break;
                case "3":
                    alert(MaxLetter(algorithmText));
                    break;
                case "4":
                    alert(ReverseSentence(algorithmText));
                    break;
                default:
                    alert("Input error!");
            }
        }
    }
}

//task 2

let array = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 77,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
    },
    {
        name: "C-3PO",
        height: 167,
        mass: 75,
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a"
    },
    {
        name: "R2-D2",
        height: 96,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female"
    }];


function SortByHeight(arrayOfCharacters){
    return(arrayOfCharacters.sort((a, b) => a.height > b.height ? 1 : -1));
}

function AverageWeight(arrayOfCharacters){
    let sumOfWeights = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfWeights += array[i].mass;
    }
    return(sumOfWeights / array.length);
}

console.log("Sorted by height:\n", SortByHeight(array));
console.log("Average weight of characters:", AverageWeight(array));