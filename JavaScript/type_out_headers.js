
let header = document.getElementsByClassName("type_me_out")
let headerPosition = []
let headerHeight = []
let offsetAmount = 100;
let typed = []

document.addEventListener("DOMContentLoaded", function() {
    for (let x = 0; x < header.length; x++) {
        // headerPosition[x] = header[x].offsetTop
        headerPosition[x] = header[x].getBoundingClientRect().top + window.pageYOffset
        headerHeight[x] = header[x].offsetHeight
        headerPosition[x] += headerHeight[x] += offsetAmount
        typed[x] = false
        // console.log(window.getComputedStyle(header[x]).visibility === "hidden")
    }

    console.log(headerPosition)



    // headerPosition = header.offsetTop
    // headerHeight = header.offsetHeight
    // headerPosition += offsetAmount += headerHeight

    // if (headerPosition < (window.scrollY + window.innerHeight) && !typed)
    // {
    //     header.style.display = "inline-block"
    //     TypeOutText(header, 100, "typing", null)
    //     typed = true
    // }

    for (let y = 0; y < header.length; y++) {
        if (headerPosition[y] < (window.scrollY + window.innerHeight) && !typed[y]) {
            header[y].style.display = "inline-block"
            TypeOutText(header[y], 100, "typing", null)
            typed[y] = true
        }

    }
})


window.addEventListener("scroll", function() {

    for (let y = 0; y < header.length; y++) {
        if (headerPosition[y] < (window.scrollY + window.innerHeight) && !typed[y]) {
            header[y].style.display = "inline-block"
            TypeOutText(header[y], 100, "typing", null)
            typed[y] = true
        }

    }
})