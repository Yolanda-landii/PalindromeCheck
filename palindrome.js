function checkPalindrome() {
    let userInput = document.getElementById('userInput').value.trim();

    if (userInput === "") {
        document.getElementById('result').innerText = "Invalid input. Please enter a non-empty string.";
        return;
    }

    let cleanedString = userInput.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let isPalindrome = true;

    for (let i = 0; i < cleanedString.length / 2; i++) {
        if (cleanedString[i] !== cleanedString[cleanedString.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        document.getElementById('result').innerText = `"${userInput}" is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `"${userInput}" is not a palindrome.`;
    }
}
 