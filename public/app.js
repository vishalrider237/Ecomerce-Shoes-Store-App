const wrapper=document.querySelector(".sliderWrapper")
const menuItems=document.querySelectorAll(".menuItem")
const products = [
    {
      id: 1,
      title: "Adidas",
      price: 2000,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Bata",
      price: 2500,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Woodland",
      price: 5000,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Campus",
      price: 4000,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Liberty",
      price: 3500,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
let choosenProducts=products[0];

const currProductImg=document.querySelector(".productImg");
const currProductTitle=document.querySelector(".productTitle");
const currProductPrice=document.querySelector(".productPrice");
const currProductColors=document.querySelectorAll(".color");
const currProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //Change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //Change the choosen products
        choosenProducts=products[index];

        //Change the text of title
        currProductTitle.textContent=choosenProducts.title;
        currProductPrice.textContent="₹"+choosenProducts.price;
        currProductImg.src=choosenProducts.colors[0].img;
         //Assiging new colors
        currProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProducts.colors[index].code;
        })
        
    });
})
currProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currProductImg.src=choosenProducts.colors[index].img;
    })
})

currProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currProductSizes.forEach((size)=>{
        size.style.backgroundColor="white";
        size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";
    })
})

const productButtom=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButtom.addEventListener("click",()=>{
  payment.style.display="flex";
})

close.addEventListener("click",()=>{
  payment.style.display="none";
})