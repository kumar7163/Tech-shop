const pId = Number(localStorage.getItem("productId"));

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

const reviewsData = [
    {
        id: 1,
        name: "Atharva Kumar",
        date: "4 Aug 2022",
        review: "Sound is awesome and as I expected, love it.",
        rateCount: 5,
    },
    {
        id: 2,
        name: "Ritika Sen",
        date: "15 July 2022",
        review: "Very good and awesome product",
        rateCount: 5,
    },
    {
        id: 3,
        name: "Bhavesh Joshi",
        date: "10 June 2022",
        review: "Super amazing product !!!",
        rateCount: 4,
    },
    {
        id: 4,
        name: "Anandi Gupta",
        date: "6 May 2022",
        review: "Great NC, sound is a bit flat",
        rateCount: 4,
    },
    {
        id: 5,
        name: "Arif Khan",
        date: "27 April 2022",
        review: "Very good but still has flaws!",
        rateCount: 3,
    },
]

const [displayProduct] = productsData.filter((item)=>{
    return item.id === pId;
}); 
const cart = document.getElementById("cart");
(()=>{
    const temp = JSON.parse(localStorage.getItem("cartData"));
    if(!(temp === null)){

    cart.innerHTML = `<a href="./cart.html"><i class="bi bi-cart"></i></a>${temp.length}`;
    cart.style.color = "red";
    }
})();
const productInformation = document.getElementById("product-information");

productInformation.innerHTML = `<div class="thumbnail-image">
<div><img src=".${displayProduct.images[0]}" alt=""></div>
<div><img src=${displayProduct.images[1]} alt=""></div>
<div><img src=${displayProduct.images[2]} alt=""></div>
<div><img src=${displayProduct.images[3]} alt=""></div>
</div>
<div>
  <img class="main-img" src=${displayProduct.images[0]} alt="">
</div>
<div class="description">
  <div>
    <h2>${displayProduct.title}</h2>
    <h4>${displayProduct.info}</h4>
    <p><span class="rating">${displayProduct.rateCount}</span>&nbsp;<i class="bi bi-star-fill rating"></i>&nbsp;|&nbsp; ${displayProduct.ratings} Ratings</p>
  </div>
  <div class="price-sec">
    <p><span class="price">Rs ${displayProduct.finalPrice} </span>&nbsp;<del>${displayProduct.originalPrice}</del></p>
    <p class="saving">You save: Rs ${displayProduct.originalPrice - displayProduct.finalPrice} ${displayProduct.quantity?"<span class='instock'>In Stock</span>":"<span class='outofstock'>Out of Stock</span>"}</p> 
    <p>(Inclusive of all taxes)</p> 
  </div>
  <div class="mt-4 offers-discount">
    <h4>Offers and Discounts</h4>
    <p class="discount"><span class="offers">No Cost EMI on Credit Card</span>&nbsp;&nbsp;<span class="offers">Pay Later & Avail Cashback</span></p>
  </div>
  <div class="mt-4">
    <button class="btn btn-danger" onclick="addToCart(this)" value=${displayProduct.id}>Add to Cart</button>
  </div>
</div>`;

let cartProductId = [];
const temp = JSON.parse(localStorage.getItem("cartData"));
if(!(temp === null)){
cartProductId = [...temp];
}

function addToCart(btn){
    if(!cartProductId.includes(btn.value)){
    cartProductId.push(btn.value);
    
    cart.style.color = "red"; 
    cart.style.fontWeight = "bold"; 
    btn.setAttribute('class', "btn btn-success");
    btn.innerHTML = "Added";
    const temp = JSON.parse(localStorage.getItem("cartData"));
    if(temp === null){

    localStorage.setItem("cartData", JSON.stringify(cartProductId));
    cart.innerHTML = `<a href="./cart.html"><i class="bi bi-cart"></i></a>${cartProductId.length}`;
    }else{
    localStorage.setItem("cartData", JSON.stringify([...temp, ...cartProductId]));
    cart.innerHTML = `<a href="./cart.html"><i class="bi bi-cart"></i></a>${[...temp, ...cartProductId].length}`;
    }
    }
    
    
}


const specifications = document.getElementById("specifications");
const overview = document.getElementById("overview");
const reviews = document.getElementById("reviews");
specifications.innerHTML = `<table>
    <tr><td>Brand</td><td>${displayProduct.brand.toUpperCase()}</td></tr>
    <tr><td>Model</td><td>${displayProduct.title}</td></tr>
    <tr><td>Generic Name</td><td>${displayProduct.category}</td></tr>
    <tr><td>Headphone Type</td><td>${displayProduct.type}</td></tr>
    <tr><td>Connectivity</td><td>${displayProduct.connectivity}</td></tr>
    <tr><td>Microphone</td><td>Yes</td></tr>
</table>`;


const specificationsButton = document.getElementById("specifications-btn");
const overviewButton = document.getElementById("overview-btn");
const reviewsButton = document.getElementById("reviews-btn");

// initial settings
    specifications.style.display = "grid";
    overview.style.display = "none";
    reviews.style.display = "none";
    specificationsButton.style.background = "red";

    // Specification button

specificationsButton.addEventListener('click', ()=>{
    specifications.style.display = "grid";
    overview.style.display = "none";
    reviews.style.display = "none";
    specificationsButton.style.background = "red";
    overviewButton.style.background = "rgb(54, 52, 52)";
    reviewsButton.style.background = "rgb(54, 52, 52)";
});

// Overview button

overviewButton.addEventListener('click', ()=>{
    specifications.style.display = "none";
    overview.style.display = "grid";
    reviews.style.display = "none";
    specificationsButton.style.background = "rgb(54, 52, 52)";
    overviewButton.style.background = "red";
    reviewsButton.style.background = "rgb(54, 52, 52)";
});

// Reviews button

reviewsButton.addEventListener('click', ()=>{
    specifications.style.display = "none";
    overview.style.display = "none";
    reviews.style.display = "grid";
    specificationsButton.style.background = "rgb(54, 52, 52)";
    overviewButton.style.background = "rgb(54, 52, 52)";
    reviewsButton.style.background = "red";
});


overview.innerHTML = `<p>
    The <b><span style="color:red">${displayProduct.title} </span> ${displayProduct.info} with fabulous sound quality </b>
    <ul>
    <li>Sound Tuned to Perfection</li>
    <li>Comfortable to Wear</li>
    <li>Long Hours Playback Time</li>
    </ul>
    Buy the <b> ${displayProduct.title} ${displayProduct.info} </b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these headphones giving you a truely awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.  
</p>`;

let userReview = "";
reviewsData.forEach((data)=>{
    userReview += `<table>
    <tr><td rowspan="2"><i class="bi bi-person-circle" style="font-size:45px;"></i></td><td>${data.name}</td></tr>
    <tr><td><span style="color:orange;">${data.rateCount} </span><i style="color:orange;" class="bi bi-star-fill"></i> | ${data.date}</td></tr>
    <tr><td colspan="2">${data.review}</td></tr>
    </table>`;
})
reviews.innerHTML = userReview;
