const contadorfixed = document.getElementById("contadorfixed")

let objetoStorage = JSON.parse(localStorage.getItem("carroShop")) || JSON.parse(localStorage.getItem("carroShopJuguetes")) || []


if (objetoStorage.length != 0) {
    contadorfixed.style.visibility = "visible"
}


window.addEventListener("scroll", () => {

    if (window.scrollY > 1) {
        document.getElementById("nav").style.backgroundColor = "#272d3b"
        document.getElementById("nav").style.opacity = "0.8"
    } else {
        document.getElementById("nav").style.backgroundColor = "transparent"
    }

})