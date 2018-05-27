console.log("it is all_urls_voca.js")
let vocab_text = document.body.innerText

function getVocabulariesFromText(text){

    let vocabulariesArray = text.match(/[a-zA-Z]+/g)

    vocabulariesArray = new Set(vocabulariesArray)//去重
    vocabulariesArray = [...vocabulariesArray]

    return vocabulariesArray
}

let vocabulariesArray = getVocabulariesFromText(vocab_text)
console.log(vocabulariesArray)
vocabulariesArray = vocabulariesArray.slice(0,20)
console.log(vocabulariesArray)

chrome.runtime.sendMessage({"type":"vocabularies","value":vocabulariesArray}, function(response){
    console.log(response)
});
