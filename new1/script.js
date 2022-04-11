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
        move.style.backgroundColor= "#fff",
        move.style.mixBlendMode= "difference",
        semicircle.style.display = "none"
        move.style.display = "block" 
        main.style.backgroundColor= dets.target.dataset.color
        });


    element.addEventListener("mouseleave", function (dets) {
        semicircle.style.display = "block"
        move.style.display = "none" 
        main.style.backgroundColor= "white"
      
        // semicircle.style.backgroundColor= "transparent"
        });
    });
        


        document.querySelector(".circle").addEventListener("mousemove", function (dets) {
            this.style.transform = `translate(${-dets.clientX * .22}px,${dets.clientY * 0.12}px)`
        })
        document.querySelector(".circle").addEventListener("mouseleave", function (dets) {
            this.style.transform = `translate(0px,0px)`
        })



        // var one = document.querySelectorAll(".one");
        // let section =document.querySelector(".section")
        // one.forEach(element => {
        //     element.addEventListener("mousemove",function(){
        //         section.style.backgroundColor="red"
        // })
        // })





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



        // ------------------GSAP
        // gsap.to("h1",{
        //     y:0,
        //     duration:1,
        //     stagger:.5
        // })

        $('.text .enlarge h1').textillate({
            in: {
                effect: 'fadeInUp',
                delay: 15,
            },
            // loop: true,
            // out:{
            //     effect:'fadeOutRight',
            // },
        });


        // $('.footer .ft h1').textillate({
        //     in:{
        //         effect: 'fadeInUp'
        //     },
        //     loop:true,
        //     out:{
        //         effect: 'fadeOut'
        //     }
        // })


        
        


        
        





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