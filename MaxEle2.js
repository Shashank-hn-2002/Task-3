function findMax() {
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(",").map(Number);

    if (numbersArray.length === 0) {
        document.getElementById("result").textContent = "Please enter at least one number.";
        return;
    }

    let max = numbersArray[0];

    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > max) {
            max = numbersArray[i];
        }
    }

    document.getElementById("result").textContent = "The maximum element is: " + max;
}