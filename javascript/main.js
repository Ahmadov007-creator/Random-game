var elTitle = document.querySelector('.title')
var elInp = document.querySelector('.inp')
var elButn = document.querySelector('.btn')
var ranNum = Math.floor(Math.random() * 10)
var count = 0

function fn(){
    count = count + 1
    var val = elInp.value
    if(count <= 3){
        if(ranNum > val){
            elTitle.innerHTML = 'Kompyuter oylagan raqam katta'
        }else if(ranNum < val){
            elTitle.innerHTML = 'Kompyuter oylagan raqam kichik'
        }else if(ranNum == val){
            elTitle.innerHTML = 'Topdingiz'
            console.log(ranNum);
        }
    }else{
        elTitle.innerHTML = 'Yutqazdingiz'
    }
}