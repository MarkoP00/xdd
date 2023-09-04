//Header scroll animation

window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const navigation = document.querySelector('nav');

const classToggle = document.querySelector('.toggle');
classToggle.addEventListener('click', function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active');
})

//Section Gallery code for changing images

const mainImage = document.querySelector('#slider');
const littleImagesAll = document.querySelectorAll('.littleImg');

littleImagesAll.forEach((image)=>{
    image.addEventListener('click', ()=>{
        const littleImgSource = image.getAttribute('src');
        mainImage.setAttribute('src',littleImgSource)
    })
})

const navLinks = document.querySelectorAll('.kk');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// const sectionForScroll = document.querySelectorAll('.scrollHere');
// const navLinks = document.querySelectorAll('.nav ul li');

// navLinks.forEach((list,indexLi)=>{
//     list.addEventListener('click', (e)=>{
//         e.pereventDefault();
//         sectionForScroll.forEach((section,sectionIndex)=>{
//             if(indexLi === sectionIndex){
//                 list.scrollIntoView(section)
//             }
//         })
//     })
// })