function checkPassword() {

    const password = document.getElementById("password").value;

    const correctPassword = "2492026";

    const message = document.getElementById("message");

    if (password === correctPassword) {

        message.textContent = "Password correct ❤️";

        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);

    } else {

        message.textContent = "Oops... Try again ❤️";

    }
} 
function showMessage() {

    const message = document.getElementById("love-message");

    message.textContent =
        "No matter what happens, I will always be grateful for every beautiful moment we share. ❤️";
} 
function changeImage(image) {

    const mainImage = document.getElementById("mainImage");

    mainImage.src = image.src;

} 
let currentChat = 0;

const chats = document.querySelectorAll(".chat-gallery img");


function openChat(image) {

    currentChat = Array.from(chats).indexOf(image);

    const modal = document.getElementById("chatModal");

    const modalImage = document.getElementById("chatModalImage");

    modalImage.src = chats[currentChat].src;

    modal.style.display = "flex";
}


function nextChat() {

    currentChat++;

    if (currentChat >= chats.length) {
        currentChat = 0;
    }

    document.getElementById("chatModalImage").src =
        chats[currentChat].src;
}


function previousChat() {

    currentChat--;

    if (currentChat < 0) {
        currentChat = chats.length - 1;
    }

    document.getElementById("chatModalImage").src =
        chats[currentChat].src;
}


function closeChat() {

    document.getElementById("chatModal").style.display = "none";
} 
function showFinalSurprise() {

    const finalContent = document.getElementById("final-content");

    finalContent.style.display = "block";

    finalContent.scrollIntoView({
        behavior: "smooth"
    });

} 