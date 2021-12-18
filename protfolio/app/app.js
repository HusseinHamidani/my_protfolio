const ulbar = document.querySelector(".ulbar")
const hamp = document.querySelector(".hamp")

const atagwork = document.querySelector(".aTagWork")
const atagCommunity = document.querySelector(".aTagCommunity")
const atagResume = document.querySelector(".aTagResume")
const atagAbout = document.querySelector(".aTagAbout")
const atagContact = document.querySelector(".aTagContact")

const work = document.querySelector(".liLinks_work")
const community = document.querySelector(".liLinks_community")
const resume = document.querySelector(".liLinks_resume")
const about = document.querySelector(".liLinks_about")
const contact = document.querySelector(".liLinks_contact")

const navbar = document.querySelector(".navbar")
const darkmode = document.querySelector(".liLinks_Darkmode")
const ulDark = document.querySelector(".ulDark")
const aLinks = document.querySelectorAll(".ulLinks")
const linkone = document.querySelector(".linkone")
const black = document.querySelectorAll(".black")

const headlight = document.querySelector(".head")
const worklight = document.querySelector(".work")
const communitylight = document.querySelector(".community")
const resumelight = document.querySelector(".Resume")
const aboutmelight = document.querySelector(".about_me")
const contactlight = document.querySelector(".letTalk")

const mainContentHeader = document.querySelector(".main_content_header")

const workContaienr = document.querySelectorAll(".workContainer")

const atagFlep = document.querySelector(".atagFlep")

const fab = document.querySelectorAll(".fab")
/*
aTagWork
aTagCommunity
aTagResume
aTagAbout
aTagContact

*/
let lightmode = false
let isOpen = false
let navOpen = false
let setHamp = false

hamp.addEventListener('click',()=>{
    console.log("shit");
    const open = ()=>{
        isOpen=true
        hamp.classList.add("hamp_links_open")
        ulbar.classList.add("ulbarOpen")
    }
    const close = ()=>{
        isOpen=false
        hamp.classList.remove("hamp_links_open")
        ulbar.classList.remove("ulbarOpen")
    }
    if(!isOpen){
        open();
    }else{
        close();
    }
})



work.addEventListener('click',()=>{
    isOpen=false
    ulbar.classList.remove("ulbarOpen")
    hamp.classList.remove("hamp_links_open")
    if(!lightmode){
        atagwork.style.color = "#9104FF"
        atagCommunity.style.color = "#fff"
        atagResume.style.color = "#fff"
        atagContact.style.color = "#fff"
        atagAbout.style.color = "#fff"
    }else{
        atagwork.style.color = "#9104FF"
        atagCommunity.style.color = "#111"
        atagResume.style.color = "#111"
        atagContact.style.color = "#111"
        atagAbout.style.color = "#111"
    }
})
community.addEventListener('click',()=>{
    isOpen=false
    ulbar.classList.remove("ulbarOpen")
    hamp.classList.remove("hamp_links_open")
    if(!lightmode){
        atagCommunity.style.color = "#19F8CF"
        atagResume.style.color = "#fff"
        atagContact.style.color = "#fff"
        atagAbout.style.color = "#fff"
        atagwork.style.color = "#fff"
    }else{
        atagCommunity.style.color = "#19F8CF"
        atagResume.style.color = "#111"
        atagContact.style.color = "#111"
        atagAbout.style.color = "#111"
        atagwork.style.color = "#111"
    }
})
resume.addEventListener('click',()=>{
    isOpen=false
    ulbar.classList.remove("ulbarOpen")
    hamp.classList.remove("hamp_links_open")
    if(!lightmode){
        atagResume.style.color = "#F819B9"
        atagCommunity.style.color = "#fff"
        atagContact.style.color = "#fff"
        atagAbout.style.color = "#fff"
        atagwork.style.color = "#fff"
    }else{
        atagResume.style.color = "#F819B9"
        atagCommunity.style.color = "#111"
        atagContact.style.color = "#111"
        atagAbout.style.color = "#111"
        atagwork.style.color = "#111"
    }
})
about.addEventListener('click',()=>{
    isOpen=false
    ulbar.classList.remove("ulbarOpen")
    hamp.classList.remove("hamp_links_open")
    if(!lightmode){
        atagCommunity.style.color = "#fff"
        atagResume.style.color = "#fff"
        atagContact.style.color = "#fff"
        atagAbout.style.color = "#F86919"
        atagwork.style.color = "#fff"
    }else{
        atagCommunity.style.color = "#111"
        atagResume.style.color = "#111"
        atagContact.style.color = "#111"
        atagAbout.style.color = "#F86919"
        atagwork.style.color = "#111"
    }
})
contact.addEventListener('click',()=>{
    isOpen=false
    ulbar.classList.remove("ulbarOpen")
    hamp.classList.remove("hamp_links_open")
    if(!lightmode){
        atagCommunity.style.color = "#fff"
        atagResume.style.color = "#fff"
        atagContact.style.color = "lightgreen"
        atagAbout.style.color = "#fff"
        atagwork.style.color = "#fff"
    }else{
        atagCommunity.style.color = "#111"
        atagResume.style.color = "#111"
        atagContact.style.color = "lightgreen"
        atagAbout.style.color = "#111"
        atagwork.style.color = "#111"
    }
})

