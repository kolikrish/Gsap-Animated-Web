const pageOneAnimation = () => {
    let tl = gsap.timeline();

tl.from("nav h1 , nav ul li a ,ul button", {
    y:-40,
    opacity:0,
    duration:0.7,
    delay:1,
    stagger:0.15,
})


tl.from(".part1 h2", {
    x:-100,
    opacity:0,
    duration:0.5,
})

tl.from(".part1 p", {
    x:-100,
    opacity:0,
    duration:0.5,
})

tl.from(".part1 button", {
    opacity:0,
    scale:0,
    duration:0.5,
})

tl.from(".part2 img", {
    opacity:0,
    scale:0,
},"-=1")


gsap.from("#img-btm img", {
    y:60,
    duration:0.5,
    stagger:0.2,
    opacity:0,
    scrollTrigger: {
        trigger:"#img-btm img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top -100%",
    }
})

}

const pageTwoAnimation = () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger:"main",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 0%",
            scrub:2,
        }
    })
    
    tl2.from("#services h2", {
        x:-300,
        opacity:0,
        duration:0.5,
    })
    
    tl2.from(".elem.line1.left", {
        x:-200,
        opacity:0,
        duration:2,
    },"anime")
    
    tl2.from(".elem.line1.right", {
        x:200,
        opacity:0,
        duration:2,
    },"anime")
    
    tl2.from(".elem.line2.left", {
        x:-200,
        opacity:0,
        duration:2,
    },"anime2")
    
    tl2.from(".elem.line2.right", {
        x:200,
        opacity:0,
        duration:2,
    },"anime2")
    
}

pageOneAnimation();
pageTwoAnimation();