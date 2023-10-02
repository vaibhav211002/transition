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