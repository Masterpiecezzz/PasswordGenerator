let output = document.querySelector('#generated-password')
let copyButton = document.querySelector('#copy-text')
let uppercase = document.querySelector('#uppercase')
let lowercase = document.querySelector('#lowercase')
let numbers = document.querySelector('#numbers')
let symbols = document.querySelector('#symbols')
let lengthInput = document.querySelector('#length')
let button = document.querySelector("#generate-password")

let uppercaseMarks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowercaseMarks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbersMarks = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbolsMarks = ['!', '@', '#', '$', '5', '&']
let randomArray = []

function CopyText()
{
    let outputText = output.value
    output.select()
    document.execCommand("Copy")
    output.value = 'Copied!'
    setTimeout(() => {output.value = outputText},2000)
}
function UppercaseChange()
{
    if(uppercase.checked) {randomArray.push(...uppercaseMarks)}
    else {removeElementsFromArray(uppercaseMarks, randomArray)}
}
function LowercaseChange()
{
    if(lowercase.checked) {randomArray.push(...lowercaseMarks)}
    else {removeElementsFromArray(lowercaseMarks, randomArray)}
}
function NumbersChange()
{
    if(numbers.checked) {randomArray.push(...numbersMarks)}
    else {removeElementsFromArray(numbersMarks, randomArray)}
}
function SymbolsChange()
{
    if(symbols.checked) {randomArray.push(...symbolsMarks)}
    else {removeElementsFromArray(symbolsMarks, randomArray)}
}
function LengthChange() {length = parseInt(lengthInput.value)}
function removeElementsFromArray(elementsToRemove, array)
{
  for(let i = 0; i < elementsToRemove.length; i++)
  {
    let index = array.indexOf(elementsToRemove[i])
    if (index !== -1) {array.splice(index, 1)}
  }
}
function generatePassword()
{
    if(length > 0 && randomArray.length > 0)
    {
        let outputTab = []
        for(let i = 0; i < length; i++)
        {
            let randomIndex = Math.floor(Math.random() * randomArray.length)
            let randomCharacter = randomArray[randomIndex]
            outputTab.push(randomCharacter)
        }
        output.value = outputTab.join('')
    }
    else {output.value = ''}
}

copyButton.addEventListener('click', CopyText)
uppercase.addEventListener('change', UppercaseChange)
lowercase.addEventListener('change', LowercaseChange)
numbers.addEventListener('change', NumbersChange)
symbols.addEventListener('change', SymbolsChange)
lengthInput.addEventListener('input', LengthChange)
button.addEventListener('click', generatePassword)