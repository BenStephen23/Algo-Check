
function analyzeSentence(sentence) {
    let vowels = 0;
    let consonants = 0;
    let digits = 0;
    let spaces = 0;
    let others = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (char.match(/[a-zA-Z]/)) {
            if (char.match(/[aeiouAEIOU]/)) {
                vowels++;
            } else {
                consonants++;
            }
        } else if (char.match(/\d/)) {
            digits++;
        } else if (char === ' ') {
            spaces++;
        } else {
            others++;
        }
    }}



    /* 1. Input: The input to the function analyzeSentence is a string sentence.

        2.Output Variables Initialization:
    Initialize vowels, consonants, digits, spaces, and others variables to 0. These variables will be used to count the occurrences of vowels, consonants, digits, spaces, and other characters in the sentence.

    3.Loop through each character in the sentence:
    Start a loop that iterates through each character in the sentence string. We'll use the loop index i to access each character.

    4.Character Classification:
    Check each character to determine its category:
    If the character is a letter (using a regular expression [a-zA-Z]), then:
    Check if it's a vowel (using a regular expression [aeiouAEIOU]). If yes, increment the vowels count by 1. If no, increment the consonants count by 1.
    If the character is a digit (using a regular expression \d), increment the digits count by 1.
    If the character is a space (using the comparison char === ' '), increment the spaces count by 1.
    If the character doesn't fall into any of the above categories, it's considered as an "other" character, so increment the others count by 1.

    5.Output:
    After looping through all characters in the sentence, output the counts of each category:
    Output the count of vowels.
    Output the count of consonants.
    Output the count of digits.
    Output the count of spaces.
    Output the count of other characters.
    6. End Algorithm. */