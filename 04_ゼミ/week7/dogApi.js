const dogImg = document.getElementById("dog-img")

//URLにアクセスして情報をとってくる
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => {
//         return res.json() // 結果を json として読み込んで、次の then に渡す
//     })
//     .then((data) => {
//         console.log(data.message)
//         dogImg.src = data.message //画像のURLだけをとりたい！
//     })

const getDogImg = async function(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random")
    const jsonData = await data.json()
    console.log(jsonData.message)
    dogImg.src = jsonData.message
}

//間数実行
getDogImg()