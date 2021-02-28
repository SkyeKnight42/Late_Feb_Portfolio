
let demoContainer = document.getElementById("demo_typing_container")
let mobileTyping = document.getElementById("mobile_typing")
let normalTyping = document.getElementsByClassName("normal_demo")

let demoButton = document.getElementById("demo_button")

demoButton.addEventListener("click", function() {
        TypeOutText(mobileTyping, 50, "typing", null)
        TypeOutText(normalTyping[0], 50, "typing", null)
        TypeOutText(normalTyping[1], 50, "dash", "!")
        TypeOutText(normalTyping[2], 50, "blink", "#")
})