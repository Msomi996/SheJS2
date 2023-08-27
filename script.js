let nme = "Nonhle"
alert("Junior developer");
alert("pretty");
let name = prompt("What is your name");
alert("Nice to meet you " + name);
let languageSpoken = prompt("which language do you speak?");

if(languageSpoken === "Zulu") {
    alert("Sawubona");
}
if(languageSpoken === "English") {
    alert("Hello");
}
if(languageSpoken !== "Zulu") {
    alert("Good day");
}
if(languageSpoken !== "Xhosa") {
    alert("Molo");
} else {
    alert ("Hello")
}
let language = prompt("Which language do you speak?");
let province = prompt("Which province are you from?")

if (language === "Zulu" && province === "Kwazulu-natal") {
    alert("Sawubona.")
}
function greetUser() {
    let language = prompt("which language do you speak?");
    if (language === "Zulu") {
        elert ("Sawubona.");
    } else {
        elert("Hello")
    }
}


