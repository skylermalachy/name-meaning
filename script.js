"use strict";
const input = document.querySelector("input");
const check = document.querySelector("button");

const shareBtn = document.getElementById("whatsappShareButton");
const section = document.querySelector(" section");
const header = document.querySelector("header");
const message = document.querySelector(".message");
const inputDisplay = document.querySelector(".input-display");

check.addEventListener("click", () => {
  if (input.value.trim() === "") {
    inputDisplay.textContent = "please enter your name";
  } else {
    setInterval(() => {
      shareBtn.style.width = "350px";
      shareBtn.style.height = "40px";
    }, 500);
    setInterval(() => {
      shareBtn.style.width = "340px";
      shareBtn.style.height = "35px";
    }, 1000);
    section.style.opacity = 100;
    input.style.opacity = 0;

    check.textContent = "PLEASE SHARE TO YOUR FRIENDS🙏🙏";
    check.style.backgroundColor = "WHITE";
    inputDisplay.textContent = "your name says a lot about you and who you are";
    inputDisplay.style.color = "red";
    message.textContent = `please share this on your whatsapp status to see the meaning of ${input.value.toUpperCase()}`;
    shareBtn.addEventListener("click", function () {
      const randNum1 = Math.trunc(Math.random() * 11 + 1);
      let message = [
        "",
        " that you are destined for greatness",
        "A winner that never gives up!",
        "A blessed child",
        "A strong and powerful breed of its kind",
        "God will always fight your battle",
        "My help has come!",
        "someone that loves to eat food",
        "someone that loves kids",
        "someone that likes money too much",
        "A person that gets emotional easily",
        "someone that finds it hard to forgive when offended",
      ];
      let result = `
      
      ${input.value.toLocaleUpperCase()}  means  ${message[
        randNum1
      ].toLocaleUpperCase()}%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20





      
      Click the link below to see yours%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20

















      https://skylermalachy.github.io/name-meaning/ `;

      const whatsappApiUrl = `https://wa.me/?text=${result}`;

      // Open WhatsApp share link in a new tab or window.
      window.open(whatsappApiUrl, "_blank");
    });
  }
});
