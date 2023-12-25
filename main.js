const navmenu=document.getElementById('nav-menu'),
      navtoggle=document.getElementById('nav-toggle'),
      navclose=document.getElementById('nav-close')


if(navtoggle){
    navtoggle.addEventListener('click',()=>{
        navmenu.classList.add('show-menu')
    })
}
if(navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu')
    })
}



const navlink = document.querySelectorAll('.nav_link')


function linkAction(){
    const  navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click' ,linkAction))

function scrolHeader(){
    const header= document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrolHeader)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY>=200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)



const section =document.querySelectorAll('section[id]')


function scrollActivre(){
    const scrollY= window.pageYOffset

    section.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionsTop=current.offsetTop - 50

        sectionId = current.getAttribute('id')

        if(scrollY > sectionsTop && scrollY <= sectionsTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scrollActivre)
const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    //reset:true
}) 
sr.reveal(`.home_header , .section_title`,{delay : 600})
sr.reveal(`.home_footer`,{delay : 700})
sr.reveal(`.home_img`,{delay : 900,origin:'top'})
sr.reveal(`.sponsor_img, .products_card, .footer_logo, .footer_content, .footer_copy`,{origin:'top',interval:100})
sr.reveal(`.specs_data, .discount_animate`,{origin:'left',interval:100})
sr.reveal(`.specs_img ,.discount_img`,{origin:'right'})
sr.reveal(`.case_img`,{origin:'top'})
sr.reveal(`.case_data`)