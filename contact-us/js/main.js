var tl = gsap.timeline({
    defaults: {
        duration: .8,
        ease: "back.out(1.7)",
        opacity: 0,
    }
});


tl.from(".stagger1", {
    y: 50,
    duration: 1.5,
    stagger: .2,
    ease: "back.out(1.7)",
    opacity: 0
})