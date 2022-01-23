module.exports = function palindrome(word) {
    if(word !== '') {
        let r_word = word.split('').reverse().join('')
        r_word == word ? console.log('palindrome'): console.log('not palindrome')
    }
}

