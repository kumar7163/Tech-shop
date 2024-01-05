const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "Keep the noise out, or in. You choose.",
        heroImage: "/images/products/jbl660nc-1.png",
        images: [
            "/images/products/jbl660nc-1.png",
            "/images/products/jbl660nc-2.png",
            "/images/products/jbl660nc-3.png",
            "/images/products/jbl660nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 660NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "/images/products/boat518-1.png",
            "/images/products/boat518-2.png",
            "/images/products/boat518-3.png",
            "/images/products/boat518-4.png"
        ],
        brand: "boAt",
        title: "boAt Rockerz 518",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "/images/products/boat131-3.png",
        images: [
            "/images/products/boat131-1.png",
            "/images/products/boat131-2.png",
            "/images/products/boat131-3.png",
            "/images/products/boat131-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 131",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "/images/products/boat110-1.png",
            "/images/products/boat110-2.png",
            "/images/products/boat110-3.png",
            "/images/products/boat110-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 110",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "/images/products/boat410-1.png",
            "/images/products/boat410-2.png",
            "/images/products/boat410-3.png",
            "/images/products/boat410-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 410",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "/images/products/jbl200bt-1.png",
            "/images/products/jbl200bt-2.png",
            "/images/products/jbl200bt-3.png",
            "/images/products/jbl200bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 200BT",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Give your favourite music a boost.",
        heroImage: "/images/products/sonyxb910n-1.png",
        images: [
            "/images/products/sonyxb910n-1.png",
            "/images/products/sonyxb910n-2.png",
            "/images/products/sonyxb910n-3.png",
            "/images/products/sonyxb910n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-XB910N",
        info: "Wireless Over-Ear Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "/images/products/jbl760nc-1.png",
            "/images/products/jbl760nc-2.png",
            "/images/products/jbl760nc-3.png",
            "/images/products/jbl760nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 760NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "/images/products/boat255r-1.png",
            "/images/products/boat255r-2.png",
            "/images/products/boat255r-3.png",
            "/images/products/boat255r-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 255",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "/images/products/jbl100-1.png",
            "/images/products/jbl100-2.png",
            "/images/products/jbl100-3.png",
            "/images/products/jbl100-4.png",
        ],
        brand: "JBL",
        title: "JBL Wave 100",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "/images/products/sony1000xm4-1.png",
            "/images/products/sony1000xm4-2.png",
            "/images/products/sony1000xm4-3.png",
            "/images/products/sony1000xm4-4.png"
        ],
        brand: "Sony",
        title: "Sony WF-1000XM4",
        info: "Wireless In-Ear NC Headphones",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "/images/products/boat228-1.png",
            "/images/products/boat228-2.png",
            "/images/products/boat228-3.png",
            "/images/products/boat228-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 228",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "/images/products/jbl-endu-1.png",
            "/images/products/jbl-endu-2.png",
            "/images/products/jbl-endu-3.png",
            "/images/products/jbl-endu-4.png",
        ],
        brand: "JBL",
        title: "JBL Endurance Run Sports",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "/images/products/boat203-1.png",
            "/images/products/boat203-2.png",
            "/images/products/boat203-3.png",
            "/images/products/boat203-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 203",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "/images/products/sonych710n-1.png",
            "/images/products/sonych710n-2.png",
            "/images/products/sonych710n-3.png",
            "/images/products/sonych710n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-CH710N",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "/images/products/jbl500bt-1.png",
            "/images/products/jbl500bt-2.png",
            "/images/products/jbl500bt-3.png",
            "/images/products/jbl500bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 500BT",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "/images/products/boat381-1.png",
            "/images/products/boat381-2.png",
            "/images/products/boat381-3.png",
            "/images/products/boat381-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 381",
        info: "In-Ear Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "/images/products/sony-ex14ap-1.png",
            "/images/products/sony-ex14ap-2.png",
            "/images/products/sony-ex14ap-3.png",
            "/images/products/sony-ex14ap-4.png"
        ],
        brand: "Sony",
        title: "Sony MDR-EX14AP",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "/images/products/sonyxb400-1.png",
            "/images/products/sonyxb400-2.png",
            "/images/products/sonyxb400-3.png",
            "/images/products/sonyxb400-4.png",
        ],
        brand: "Sony",
        title: "Sony WI-XB400",
        info: "Wireless Extra Bass In-Ear Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
];

const cart = document.getElementById("cart");
const btnAll = document.getElementById("all-btn");
const btnHeadphones = document.getElementById("headphones-btn");
const btnEarbuds = document.getElementById("earbuds-btn");
const btnEarphones = document.getElementById("earphones-btn");
const btnNeckbands = document.getElementById("neckbands-btn");
const all = document.getElementById("all");
const headphones = document.getElementById("headphones");
const earbuds = document.getElementById("earbuds");
const earphones = document.getElementById("earphones");
const neckbands = document.getElementById("neckbands");

