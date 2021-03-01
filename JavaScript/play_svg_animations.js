
const gameContorllerSVG = document.getElementById("game_controller")
const popcornSVG = document.getElementById("popcorn")
const techLinesSVG = document.getElementById("tech_lines")

function isInViewport(element) {
    const rect = element.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

document.addEventListener("resize", function() {
    if (isInViewport(gameContorllerSVG)) {
        gameContorllerSVG.classList.add("game_controller_animations")
    } else {
        gameContorllerSVG.classList.remove("game_controller_animations")
    }

    if (isInViewport(popcornSVG)) {
        popcornSVG.classList.add("popcorn_animations")
    } else {
        popcornSVG.classList.remove("popcorn_animations")
    }

    if (isInViewport(techLinesSVG)) {
        techLinesSVG.classList.add("tech_lines_animations")
    } else {
        techLinesSVG.classList.remove("tech_lines_animations")
    }
})
document.addEventListener("scroll", function() {
    if (isInViewport(gameContorllerSVG)) {
        gameContorllerSVG.classList.add("game_controller_animations")
    } else {
        gameContorllerSVG.classList.remove("game_controller_animations")
    }

    if (isInViewport(popcornSVG)) {
        popcornSVG.classList.add("popcorn_animations")
    } else {
        popcornSVG.classList.remove("popcorn_animations")
    }

    if (isInViewport(techLinesSVG)) {
        techLinesSVG.classList.add("tech_lines_animations")
    } else {
        techLinesSVG.classList.remove("tech_lines_animations")
    }
})