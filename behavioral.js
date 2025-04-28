// Home Logo button
document.getElementById("logo").addEventListener("click", function() {

    const anchor = document.createElement("a");
    anchor.target = "_parent";
    anchor.href = "../home.html";
    document.body.appendChild(anchor);
    anchor.click();

    console.log("Home Pages");
});