(()=>{
    const temp = JSON.parse(localStorage.getItem("cartData"));
    if(!(temp === null)){

    cart.innerHTML = `<a href="./cart.html"><i class="bi bi-cart"></i></a>${temp.length}`;
    cart.style.color = "red";
    cart.style.fontWeight = "bolder";
    }
})();

// Carousel 

// const img = document.getElementById("carousel-img");
// const span = document.getElementById("carousel-txt");
// const shopNowBtn = document.getElementById('shop-now');


// const image = [];
// const text = [];
// const button = [];

// productsData.forEach((item, index)=>{
//     image[index] = `<img src='./JavaScript${item?.images[0]}'>`;
//     text[index] = item?.info;
//     button[index] = `<a class="btn btn-primary" href="./productinfo.html" type='${item.id}' onclick="productInfo(this)">Shop Now</a>`; 
// });

// let i = 0;
// function slider(){
    
//     img.innerHTML = image[i];
//     span.innerHTML = text[i];
//     shopNowBtn.innerHTML = button[i];
    
//     if(i<(productsData.length)-1){
//         i++;
//     }else{
//         i = 0;
//     }

// }
// slider();

// setInterval(slider, 2000);


function productInfo(a){
    localStorage.setItem("productId", a.type);
}

//Initial button settings
    headphones.style.display = "none";
    earbuds.style.display = "none";
    earphones.style.display = "none";
    neckbands.style.display = "none";

//All button

btnAll.style.backgroundColor = "red";
btnAll.addEventListener('click',()=>{
    all.style.display = "grid";
    btnAll.style.backgroundColor = "red";

    headphones.style.display = "none";
    earbuds.style.display = "none";
    earphones.style.display = "none";
    neckbands.style.display = "none";
    
    btnHeadphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarbuds.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnNeckbands.style.backgroundColor = "rgb(54, 52, 52)";
},false);

let productAll = "";
for(i=0; i<productsData.length; i++){
    productAll += `<div align="center" style="border:1px solid white;">
    <a class="pddisplay" href="./productinfo.html" type=${productsData[i].id} onclick="productInfo(this)">
 <img style="height:200px; width:150px;" src="./JavaScript${productsData[i].images[0]}"/>
 <p style="color:orange;">${productsData[i].rateCount} <i style="color:orange;" class="bi bi-star-fill"></i></p>
 <h4>${productsData[i].title}</h4>
 <h6>${productsData[i].info}</h6></a>
 <span style="font-weight:bold;">Rs ${productsData[i].finalPrice}  <span style="text-decoration:line-through;">Rs${productsData[i].originalPrice}</span></span><br/>
 <button class="btn btn-danger" onclick="addToCart(this)" value=${productsData[i].id}>Add to Cart</button>
 </div>`;
}

all.innerHTML = productAll;

// Headphones button


btnHeadphones.addEventListener('click',()=>{
    headphones.style.display = "grid";
    btnHeadphones.style.backgroundColor = "red";

    all.style.display = "none";
    earbuds.style.display = "none";
    earphones.style.display = "none";
    neckbands.style.display = "none";

    btnAll.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarbuds.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnNeckbands.style.backgroundColor = "rgb(54, 52, 52)";
    
},false);

let productHeadphones = "";
for(i=0; i<productsData.length; i++){
    if(productsData[i].category==="Headphones"){
    productHeadphones += `<div align="center" style="border:1px solid white;">
    <a class="pddisplay" href="./productinfo.html" type=${productsData[i].id} onclick="productInfo(this)">
 <img style="height:200px; width:150px;" src="./JavaScript${productsData[i].images[0]}"/>
 <p style="color:orange;">${productsData[i].rateCount} <i style="color:orange;" class="bi bi-star-fill"></i></p>
 <h4>${productsData[i].title}</h4>
 <h6>${productsData[i].info}</h6></a>
 <span style="font-weight:bold;">Rs ${productsData[i].finalPrice}  <span style="text-decoration:line-through;">Rs${productsData[i].originalPrice}</span></span><br/>
 <button class="btn btn-danger" onclick="addToCart(this)" value=${productsData[i].id}>Add to Cart</button>
 </div>`;
    }
}

headphones.innerHTML = productHeadphones;


// Earbuds button


btnEarbuds.addEventListener('click',()=>{
    earbuds.style.display = "grid";
    btnEarbuds.style.backgroundColor = "red";

    all.style.display = "none";
    headphones.style.display = "none";
    earphones.style.display = "none";
    neckbands.style.display = "none";

    btnAll.style.backgroundColor = "rgb(54, 52, 52)";
    btnHeadphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnNeckbands.style.backgroundColor = "rgb(54, 52, 52)";
    
}, false);

