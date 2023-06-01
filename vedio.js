const playButton= document.getElementById("play");
const video =document.querySelector("video")

const Duration = document.getElementById("duration")


let isvideoplaying = false

function playvideo(){

   isvideoplaying= true
  playButton.classList.replace("fa-play","fa-pause")
video.play()
}

function pausevideo()
{
   isvideoplaying= false
  playButton.classList.replace("fa-pause","fa-play")
  video.pause()

}


function controlvideo(){
//play the video and pause the vedio
if(isvideoplaying){
  pausevideo()
}else{
  playvideo()
}


}
const currentTime= document.getElementById("currentTime")
const progressbar =document.getElementById("progress-bar")
playButton.addEventListener("click", controlvideo)


video.addEventListener("timeupdate",function(event){
  let mycurrentTime=video.currentTime

  let myduration = video.duration
  
  let progresspercentage = (mycurrentTime/myduration)*100
  progressbar.style.width =`${progresspercentage}%`


  const durationInMinutes= Math.floor(myduration/60)

let durationInSeconds = Math.floor(myduration % 60)

if (durationInSeconds <=9 ){
  durationInSeconds =`0${durationInSeconds}`
}
 Duration.innerText = `${durationInMinutes}:${durationInSeconds}`
 /////current time///

 const currentTimeInMinutes= Math.floor(mycurrentTime/60)

let currentTimeInSeconds = Math.floor(mycurrentTime % 60)

if (currentTimeInSeconds <=9 ){
  currentTimeInSeconds =`0${currentTimeInSeconds}`
}
//  Duration.innerText = `${durationInMinutes}:${durationInSeconds}`
currentTime.innerText = `${currentTimeInMinutes}:${currentTimeInSeconds}/`

})

const progressRange = document.getElementById("progress-range")

progressRange.addEventListener('click',function(event){

const totalWidth = event.srcElement.offsetWidth
// console.log(event)

const totalWidthFromStart= event.offsetX

const clickpercentage= (totalWidthFromStart/totalWidth)*100

progressbar.style.width =`${clickpercentage}%`
console.log(totalWidthFromStart/totalWidth)
video.currentTime =(totalWidthFromStart/totalWidth)*video.duration
})

const volumeRange=document.getElementById("volume-range")
const volumeBar = document.getElementById("volume-bar")
 volumeRange.addEventListener('click',function(event){
  const totalWidth = event.srcElement.offsetWidth
  const totalWidthFromStart =event.offsetX
  let volumeBarPercentage =(totalWidthFromStart / totalWidth)*100
  volumeBar.style.width =`${volumeBarPercentage}%`
let volumeInfo = totalWidthFromStart/totalWidth
if (volumeInfo< 0.5){
  video.volume = 0.2
}else{
  video.volume = 1
}

 })


 const volume =document.getElementById("volume")
 let isMuted = false

 function mute(){
  isMuted =true

  video.volume=0
  volume.classList.replace("fa-volume-up","fa-volume-mute")
  volumeBar.style.width =`${0}%`

 }
 function unmute(){
  isMuted = false

  const totalWidth = event.srcElement.offsetWidth
  const totalWidthFromStart =event.offsetX
  let volumeBarPercentage =(totalWidthFromStart / totalWidth)*100
  volumeBar.style.width =`${volumeBarPercentage}%`
  let volumeInfo = totalWidthFromStart/totalWidth

  if (volumeInfo< 0.5){
    video.volume = 0.2
  }else{
    video.volume = 1
  }
  
  volume.classList.replace("fa-volume-mute","fa-volume-up")


 }


 volume.addEventListener("click",function(){
  if (isMuted){
    unmute()
  }else{
    mute()
  }

  

 })


 const Speed = document.getElementById("speed")
 Speed.addEventListener("change",function(){

  video.playbackRate = Speed.value
 })

const PlayerContainer = document.getElementById("player-container")

const FullScreen = document.getElementById("full-screen")
let fullScreen =false

function displayFullScreen(container)
{

if(container.requestFullscreen)
 {

  container.requestFullscreen()
 }

 

}
function closeFullScreen(container)
{

  if(container.exitFullscreen)
  {
    container.exitFullscreen
  }


}

FullScreen.addEventListener("click", function(fullScreen){

  if(fullScreen){

    displayFullScreen(PlayerContainer)

  }else{
    closeFullScreen(PlayerContainer)

  }
})








