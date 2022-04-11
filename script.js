// window.addEventListener("mousemove", function (dets) {
    //     document.querySelector(".semicircle").style.top = dets.pageY + "px"
    //     document.querySelector(".semicircle").style.left = dets.pageX + "px"
    
    // });
    
    let one = document.querySelector(".one")
let semicircle = document.querySelector(".semicircle");

window.addEventListener("mousemove", function (dets) {
    document.querySelector(".semicircle").style.top = `${dets.clientY}px`
    document.querySelector(".semicircle").style.left = `${dets.clientX}px`
});


document.querySelectorAll(".txt").forEach(element => {
    element.addEventListener("mousemove", function () {
        semicircle.style.width = "75px"
        semicircle.style.height = "75px"
        semicircle.style.backgroundColor = "#fff"
        semicircle.style.mixBlendMode = "difference"
    })

    element.addEventListener("mouseleave", function () {
        semicircle.style.width = "15px"
        semicircle.style.height = "15px"
        semicircle.style.backgroundColor = "transparent"
        semicircle.style.mixBlendMode = "initial"
    });
});


let body=document.querySelector("body")
let main = document.querySelector(".main");

let move = document.querySelector(".move")
document.querySelectorAll(".one").forEach(element => {
    element.addEventListener("mousemove", function (dets) {
        move.style.top = `${dets.clientY}px`
        move.style.left = `${dets.clientX}px`
        move.style.mixBlendMode= "difference",
        semicircle.style.display = "none"
        move.style.display = "block" 
        document.querySelector(".wheel").style.backgroundColor = "#fff"
        main.style.backgroundColor= dets.target.dataset.color

        });

    element.addEventListener("mouseleave", function (dets) {
        semicircle.style.display = "block"
        move.style.display = "none" 
        main.style.backgroundColor= "white"  

        });
    });
        


        document.querySelector(".circle").addEventListener("mousemove", function (dets) {
            this.style.transform = `translate(${-dets.clientX * .22}px,${dets.clientY * 0.12}px)`
        })
        document.querySelector(".circle").addEventListener("mouseleave", function (dets) {
            this.style.transform = `translate(0px,0px)`
        })

// ..------>>>>> SCROLL TO TOP
        window.addEventListener("scroll", function () {
            var scroll = document.querySelector(".scrolltop");
            scroll.classList.toggle("active", window.scrollY > 500)
        });
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };


        // function scrollToTop(){
        //     window.scrollTo(0,0);   
        // }


        $('.text .enlarge h1').textillate({
            in: {
                effect: 'fadeInUp',
                delay: 15,
            },
        });



// ..------- GSAP START PAGE--------.......
        gsap.to(".start",{
            height:0,
            duration:2,
            delay: 1
        })

// ..............ICON MENU ................

        var cancel = document.querySelector(".cancel");
        let menutxt = document.querySelector(".menutxt");
        let navbar = document.querySelector(".navbar")

        document.querySelector(".navbar .menu").addEventListener("click",function(){
            menu.style.transform = "rotate(180deg)"
            menu.style.backgroundColor = "#fff"
            menutxt.style.display = "block"
            gsap.to(".navbar span",{
                width: "300px"
            })
            setTimeout(() => {
                menu.style.display= "none"
                cancel.style.display = "block"
                menu.style.transform = "rotate(0deg)"
                cancel.style.backgroundColor= "#fff"
            }, 500);
        })

        let menu = document.querySelector(".menu")
        document.querySelector(".navbar .cancel").addEventListener("click",function(){
            cancel.style.transform = "rotate(180deg)"
            menu.style.backgroundColor = "#fff"

            gsap.to(".navbar span",{
                width:"80px"
            })

            setTimeout(() => {
                menu.style.display = "block"
                cancel.style.display= "none"
                cancel.style.transform = "rotate(0deg)"
                menutxt.style.display = "none"
            }, 500);
        })




// .....  GSAP SECTION
        let tl = gsap.timeline();

        tl.from(".jewelly",{
            opacity:0,
            xPercent:-100,
            delay:.5,
            duration:1,
            ease: "power1.out",
            yoyo:true,
        })

        tl.from(".dot",{
            opacity:0,
            yPercent:100,
            delay:.5,
            duration:1,
            ease:"power1.out",
            repeatDelay:1,
        },
        0.01
        );

        tl.to(".dot",{
            x:20,
            duration:1,
            ease:"power1.out"
        });
        tl.to(".dot",{
            x:-10,
            duration:0.5,
            ease:"power1.out"
        });

        tl.to(".jewelly",{
            opacity:0,
            xPercent: -100,
            duration: 1,
            ease:"power1.out",
            yoyo:true,
        });

        tl.to(".dot",{
            opacity:0,
            duration:1,
            ease:"expo.out"
        },
        3
        );

        tl.to(".cover",{
            yPercent: -100,
            duration:1,
            ease:"power1.out",
        },
        );

        tl.to(".cover2",{
            yPercent: -100,
            duration:1,
            ease:"power1.out"
        },
        4.3
        );

        tl.to(".cover3",{
            yPercent:-100,
            duration: 1,
            ease:"power1.out",
        },
        4.6
        )
        tl.to(".cover4",{
            yPercent:-100,
            duration: 1,
            ease:"power1.out",
        },
        4.8
        );









        tl.from(".gorges",{
            yPercent:-100,
            duration:1,
            ease:"power1.out",
            opacity:0,
        },
        4.2
        )
        
        // tl.from(".main",{
        //     yPercent:100,
        //     // duration:1,
        //     ease:"power1.out",
        //     // delay:0.4,
        // })

        tl.to(".gorges",{
            yPercent:-100,
            duration:1,
            ease:"power1.out",
            delay:0.5,
        })


        
        


        
        





// let semicircle = document.querySelector(".semicircle");

// window.addEventListener("mousemove", function (details) {
    //     let xValue = details.pageX;
    //     let yValue = details.pageY;

//     setTimeout(function () {
//         semicircle.style.top = yValue + "px";
//         semicircle.style.left = xValue + "px";
//     }, 100);






            // window.addEventListener("mousemove", function (dets) {
            //     document.querySelector(".semicircle").style.top = `${dets.clientY}px`
            //     document.querySelector(".semicircle").style.left = `${dets.clientX}px`
            // });
    
    
    
            // let semicircle = document.querySelector(".semicircle");
            // document.querySelectorAll(".txt").forEach(element => {
            //     element.addEventListener("mousemove", function () {
            //         semicircle.style.width = "70px"
            //         semicircle.style.height = "70px"
            //         semicircle.style.backgroundColor = "red"
            //         semicircle.style.mixBlendMode = "difference"
            //     })
    
    
            //     element.addEventListener("mouseleave", function () {
            //         semicircle.style.width = "15px"
            //         semicircle.style.height = "15px"
            //         semicircle.style.backgroundColor = "transparent"
            //         semicircle.style.mixBlendMode = "initial"
            //     })
            // });
// })