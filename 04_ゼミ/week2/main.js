const countText = document.getElementById("countText")
const countButton = document.getElementById("countButton")
let count = 0

const dengenText = document.getElementById("dengenText")
const dengenButton = document.getElementById("dengenButton")
let dengen = false



countButton.onclick = function(){
    if(dengen === true){
        //count = count + 1と同義
        count++
        countText.textContent = count
    }
}

// dengenButton.onclick = function(){
//     if(dengen === false){
//         dengen = true
//         dengenText.textContent = "オン"
//     } else {
//         dengen = false
//         dengenText.textContent = "オフ"
//     }
// }

dengenButton.onclick = function(){
    dengen = !dengen
    //三項演算子
    dengenText.textContent = dengen ? "オン" : "オフ"
}