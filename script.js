const questions = [
    {
        question: "Diving into a completely new topic. What's your first step?",
        options: [
            {text: "I look for someone who's already familiar with the topic and ask them to walk me through the basics.", type: "LI"},
            {text: "I skim through a few resources on my own and try to make sense of it all.", type: "LS"},
            {text: "I find a group of people already discussing the topic and try to join in on the conversation.", type: "LP"}
        ]
    },
    {
        question: "You're trying your hardest to understand a concept, but you're still confused. What's your next step?",
        options: [
            {text: "Ask someone who knows it well to clarify.", type: "LI"},
            {text: "Take a break, and revist the material later.", type: "LS"},
            {text: "Bounce ideas off with a peer and see how they're approaching it.", type: "LP"}
        ]
    },
    {
        question: "You're learning something new for fun (drawing, gaming, etc.), no pressure. What would make the learning experience more enjoyable for you?",
        options: [
            {text: "A clear guide or tutorial to follow along.", type: "LI"},
            {text: "Experimenting on your own.", type: "LS"},
            {text: "Getting a friend to join you.", type: "LP"}
        ]
    },
    {
        question: "You're reviewing material that didn't make sense the first time. What would help you understand the material better?",
        options: [
            {text: "Hearing another explanation of the same topic.", type: "OL"},
            {text: "Rereading the source again, but more diligently this time.", type: "OR"},
            {text: "Summarizing the materials into your own words.", type: "OW"},
            {text: "Find real life examples.", type: "OD"}
        ]
    },
    {
        question: "You're preparing for your presentation. How would you go about preparing yourself?",
        options: [
            {text: "Record yourself doing the presentation, and then listening to the recording before presenting.", type: "OL"},
            {text: "Go through your script to read and highlight key sections.", type: "OW"},
            {text: "Create and/or rewrite your flashcards.", type: "OW"},
            {text: "Present to your friends before the real presentation.", type: "OD"}
        ]
    },
    {
        question: "You're learning a new skill (coding, cooking, etc.), what would be your go-to method to learning it?",
        options: [
            {text: "Watch or listen to someone explaining it.", type: "OL"},
            {text: "Read guides or manuals.", type: "OR"},
            {text: "Take notes or sketch out steps.", type: "OW"},
            {text: "Just try it and see what happens.", type: "OD"}
        ]
    },
    {
        question: "Study session completed, what do you do now?",
        options: [
            {text: "Categorize the parts you understood and the parts you didn't.", type: "RET"},
            {text: "Go over the material again (and again).", type: "REP"},
            {text: "Attempt to explain the concept to yourself or someone else.", type: "TEA"}
        ]
    },
    {
        question: "A final exam is coming up, how would you prepare yourself?",
        options: [
            {text: "Review old notes.", type: "RET"},
            {text: "Follow a study schedule or study flashcards.", type: "REP"},
            {text: "Exchange notes with a peer and teach each other.", type: "TEA"}
        ]
    },
    {
        question: "You're reviewing feedback from a previous assignment, what would you find most helpful?",
        options: [
            {text: "Try to understand what went wrong and why.", type: "RET"},
            {text: "Rework the problem and/or do similar ones.", type: "REP"},
            {text: "Explain the issue to someone else to clarify your understanding.", type: "TEA"}
        ]
    },
    {
        question: "You're stuck on a tough concept. What's your first instinct?",
        options: [
            {text: "Keep going and hope it clicks later.", type: "PAS"},
            {text: "Try a different resource or method.", type: "ACT"},
            {text: "Push through because you want a better grade.", type: "NEG"},
            {text: "Explore it more deeply because it's interesting.", type: "POS"}
        ]
    },
    {
        question: "You just got feedback that wasn't great. How would you act?",
        options: [
            {text: "Move on, it's not worth the stress.", type: "PAS"},
            {text: "Adjust your approach for the next time.", type: "ACT"},
            {text: "Focus on improving your score.", type: "NEG"},
            {text: "Get curious about what you missed.", type: "POS"}
        ]
    },
    {
        question: "You're bored while trying to review study material. What do you do?",
        options: [
            {text: "Power through, and get it over with.", type: "PAS"},
            {text: "Take a break and find a new method.", type: "ACT"},
            {text: "Tell yourself that you need a good grade.", type: "NEG"},
            {text: "Try to make the study material seem more interesting.", type: "POS"}
        ]
    },
    {
        question: "You're feeling pressure to do well on a test. What will you do?",
        options: [
            {text: "Do what you always do.", type: "PAS"},
            {text: "Rework your strategy and hope you'll feel more prepared.", type: "ACT"},
            {text: "Cram harder, you are bound to remember something.", type: "NEG"},
            {text: "Try to understand what you don't understand.", type: "POS"}
        ]
    }
]

