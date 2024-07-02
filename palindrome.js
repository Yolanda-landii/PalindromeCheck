function checkPalindrome() {
    let userInput = document.getElementById('userInput').value.trim();

    if (userInput === "") {
        document.getElementById('result').innerText = "Invalid input. Please enter a non-empty string.";
        return;
    }

    let CheckString = userInput.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let Palindromestr = true;

    for (let i = 0; i < CheckString.length / 2; i++) {
        if (CheckString[i] !== CheckString[CheckString.length - i - 1]) {
            Palindromestr = false;
            break;
        }
    }

    if (isPalindrome) {
        document.getElementById('result').innerText = `"${userInput}" is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `"${userInput}" is not a palindrome.`;
    }
}

