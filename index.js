document.getElementById("open-modal").addEventListener("click", function() {
    console.log("lol")
    document.getElementById("overlay").style.display = "block";
})


document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})