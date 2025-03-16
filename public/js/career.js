// Toggle chatbot visibility
function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

// Handle sending messages
function sendMessage() {
    var input = document.getElementById("chat-input");
    var chatBody = document.getElementById("chatbot-body");

    if (input.value.trim() !== "") {
        // Display user message
        var userMessage = document.createElement("p");
        userMessage.textContent = input.value;
        userMessage.style.background = "#007bff";
        userMessage.style.color = "white";
        userMessage.style.padding = "5px";
        userMessage.style.borderRadius = "5px";
        userMessage.style.textAlign = "right";
        chatBody.appendChild(userMessage);

        // Get bot response
        setTimeout(() => {
            var botMessage = document.createElement("p");
            botMessage.textContent = getBotResponse(input.value);
            botMessage.classList.add("bot-msg");
            chatBody.appendChild(botMessage);

            chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
        }, 500);

        input.value = "";
    }
}

// Handle "Enter" key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Basic chatbot responses
function getBotResponse(userText) {
    userText = userText.toLowerCase();
    if (userText.includes("job") || userText.includes("openings")) {
        return "You can check our career page for open positions: [link]";
    } else if (userText.includes("internship")) {
        return "Yes! We offer internships. Visit our Internship section for more details.";
    } else if (userText.includes("apply")) {
        return "To apply, click on the 'Apply Now' button on the job listing.";
    } else if (userText.includes("process")) {
        return "Our hiring process includes application review, interviews, and onboarding.";
    } else {
        return "I’m here to assist with career queries. Try asking about jobs, internships, or hiring process!";
    }
}
