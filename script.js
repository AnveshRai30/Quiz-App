document.addEventListener("DOMContentLoaded", pageLoad);

let quest = [
    {
        question: "Which language runs in a web browser?",
        option:["Javascript","Java","C","DBMS"],
        a: "Javascript",
        b: "Java",
        c: "C",
        d: "DBMS",
        correct: "Javascript",
    },
    {
        question: "Which is the most sensitive organ in our body?",
        option:["Skin","Muscle","Eye","Nose"],
        a: "Skin",
        b: "Muscle",
        c: "Eye",
        d: "Nose",
        correct: "Skin",
    },
    {
        question: "September 27 is celebrated every year as?",
        option:["Teacher's day","National Integration Day","World Tourism Day","International Literacy Day"],
        a: "Teacher's day",
        b: "National Integration Day",
        c: "World Tourism Day",
        d: "International Literacy Day",
        correct: "World Tourism Day",
    },
    {
        question: "Which country is known as the playground of Europe?",
        option: ["Australia", "Holland", "Switzerland", "Italy"],
        a: "Australia",
        b: "Holland",
        c: "Switzerland",
        d: "Italy",
        correct: "Switzerland",
    },
    {
        question: "Which country is also known as the ‘Land of Rising Sun’?",
        option: ["Japan", "New Zealand", "Fiji", "China"],
        a: "Japan",
        b: "New Zealand",
        c: "Fiji",
        d: "China",
        correct: "Japan",


    },
    {
    question: "Which country is known as the ‘Land of Thunderbolts’?",
    option: ["Bhutan", "Mangolia", "Thailand", "China"],
    a: "Bhuthan",
    b: "Mangolia",
    c: "Thailand",
    d: "China",
    correct: "Bhuthan",
    },

    {
        question: "Which continent has a highest number of countries?",
        option: ["Asia", "Europe", "North America", "Africa"],
        a: "Asia",
        b: "Europe",
        c: "North America",
        d: "Africa",
        correct: "Africa",
    },

    {
        question: "Which state has the highest percentage of billionaire MLAs according to the ADR report?",
        option: ["Uttar Pradesh","Maharashtra","Karnataka","West Bengal"],
        a: "Uttar Pradesh",
        b: "Maharashtra",
        c: "Karnataka",
        d: "West Bengal",
        correct: "Karnataka",
    },

    {
        question: "In which country, white elephant is found?",
        option: ["India", "SriLanka", "Thailand", "Malaysia"],
        a: "India",
        b: "SriLanka",
        c: "Thailand",
        d: "Malaysia",
        correct: "Thailand",
    },
    {
        question: " What is the source of income of the Panchayats?",
        option: ["House Tax", "Education Tax","Income Tax","Transport Tax"],
        a: "House Tax",
        b: "Education Tax",
        c: "Income Tax",
        d: "Transport Tax",
        correct: "House Tax",
    },
];

let currentQuestion = 0;
let score = 0;
const submitBtn = document.querySelector(".submitBtn");
const optionsContainer = document.querySelector(".options");

function pageLoad() {
    const queZions = document.querySelector(".hText");
    const optionLabels = document.querySelectorAll(".options label");
    const radioButtons = document.querySelectorAll(".options input[type='radio']");
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) { 
       
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
                       
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
           
        return array;
     }
    
    if (currentQuestion < quest.length) {
        queZions.textContent = quest[currentQuestion].question;
        let op=shuffleArray(quest[currentQuestion].option);
      
        optionLabels[0].textContent = op[0];
        optionLabels[1].textContent = op[1];
        optionLabels[2].textContent = op[2];
        optionLabels[3].textContent = op[3];

        radioButtons[0].value = op[0];;
        radioButtons[1].value = op[1];
        radioButtons[2].value = op[2];
        radioButtons[3].value = op[3];
       


        // Deselect all radio buttons
        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].checked = false;
        }

    } else {
        // Display the final score after the last question
        displayFinalScore();
        submitBtn.style.display = "none"; // Hide the submit button
        optionsContainer.style.display = "none"; // Hide the options container
    }
}

function displayFinalScore() {
    const queZions = document.querySelector(".hText");
    if (score == 10) {
        queZions.textContent = "🎉👏 Wow, you're a genius! Perfect score! 🌟✨. Your knowledge is truly impressive, and I'm thrilled to see your expertise shine through. Keep it up, and let's celebrate your amazing achievement! 🌟✨ .Your Final Score is" + score + " out of " + quest.length;
    }
else if(score>=7&&score<=9){
        queZions.textContent = "😄 Well done! You're doing really well, scoring between 7 and 9! Your effort is paying off, and I can see you're on the right track. Keep it going, and you'll soon reach that perfect score! 🔥👍.Your Final Score is" + score + " out of " + quest.length;
}
    else if (score >= 4 && score <7) {
        queZions.textContent = "😐 It's a good start, scoring between 4 and 6. Keep up the effort, and you'll surely improve! Don't be discouraged; you're making progress, and that's what counts. 🌠🙌 .Your Final score is" + score + " out of " + quest.length;
    }
else{


        queZions.textContent = "No worries, my friend! Scoring between 0 and 3 is just the beginning. Remember, every attempt is a chance to learn and get better. Keep your spirits high, keep learning, and you'll see those scores rise in no time! 📚💪.Sorry to say this Your Final score is " + score + " out of " + quest.length;
}

}
pageLoad();

// Add an event listener to the submit button
submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
    const selectedOption = document.querySelector(".options input[type='radio']:checked");
    console.log(selectedOption);
    if (selectedOption) {
        const selectedValue = selectedOption.value;
        
        const correctValue = quest[currentQuestion].correct;
       

        if (selectedValue === correctValue) {
            score++; // Increment the score by 1 for each correct answer
        }

        currentQuestion++;
        pageLoad();
        
    } else {
        alert("Please select an option before submitting.");
    }
}

const container = document.querySelector(".options");

container.addEventListener("click", (event) => {
    if (event.target.type === "radio") {
        const clickedRadio = event.target;
        const radioButtons = container.querySelectorAll("input[type='radio']");

        radioButtons.forEach((radio) => {
            radio.checked = radio === clickedRadio;
        });
    }
});