let scores = {
    LS: 0,
    LP: 0,
    LI: 0,
    OL: 0,
    OR: 0,
    OW: 0,
    OD: 0,
    RET: 0,
    REP: 0,
    TEA: 0,
    PAS: 0,
    ACT: 0,
    POS: 0,
    NEG: 0
}

function renderQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${q.question}</p>`;

        q.options.forEach((opt, optIndex) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = `q${index}`;
            checkbox.value = opt.type;
            checkbox.id = `q${index}_opt${optIndex}`;

            const label = document.createElement("label");
            label.htmlFor = checkbox.id;
            label.textContent = opt.text;

            questionDiv.appendChild(checkbox);
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    // Hide quiz and submit button
    document.getElementById("quiz").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("analysis").style.display = "block";

    // Reset scores
    for (let key in scores) {
        scores[key] = 0;
    }

    // Tally selections
    questions.forEach((q, index) => {
        const selected = document.querySelectorAll(`input[name="q${index}"]:checked`);
        selected.forEach(opt => {
            scores[opt.value]++;
        });
    });

    displayResults(scores);
    analyzeLearn(scores);
}



function displayResults(scores) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Your Student Profile</h2>";

    const categories = {
        "Learning Style": ["LS", "LP", "LI"],
        "Obtaining Style": ["OL", "OR", "OW", "OD"],
        "Retention Style": ["RET", "REP", "TEA"],
        "Mindset": ["PAS", "ACT", "POS", "NEG"]
    };

    for (let group in categories) {
        resultsDiv.innerHTML += `<h3>${group}</h3>`;
        categories[group].forEach(cat => {
            resultsDiv.innerHTML += `<p>${cat}: ${scores[cat]}</p>`;
        });
    }
}

function analyzeLearn(scores) {
    const learnAnalysisDiv = document.getElementById("learn-analysis");
    learnAnalysisDiv.innerHTML = "information here";

    const instructor = scores["LI"];
    const self = scores["LS"];
    const peer = scores["LP"];
    const values = [instructor, self, peer];
    const uniqueValues = new Set(values);
    const sum = values.reduce((a, b) => a + b, 0);

    if(instructor === self && self === peer) {  // EQUAL VALUES
        if(instructor === 0) {
            learnAnalysisDiv.innerHTML += `<p>Students show signs of burnout or disengagement.</p>`
        } else {
            learnAnalysisDiv.innerHTML += `<p>Student is well-rounded and benefits from all types of learning methods.</p>`
        }
    } else if ((instructor === self && peer === 0) || (instructor === peer && self === 0 ) || (self === peer && instructor === 0)) {  // TWO EQUAL, ONE ZERO
        let tieTypes = getTieTypes(instructor, self, peer);
        learnAnalysisDiv.innerHTML += `<p>Student shows strong preference for ${tieTypes[0]} and ${tieTypes[1]} learning methods.</p>`
    } else if(sum > 0 && values.filter(v => v > 0).length === 1) {   // ONLY ONE DOMINANT
        const dominantIndex = values.findIndex(v => v > 0);
        const dominantType = ['instructor-led', 'self-guided', 'peer-based'][dominantIndex];
        learnAnalysisDiv.innerHTML += `<p>Student shows a strong preference for ${dominantType} learning.</p>`
    }
}

function getTieTypes(instructor, self, peer) {
    const types = [];
    if(instructor === self && instructor !== 0) {
        types.push("instructor-led", "self-guided")
    }
    if(instructor === peer && instructor !== 0) {
        types.push("instructor-led", "peer-based");
    }
    if(self === peer && self !== 0) {
        types.push("self-guided", "peer-based");
    }

    return types;
}

document.addEventListener("DOMContentLoaded", renderQuiz);