let productEarbuds = "";
for(i=0; i<productsData.length; i++){
    if(productsData[i].category==="Earbuds"){
    productEarbuds += `<div align="center" style="border:1px solid white;">
    <a class="pddisplay" href="./productinfo.html" type=${productsData[i].id} onclick="productInfo(this)">
 <img style="height:200px; width:150px;" src="./JavaScript${productsData[i].images[0]}"/>
 <p style="color:orange;">${productsData[i].rateCount} <i style="color:orange;" class="bi bi-star-fill"></i></p>
 <h4>${productsData[i].title}</h4>
 <h6>${productsData[i].info}</h6></a>
 <span style="font-weight:bold;">Rs ${productsData[i].finalPrice}  <span style="text-decoration:line-through;">Rs${productsData[i].originalPrice}</span></span><br/>
 <button class="btn btn-danger" onclick="addToCart(this)" value=${productsData[i].id}>Add to Cart</button>
 </div>`;
    }
}

earbuds.innerHTML = productEarbuds;


// Earphones button


btnEarphones.addEventListener('click',()=>{
    earphones.style.display = "grid";
    btnEarphones.style.backgroundColor = "red";

    all.style.display = "none";
    headphones.style.display = "none";
    earbuds.style.display = "none";
    neckbands.style.display = "none";

    btnAll.style.backgroundColor = "rgb(54, 52, 52)";
    btnHeadphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarbuds.style.backgroundColor = "rgb(54, 52, 52)";
    btnNeckbands.style.backgroundColor = "rgb(54, 52, 52)";
    
},false);

let productEarphones = "";
for(i=0; i<productsData.length; i++){
    if(productsData[i].category==="Earphones"){
    productEarphones += `<div align="center" style="border:1px solid white;">
    <a class="pddisplay" href="./productinfo.html" type=${productsData[i].id} onclick="productInfo(this)">
 <img style="height:200px; width:150px;" src="./JavaScript${productsData[i].images[0]}"/>
 <p style="color:orange;">${productsData[i].rateCount} <i style="color:orange;" class="bi bi-star-fill"></i></p>
 <h4>${productsData[i].title}</h4>
 <h6>${productsData[i].info}</h6><a>
 <span style="font-weight:bold;">Rs ${productsData[i].finalPrice}  <span style="text-decoration:line-through;">Rs${productsData[i].originalPrice}</span></span><br/>
 <button class="btn btn-danger" onclick="addToCart(this)" value=${productsData[i].id}>Add to Cart</button>
 </div>`;
    }
}

earphones.innerHTML = productEarphones;


// Neckbands button


btnNeckbands.addEventListener('click',()=>{
    neckbands.style.display = "grid";
    btnNeckbands.style.backgroundColor = "red";

    all.style.display = "none";
    headphones.style.display = "none";
    earbuds.style.display = "none";
    earphones.style.display = "none";

    btnAll.style.backgroundColor = "rgb(54, 52, 52)";
    btnHeadphones.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarbuds.style.backgroundColor = "rgb(54, 52, 52)";
    btnEarphones.style.backgroundColor = "rgb(54, 52, 52)";
    
},false);

let productNeckbands = "";
for(i=0; i<productsData.length; i++){
    if(productsData[i].category==="Neckbands"){
        productNeckbands += `<div align="center" style="border:1px solid white;">
        <a class="pddisplay" href="./productinfo.html" type=${productsData[i].id} onclick="productInfo(this)">
 <img style="height:200px; width:150px;" src="./JavaScript${productsData[i].images[0]}"/>
 <p style="color:orange;">${productsData[i].rateCount} <i style="color:orange;" class="bi bi-star-fill"></i></p>
 <h4>${productsData[i].title}</h4>
 <h6>${productsData[i].info}</h6></a>
 <span style="font-weight:bold;">Rs ${productsData[i].finalPrice}  <span style="text-decoration:line-through;">Rs${productsData[i].originalPrice}</span></span><br/>
 <button class="btn btn-danger" onclick="addToCart(this)" value=${productsData[i].id}>Add to Cart</button>
 </div>`;
    }
}

neckbands.innerHTML = productNeckbands;


const cartProductId = [];

function addToCart(btn){
    if(!cartProductId.includes(btn.value)){
    cartProductId.push(btn.value);
    cart.innerHTML = `<a href="./cart.html"><i class="bi bi-cart"></i></a>${cartProductId.length}`;
    cart.style.color = "red"; 
    cart.style.fontWeight = "bold"; 
    btn.setAttribute('class', "btn btn-success");
    btn.innerHTML = "Added";
    }

    const temp = JSON.parse(localStorage.getItem("cartData"));
    if(temp === null){
    
        localStorage.setItem("cartData", JSON.stringify(cartProductId));
    }else{
        localStorage.setItem("cartData", JSON.stringify([...temp, ...cartProductId]));
    }

    
}



