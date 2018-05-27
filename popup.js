chrome.runtime.sendMessage({"type":"getVocabularies"}, function(response){


    let transResultTable = document.getElementById("transResult")
    let innerHTML =  transResultTable.innerHTML
    for(key in response){
        innerHTML = innerHTML + `<tr></tr><td>${key}</td>\
                        <td>${response[key]}</td>
                        </tr>`
    }
    transResultTable.innerHTML = innerHTML
});

document.getElementById("transResult").onclick = e =>{
    let node = e.target.parentNode
    let voc = {
        src:node.children[0].innerText,
        dst:node.children[1].innerText
    }
    console.log(voc)
    chrome.runtime.sendMessage({"type":"storeVocabularies","value":voc},function (response) {

    })
}
