/* this is nothing but an alert of javascript */
 /*  alert("welcome to my animation project");  */
 
/* ===================================mouse curson moving===================================================================== */

 /* this is the javascipt code of the moving circle with the cursor */

 /* 
 steps to perform this-
 1. select the div or id with the querryselector
 2. add an event listener on whole window 
 3. mousemove function
 4. find out the values of x=axix and y-axis 
 5. the value will be should in the form of clientx and clienty
 6. give the values to the cursor eg - xvalue = details.clientx

 7. after giving them the values we have to move it ... for moving it we have to change the css with stylee
 add + px beacuse css dont understand just numbers
 8.set time out for better transition
 */


 let circle = document.querySelector('#circle');
 const btn = document.querySelector('#btn');
 const svgelem = document.querySelector('svg');

 var tl = gsap.timeline();

window.addEventListener('mousemove',function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    
    this.setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    
    }, 100);
})

btn.addEventListener('click', function(){
tl.reverse();
setTimeout(function(){
  svgelem.classList.add('animate');
},2000)
});
/* ============================================================================================================================ */





   tl
   .from("#wrapper", {
    duration:3,
    scale:.7,
    ease: 'Expo.easeInOut',
    opacity:0
  })

  .from("#white-trip",{
    duration:2,
    width:0,
    ease: 'Expo.easeInOut',
    opacity:0
  }, '-=2')

.from("#blackcard",{
    duration:1.5,
    x:50,
    ease: 'Expo.easeInOut',
    opacity:0
  }, '-=1')
  .from("#linelem",{
    duration:1.5,
    x:50,
    ease: 'Expo.easeInOut',
    opacity:0
  }, '-=1')
  .from("#linelem .line",{
    duration:2,
    width:0,
    ease: 'Expo.easeInOut',
    opacity:0
  }, '-=1')

  .from("#blackcard p",{
    duration:1.2,
    y:30,
    ease: 'Expo.easeInOut',
    opacity:0
  }, '-=2')

  .from("#background h5",{
    duration:4,
    x:180,
    y:150,
    ease: 'Expo.easeInOut',
    opacity:0
  }, '-=3') 