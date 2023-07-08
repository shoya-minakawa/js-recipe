const countText = document.getElementById("countText")
const countButton = document.getElementById("countButton")
const dengenText = document.getElementById("dengenText")
const dengenButton = document.getElementById("dengenButton")

//カウントの変数
let count = 0;
//状態を表す変数
let dengen = false;

dengenButton.onclick = function() {
    if(dengen === false){
        dengen = true
        dengenText.textContent = "オン"
    } else {
        dengen = false
        dengenText.textContent = "オフ"
    }
}

//三項演算子のやり方
dengenButton.onclick = function() {
    dengen = !dengen
    dengenText.textContent = dengen ? "オン" : "オフ"
}


//incrementの要素がクリックされたら、countTextの内容が1増える！
countButton.onclick = function () {
    if(dengen === true){    
        count++//countNumを1増やす (countNum = countNum + 1と同義)
        countText.textContent = count;
        console.log(count) //コンソール出力}
    }
}
