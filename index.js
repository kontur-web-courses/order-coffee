let removeBeverageButton = document.getElementsByClassName('remove-beverage');
let beverageCount = document.querySelectorAll('.beverage').length;
for (let b of removeBeverageButton) {
    b.addEventListener("click", function(event) {
        if (beverageCount > 1) {
            event.currentTarget.parentNode.remove();
        }    
    })
}