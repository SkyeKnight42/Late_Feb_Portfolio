
let demoContainer = document.getElementById("demo_typing_container")
let mobileTyping = document.getElementById("mobile_typing")
let normalTyping = document.getElementsByClassName("normal_demo")

let demoButton = document.getElementById("demo_button")

window.addEventListener("scroll", function() {
        if (isInViewport(mobileTyping)) {
                TypeOutText(mobileTyping, 50, "typing", null)
        }
})

demoButton.addEventListener("click", function() {
        TypeOutText(mobileTyping, 50, "typing", null)
        TypeOutText(normalTyping[0], 75, "typing", null)
        TypeOutText(normalTyping[1], 100, "dash", "!")
        TypeOutText(normalTyping[2], 125, "blink", "#")
})