const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuLinks = document.querySelector(".menu");

openMenu.addEventListener('click', () => {
    menuLinks.classList.toggle("active");
});

closeMenu.addEventListener('click', () => {
    menuLinks.classList.toggle("active");
});


// testimonials part
const testimonies = [
    {
        id: 0,
        img:"../IMAGES/i.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quasi enim consectetur adipisicing elit.",
        name: "Maxy, London",
    },
    {
        id: 1,
        img:"./IMAGES/two.jpeg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quasi enim consectetur adipisicing elit.",
        name: "Janet, UK",
    },
    {
        id: 2,
        img:"./IMAGES/three.webp",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quasi enim consectetur adipisicing elit.",
        name: "Joseph, USA",
    }
];

let testimoniesIndex = 0; 
window.addEventListener('DOMContentLoaded', () =>{
    showTestimonies(testimoniesIndex);
    document.querySelector('.next-btn').addEventListener('click', showNextTestimony);
    document.querySelector('.prev-btn').addEventListener('click', showPrevTestimony);
});

const theTestimonies = document.querySelector(".testimonial-container")


function showTestimonies(index) {
   var testimony = testimonies[index];
   theTestimonies.innerHTML=`
   <div class="testimonies">
                <img src="${testimony.img}" alt="Image of a person">
                <p>${testimony.info}</p>
                <p>${testimony.name}</p>
            </div>`
};

function showNextTestimony() {
 testimoniesIndex = (testimoniesIndex + 1) % testimonies.length;
 showTestimonies(testimoniesIndex)
}

function showPrevTestimony() {
    testimoniesIndex = (testimoniesIndex - 1 + testimonies.length) % testimonies.length;
    showTestimonies(testimoniesIndex);
}
