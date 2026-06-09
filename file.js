const mobile = document.querySelector('.mobile-nav')
const menu = document.querySelector('#clickBtn')

const cardsContainer = document.querySelector('.cards-container')



const newDropsContainer = document.querySelector('.drops-cards-contaner')




let isOpen = false;
menu.addEventListener('click', function () {
  
  if (!isOpen) {
    gsap.set(mobile, { display: "flex" })
    gsap.from(".mobile-nav h3", { x: -100, opacity: 0, duration: 0.5, stagger: 0.10, ease: "power2.out" })
    menu.innerHTML = '<i class="ri-close-large-line"></i>'
    isOpen = true
  } else {
    gsap.to(".mobile-nav h3", {
      x: -400,
      opacity: 0,
      duration: 0.5,
      stagger: 0.10,
      ease: "power2.out",
      onComplete: function () {
        gsap.set(mobile, { display: "none" })

        // esline pe ho kya raha hai
        gsap.set(".mobile-nav h3", { x: 0, opacity: 1 })
      }
    })

    menu.innerHTML = '<i class="ri-menu-line"></i>'
    isOpen = false
  }
})



const rawbloxData = [
  {
    tag: "United Drops, Maximum Impact",
    description: "We release exclusive, small-batch collections to keep your style fresh and unique—once it's gone, it's gone.",
    images: "./images/img1.png"
  },
  {
    tag: "Built for the Streets",
    description: "Durable, high-quality fabrics and expert craftsmanship ensure every piece can handle the city grind while keeping you comfortable.",
    images: "./images/img2.png"
  },
  {
    tag: "Art Meets Attitude",
    description: "Bold graphics, edgy typography, and urban-inspired designs turn every outfit into a statement of self-expression.",
    images: "./images/img3.avif"
  },
  {
    tag: "Future-Ready Fashion",
    description: "From oversized silhouettes to innovative materials, we push the boundaries of modern streetwear while staying true to the culture.",
    images: "./images/img4.avif"
  },
  {
    tag: "Community-Driven Culture",
    description: "More than just a brand, we're a movement—connecting creatives, skaters, and trendsetters who definehe streets.",
    images: "images/img5.png"
  }
];

const headings = [
  { heading: "LIMITED DROPS, MAXIMUM IMPACT" },
  { heading: "BUILT FOR THE STREETS" },
  { heading: "ART MEETS ATTITUDE" },
  { heading: "FUTURE-READY FASHION" },
  { heading: "COMMUNITY-DRIVEN CULTURE" }
]

const stableNavbar = document.querySelector('.stable-navbar')

headings.forEach(function (elem, index) {
  stableNavbar.innerHTML += `<div class="navbar-content">
                    <h1>0${index + 1}</h1>
                    <p>${elem.heading}</p>
                </div>`
})
rawbloxData.forEach(function (elem, index) {

  cardsContainer.innerHTML += ` <div class="cards" id="${index}">
                <img src="${elem.images}" alt="">
                <div class="text-container">
                    <h1>${elem.tag}</h1>
                    <p>${elem.description}</p>
                    <h3 id="shop">Shop Now <i class="ri-arrow-right-long-fill"></i> </h3>
                </div>
              </div>`
})

