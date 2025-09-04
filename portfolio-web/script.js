// JAVASCRIPT MAIN FILE
// MUADH KHAN - 09/04/2025
document.addEventListener("DOMContentLoaded", () => {
    // TOGGLE BUTTON
    const toggleBtn = document.querySelector(".dark-mode-toggle");
    const body = document.body;

    // SPINNER SETUP
    const spinner = document.querySelector(".console-spinner");
    const spinnerFrames = ["", "|", "", "|"];
    let i = 0;
    
    // SPINNER ANIMATE
    setInterval(() => {
        spinner.textContent = spinnerFrames[i % spinnerFrames.length];
        i++;
    }, 500); 

    // GITHUB BUTTON
    const githubBtn = document.querySelector("#github-btn");
    githubBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        window.open("https://www.github.com/McBoomer", "_blank");
        console.log("GITHUB CLICK");
    });

    // LINKEDIN BUTTON
    const linkedinBtn = document.querySelector("#linkedin-btn");
    linkedinBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        window.open("https://linkedin.com/in/muadhkhan", "_blank");
    });

    // CONTACT BUTTON
    const contactBtn = document.querySelector("#contact-btn");
    contactBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        window.open("contact.html", "_self");
    });

    // DARK MODE INIT
    if (toggleBtn) {
        toggleBtn.style.backgroundImage = "url('assets/light-mode.png')";
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("light-mode");

            if (body.classList.contains("light-mode")) {
                toggleBtn.style.backgroundImage = "url('assets/dark-mode.png')";
            } else {
                toggleBtn.style.backgroundImage = "url('assets/light-mode.png')";
            }
        });
    }

    // PROFILE GRAVITY
    const profilePic = document.querySelector(".logo img");
    profilePic.addEventListener("click", () => {
        const navLinks = document.querySelectorAll(".nav-links a");
        const cards = document.querySelectorAll(".github-card, .linkedin-card");
        const expenseImg = document.querySelector(".expense-tracker-code img");
        const footer = document.querySelector(".site-footer");
        const mainHeading = document.querySelector(".main-content h1");
        const mainParagraph = document.querySelector(".main-content p");

        const allFall = [...navLinks, ...cards];
        if(expenseImg) allFall.push(expenseImg);
        if(footer) allFall.push(footer);
        if(mainHeading) allFall.push(mainHeading);
        if(mainParagraph) allFall.push(mainParagraph);

        allFall.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("gravity");
            }, index * 50);
        });

        profilePic.classList.add("pfp-bounce");

        setTimeout(() => {
            allFall.forEach(el => el.classList.remove("gravity"));
            profilePic.classList.remove("pfp-bounce");
        }, 2000);
    });
});
