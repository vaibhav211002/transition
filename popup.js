function timebar(){
    var t1=gsap.timeline();

    t1.to(".elem",{
        y:5,
        ease:Expo.easeInOut,
        duration:2
    })
    // t1.to(".elem",{
    //     y:0,
    //     ease:Expo.easeInOut,
    //     duration:2,
    //     stagger:.2
    // }
    // )
}

timebar();

let eve=document.querySelector('.button')
let dark=document.querySelector('.dark-mode')
let fon=document.querySelector('h3')

let flag =1;
eve.addEventListener('click',()=>{
flag++;


    if(flag%2!=0){
        dark.style.backgroundColor='#100c08';
        fon.style.color='white';
        fon.innerText='Hi There !! Dark Mode';
    }
    else{
        dark.style.backgroundColor='#fffff0';
        fon.style.color='black';
        fon.innerText='Hi There !! White Mode';
    }
})