function animateCardsText() {
  const cards = document.querySelectorAll('.cards')
  console.log(stableNavbar)
  
  let currentCard = 0;
  console.log(cards[currentCard])

  function animateText() {
    const getImage = cards[currentCard].querySelector('img')
    const getText = cards[currentCard].querySelector('.text-container h1')
    const getPara = cards[currentCard].querySelector('.text-container p')
    const shopButton = cards[currentCard].querySelector('.text-container #shop')

    gsap.from(getImage, {
      scale: 0.7,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    gsap.from([getText, getPara, shopButton], {
      y: 50,
      opacity: 0,
      delay: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: "power1.out"
    })
  }

  cards.forEach(function (cards) {
    cards.style.display = "none"
  })

  cards[currentCard].style.display = "block"
  gsap.from(cards[currentCard], {
    opacity: 0,
    duration: 2,

  })
  animateText()

  setInterval(function () {
    console.log(currentCard, 'BEFORE NONE')
    cards[currentCard].style.display = "none"
    currentCard++


    if (currentCard >= cards.length) {
      currentCard = 0
    }
    cards[currentCard].style.display = "block"
    gsap.from(cards[currentCard], {
      opacity: 0,
      duration: 2,

    })
    animateText()

    console.log(currentCard, 'AFTER BLOCK')
  }, 3000)
}

animateCardsText()








/**
 * Code for new drops 
 */

const products = [
  {
    title: "SHADOW DRIP",
    description: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    price: 89,
    originalPrice: 120,
    isNew: true,
    image: "./newDrops/imageOne.jpg"
  },
  {
    title: "URBAN PHANTOM",
    description: "Urban Phantom - A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
    price: 89,
    originalPrice: 120,
    isNew: true,
    image: "./newDrops/imageTwo.jpg"
  },
  {
    title: "NEON REBELLION",
    description: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
    price: 89,
    originalPrice: 120,
    isNew: true,
    image: "./newDrops/imageThree.jpg"
  }
];


products.forEach(function(elem, index){
  newDropsContainer.innerHTML+=` <div class="cards-drops" id=${index}>
                    <img src="${elem.image}" alt="">
                    <h1 class="title">${elem.title}</h1>
                    <p>${elem.description}</p>
                    <div class="rate-container">
                        <h2>$${elem.price}</h2>
                        <h2 class="original_price">$${elem.originalPrice}</h2>
                    </div>
                    <h3 class="new">${elem.isNew?"NEW":""}</h3>
                </div>`
})











/**
 * Code for ship Container
 */

const shipCards = [
  {
    
    "image": "./Ship/imageOne.avif"
  },
  {
    
    "title": "BUILT BY THE STREETS, MADE FOR YOU",
    "description": "From the streets to your style our journey is all about self-expression and rebellion. Join the movement.",
    "buttonText": "Read our story"
  },
  {
    
    "title": "ELEVATE YOUR STREET GAME",
    "description": "From bold graphics to everyday essentials, explore our latest drops and signature pieces designed for the culture.",
    "buttonText": "Shop collections"
  },
  {
    "image": "./Ship/imageTwo.avif"
  }
]

const shipSection = document.querySelector('.ship-section-cards')

shipCards.forEach(function(elem){
  const cards = document.createElement('div')
  cards.classList.add('ship-cards')

  if(elem.image){
    const createImage = document.createElement('img')
    createImage.src = elem.image
    cards.appendChild(createImage)
  }

  if(elem.title){
    const createTitle = document.createElement('h1')
    createTitle.textContent = elem.title
    cards.appendChild(createTitle)
  }
  if(elem.description){
    const createDesc = document.createElement('p')
    createDesc.textContent = elem.description
    cards.appendChild(createDesc)
  }
  if(elem.buttonText){
    const createButton = document.createElement('h4')
    createButton.innerHTML = elem.buttonText+'<i class="ri-arrow-right-long-line"></i>'
    cards.appendChild(createButton)
  }


  shipSection.appendChild(cards)

  
})


/**
 * featured drops section logic
 * 
 */

const featuredDropsDiv = document.querySelector('.featured-drop-cards-container')

const featuredDrops = [
  {
    title: "OVERSIZED CROP TEE",
    description:
      "A relaxed-fit crop tee crafted for everyday comfort. Designed with premium cotton and a modern silhouette for effortless style.",
    image: "./featuredDrops/image1.avif"
  },

  {
    title: "URBAN BOMBER JACKET",
    description:
      "Lightweight yet durable, this bomber jacket blends streetwear aesthetics with all-day comfort. Perfect for layering in any season.",
    image: "./featuredDrops/image2.avif"
  },

  {
    title: "ESSENTIAL SUMMER FIT",
    description:
      "A breathable and versatile outfit designed for warm-weather days. Minimal design meets maximum comfort.",
    image: "./featuredDrops/image3.avif"
  },

  {
    title: "SIGNATURE WHITE TEE",
    description:
      "Clean, timeless, and easy to style. Made from ultra-soft cotton with a relaxed fit that works for every occasion.",
   image: "./featuredDrops/image4.avif"
  },

  {
    title: "MIDNIGHT STREET TEE",
    description:
      "Bold, understated, and built for everyday wear. Features premium fabric and a modern streetwear-inspired fit.",
     image: "./featuredDrops/image5.avif"
  }
];

featuredDrops.forEach(function(elem, index){
  featuredDropsDiv.innerHTML+=`<div class="featured-cards" id="${index}">
                    <img src="${elem.image}" alt="image">
                    <div class="content">
                        <h3>${elem.title}</h3>
                        <p>${elem.description}</p>
                    </div>
                </div>`
})


/**
 * Code for hoodie container
 */

const hoodieImages = [
  {image:"./Hoodie/image1.avif"},
  {image:"./Hoodie/image2.avif"},
  {image:"./Hoodie/image3.avif"},
  {image:"./Hoodie/image4.avif"},
]

const hoodieContainer = document.querySelector('.hoodie-container')
const hoodieImage = document.querySelector('.hoodie-image-box')
console.log(hoodieImage)

hoodieImages.forEach(function(elem, index){
  hoodieContainer.innerHTML+=`<img id=${index} src="${elem.image}" alt="">`
})

hoodieContainer.addEventListener('click', function(e){
  const getImage = hoodieImages[e.target.id].image
  console.log(e.target)
  hoodieImage.src = getImage
})



/**
 * code for shop with us cards
 */

const servicesData = [
  {
    icon: "Truck",
    title: "FREE DELIVERY",
    description: "Get your streetwear fast and free, with no extra shipping costs on all orders."
  },
  {
    icon: "ShieldCheck",
    title: "100% SECURE PAYMENT",
    description: "Shop with confidence using encrypted, safe, and trusted payment methods."
  },
  {
    icon: "ArrowLeftRight",
    title: "30 DAYS RETURN",
    description: "Not the perfect fit? No worries. Return or exchange hassle-free within 30 days."
  },
  {
    icon: "HelpCircle",
    title: "24/7 SUPPORT",
    description: "Got questions? Our team is here for you anytime, anywhere."
  }
];


const shop_with_us_left = document.querySelector('.shop-with-us .left')
servicesData.forEach(function(elem){
  shop_with_us_left.innerHTML+=`<div class="shop-with-us-cards">
                    <div class="image-div">
                        <img src="./ship-with-us-icons/bus.png" alt="">
                    </div>
                    
                    <h1 class="title">${elem.title}</h1>
                    <p class="desc">${elem.description}</p>
                </div>`
})  


/**
 * code for footer section
 */

const menuItems = [
  {
    title: "Home"
  },
  {
    title: "Shop"
  },
  {
    title: "About"
  },
  {
    title: "Contact"
  },
  {
    title: "Story"
  }
];
const shopItems = [
  {
    title: "Collections"
  },
  {
    title: "New arrival"
  },
  {
    title: "Men collections"
  },
  {
    title: "Women collections"
  },
  {
    title: "Accessories"
  },
  {
    title: "Category"
  }
];
const socialItems = [
  {
    icon: '<i class="ri-linkedin-box-line"></i>',
    title: "LinkedIn"
  },
  {
    icon: '<i class="ri-instagram-line"></i>',
    title: "Instagram"
  },
  {
    icon: '<i class="ri-twitter-line"></i>',
    title: "Twitter"
  },
  {
    icon: '<i class="ri-facebook-box-line"></i>',
    title: "Facebook"
  },
];


const menuContainer = document.querySelector('.menu')
menuItems.forEach(function(elem){
  menuContainer.innerHTML+=`<h3>${elem.title}</h3>`
})

const shopContainer = document.querySelector('.shop')
shopItems.forEach(function(elem){
  shopContainer.innerHTML+=`<h3>${elem.title}</h3>`
})

const socialIconsContainer = document.querySelector('.social-icons')
socialItems.forEach(function(elem){
  socialIconsContainer.innerHTML+=` <li>
                            <h4>${elem.icon}</h4>
                            <h3>${elem.title}</h3>
                        </li>`
})