window.addEventListener("scroll",()=>{
    const nav_open = ()=>{
        navOpen=true
        navbar.classList.add("navbar_Open")
        console.log("it is open");
    }
    const nav_close = ()=>{
        navOpen=false
        navbar.classList.remove("navbar_Open")
        console.log("its closed");
    }
    if(scrollY > 0){
        nav_open();
    }else{
        nav_close();
    }
    if(scrollY <= 400){
        if(!lightmode){
            atagwork.style.color = "#fff"
            atagCommunity.style.color = "#fff"
            atagResume.style.color = "#fff"
            atagContact.style.color = "#fff"
            atagAbout.style.color = "#fff"
        }else{
            atagwork.style.color = "#111"
            atagCommunity.style.color = "#111"
            atagResume.style.color = "#111"
            atagContact.style.color = "#111"
            atagAbout.style.color = "#111"
        }
    }
    if(scrollY >= 413 && scrollY <= 1100){
        if(!lightmode){
            atagwork.style.color = "#9104FF"
            atagCommunity.style.color = "#fff"
            atagResume.style.color = "#fff"
            atagContact.style.color = "#fff"
            atagAbout.style.color = "#fff"
        }else{
            atagwork.style.color = "#9104FF"
            atagCommunity.style.color = "#111"
            atagResume.style.color = "#111"
            atagContact.style.color = "#111"
            atagAbout.style.color = "#111"
        }
    }else if(scrollY >= 1143 && scrollY <= 1800){
        if(!lightmode){
            atagCommunity.style.color = "#19F8CF"
            atagResume.style.color = "#fff"
            atagContact.style.color = "#fff"
            atagAbout.style.color = "#fff"
            atagwork.style.color = "#fff"
        }else{
            atagCommunity.style.color = "#19F8CF"
            atagResume.style.color = "#111"
            atagContact.style.color = "#111"
            atagAbout.style.color = "#111"
            atagwork.style.color = "#111"
        }
    }else if(scrollY >= 2400 && scrollY <= 3250){
        if(!lightmode){
            atagResume.style.color = "#F819B9"
            atagCommunity.style.color = "#fff"
            atagContact.style.color = "#fff"
            atagAbout.style.color = "#fff"
            atagwork.style.color = "#fff"
        }else{
            atagResume.style.color = "#F819B9"
            atagCommunity.style.color = "#111"
            atagContact.style.color = "#111"
            atagAbout.style.color = "#111"
            atagwork.style.color = "#111"
        }
    }else if(scrollY >= 3250 && scrollY <= 4160){
        if(!lightmode){
            atagCommunity.style.color = "#fff"
            atagResume.style.color = "#fff"
            atagContact.style.color = "#fff"
            atagAbout.style.color = "#F86919"
            atagwork.style.color = "#fff"
        }else{
            atagCommunity.style.color = "#111"
            atagResume.style.color = "#111"
            atagContact.style.color = "#111"
            atagAbout.style.color = "#F86919"
            atagwork.style.color = "#111"
        }
    }else if(scrollY >= 4162){
        if(!lightmode){
            atagCommunity.style.color = "#fff"
            atagResume.style.color = "#fff"
            atagContact.style.color = "lightgreen"
            atagAbout.style.color = "#fff"
            atagwork.style.color = "#fff"
        }else{
            atagCommunity.style.color = "#111"
            atagResume.style.color = "#111"
            atagContact.style.color = "lightgreen"
            atagAbout.style.color = "#111"
            atagwork.style.color = "#111"
        }
    }
})
//Dark mode of the website
    
    darkmode.addEventListener('click',()=>{
        isOpen=false
        ulbar.classList.remove("ulbarOpen")
        hamp.classList.remove("hamp_links_open")

        const lightMode = ()=>{
            lightmode=true
            headlight.style.background = "#fff"
            communitylight.style.background = "#fff"
            worklight.style.background = "#fff"
            resumelight.style.background = "#fff"
            aboutmelight.style.background = "#fff"
            contactlight.style.background = "#fff"
            ulbar.style.background = "#fff"
            aLinks.forEach((e)=>{
                e.style.color = "#111"
            })
            black.forEach((b)=>{
                b.style.color="#111"
            })
            navbar.style.background="#fff"
            linkone.style.background = "#fff"
            ulDark.classList.remove("fa-moon")
            ulDark.classList.add("fa-sun")
            fab.forEach((singleFab)=>{
                singleFab.style.color = "#111"
            })
        }
        const darkmode = ()=>{
            lightmode=false
            headlight.style.background = "#111"
            communitylight.style.background = "#111"
            worklight.style.background = "#111"
            resumelight.style.background = "#111"
            aboutmelight.style.background = "#111"
            contactlight.style.background = "#111"
            ulbar.style.background = "#111"
            aLinks.forEach((e)=>{
                e.style.color = "#fff"
            })
            black.forEach((b)=>{
                b.style.color="#fff"
            })
            navbar.style.background="#111"
            linkone.style.background = "#111"
            ulDark.classList.remove("fa-sun")
            ulDark.classList.add("fa-moon")
            fab.forEach((singleFab)=>{
                singleFab.style.color = "#fff"
            })
        }
        if(!lightmode){
            lightMode();
        }else{
            darkmode();
        }
    })
workContaienr.forEach((singleWrokcontaienr)=>{
    console.log(singleWrokcontaienr);
    singleWrokcontaienr.addEventListener("mouseover",()=>{
        console.log('fuck');
        singleWrokcontaienr.classList.add("workContainerHover")
    })
    singleWrokcontaienr.addEventListener("mouseout",()=>{
        singleWrokcontaienr.classList.remove("workContainerHover")
    } )
})