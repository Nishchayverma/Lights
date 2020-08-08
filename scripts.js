
setTimeout(function(){ alert("Remember to close the light before opening another"); }, 3000);





const onoff= document.querySelector('.change');
const lightning1=document.querySelector('.changeLight1');
const lightning2=document.querySelector('.changeLight2');
const lightning3=document.querySelector('.changeLight3');
const lightning4=document.querySelector('.changeLight4');
const lightred= document.querySelector('.red');
const lightblue= document.querySelector('.blue');
const boxes = document.querySelectorAll('.setting');

const box= gsap.timeline();
box.from(boxes,{
   scaleX:0.1,
    opacity: 0,
    transformOrigin: '50% 50%',
    duration: 1,
    delay:0.2,
    y: 100,
    stagger: 0.3,
})
 


const tlOnOff= gsap.timeline({
    paused: true,
    reversed: true,
   
});
const tlL1= gsap.timeline({
    paused: true,
    reversed: true,
});
const tlred= gsap.timeline({
    paused: true,
    reversed: true,
});
const tlblue= gsap.timeline({
    paused: true,
    reversed: true,
});
const tlL2= gsap.timeline({
    paused: true,
    reversed: true,
});

tlOnOff.to(".st1",{
fill:'#FFFF00',
duration: 0.1,
})

tlL1.to(".st1",{
    fill: '#FFFF00',
duration: 0.1,
repeatDelay: 0.2,
repeat:-1,
yoyo: true,

});
tlred.to(".st1",{
    fill: 'red',
duration: 0.1,
repeatDelay: 0.2,
repeat:-1,
yoyo: true,

});
tlblue.to(".st1",{
    fill: 'blue',
    duration: 0.1,
    repeatDelay: 0.2,
    repeat: -1,
    yoyo: true,
});

tlL2.to(".st1",{
    fill: '#FFFF00',
duration: 0.1,
repeatDelay: 0.2,
stagger:{
    amount: 1,
    from: "end",
},
repeat:-1,
yoyo: true,

});


function toggleTweenOnOff(){
    tlOnOff.reversed() ? tlOnOff.play() : tlOnOff.reverse();
}

var count=0;
onoff.addEventListener('click',()=>{
    if(count%2==0)
    {
        onoff.style.backgroundColor="#FFFF00";
        onoff.innerHTML = "Turn Off Lights";
    }
    else
    {
        onoff.style.backgroundColor="#F5F5F5";
        onoff.innerHTML = "Turn On Lights";
    }
    count++;
    toggleTweenOnOff();
})


var redcount=0;
lightning1.addEventListener('click',()=>{
    
    if(redcount==0)
    setTimeout(function(){ alert("Now click Red and blue for interesting lightning"); }, 2000);
    redcount++;
    tlL1.timeScale(1);
    if(tlL1.isActive())
    {
        lightning1.style.backgroundColor="#F5F5F5";
        tlL1.seek(0); tlL1.pause()
    } 
    else
    {
        tlL1.play();
        lightning1.style.backgroundColor="#FFFF00";
    }
      
})

lightning2.addEventListener('click',()=>{
    tlL1.timeScale(2.5);
    if(tlL1.isActive())
    {   
        lightning2.style.backgroundColor="#F5F5F5";
        tlL1.seek(0); tlL1.pause();
    } 
    else
    {
        lightning2.style.backgroundColor="#FFFF00";
        tlL1.play();
   
    }
      
})
lightning3.addEventListener('click',()=>{
    tlL1.timeScale(0.4);
    if(tlL1.isActive())
    {
        lightning3.style.backgroundColor="#F5F5F5";
        tlL1.seek(0); tlL1.pause()
    } 
    else
    {
        lightning3.style.backgroundColor="#FFFF00";
        
       tlL1.play();
    }
   
})

lightning4.addEventListener('click',()=>{
   
    if(tlL2.isActive())
    {
        lightning4.style.backgroundColor="#F5F5F5";
        tlL2.seek(0); tlL2.pause()
    } 
    else
    {
        tlL2.play();
        lightning4.style.backgroundColor="#FFFF00";
    }
      
})
lightred.addEventListener('click',()=>{
   
    if(tlred.isActive())
    {
        tlred.seek(0); tlred.pause()
        lightred.style.backgroundColor="#F5F5F5";
    }
    else
    {
        lightred.style.backgroundColor="red";
        tlred.play();
    }
       
})


lightblue.addEventListener('click',()=>{
   
    if(tlblue.isActive())
    {
        lightblue.style.backgroundColor="#F5F5F5";
        tlblue.seek(0); tlblue.pause()
    } 
    else
    {
        lightblue.style.backgroundColor="blue";
        tlblue.play();
    }
       
})



