var images=[
    "assets/image/wp3390444.jpg",
    "assets/image/star-wars-the-last-stand-4k-oq.jpg",
    "assets/image/star-wars-the-rise-of-skywalker_1580586230.jpg"
]

var index=0
var img =document.querySelector('.slider img')
img.src=images[index]

var next=document.querySelector('.next')
var prev=document.querySelector('.prev')

 function Avtoplay(){
    index++
    if(index>images.length-1){
        index=0
    }
    img.src=images[index]
}

next.addEventListener("click",function(){
    Avtoplay()
   
})
prev.addEventListener("click",function(){
    index--
    if(index===-1){
        index=images.length-1
    }
    img.src=images[index]
})

setInterval(() => {
    Avtoplay()
}, 3000);