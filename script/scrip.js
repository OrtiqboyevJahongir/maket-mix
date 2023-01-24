"use strict"
       const scrolss = document.querySelector(".scrols")
       const openNav = document.querySelector(".home") 
       const btn = document.querySelector(".toggle_icon")
       const coloseMenu = document.querySelector(".closebtn")
       const closeWindowNav = document.querySelectorAll("div")
       const closImg = document.querySelectorAll("img")
                
    
       btn.addEventListener("click",()=>{
            openNav.style.width="18%"
            btn.style.display = "none"
       })

       coloseMenu.addEventListener("click",()=>{
             openNav.style.width="0"
             btn.style.display = ""
           
       })

       closeWindowNav.forEach((a) =>{
        a.addEventListener("click" , (e)=>{   
          if(e.target==a){
            openNav.style.width="0"
            btn.style.display = ""
          }
    })
})

   


        scrolss.addEventListener("click",()=>{
        window.scroll({top:0,behavior:"smooth"})  
    })
        window.addEventListener("scroll",()=>{ 
            if(window.scrollY>300){
                scrolss.classList.add("scrols")
                scrolss.classList.remove("none")
                 scrolss.classList.remove("swipe")
                 
            } else{
                scrolss.classList.add("none")
                scrolss.classList.remove("scrols") 
                
                
            }
        })
   
        const isBg = document.querySelector(".img-animation")
        const isFollow = document.querySelector(".all-follow")

        window.addEventListener("scroll",()=>{ 
            if(window.scrollY>200){
                isBg.style.left = "0"
                isFollow.style.left = "0"
                
                 
            } else{
                 
                isBg.style.left = "-70%"
                isFollow.style.left = "40%"
                
            }
        })
        

        