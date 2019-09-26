let clickCount = 0;
document.addEventListener("click", function() {
    clickCount++;
    console.log("clicked", clickCount);
});

while (clickCount !== 5) {
    console.log("wait");
}

console.log("5 clicks!");
