

let mainContainer = document.querySelector(".cardContainer");
cardData();
let cart = document.querySelector(".img");
function cardData() {
  const products = [
    {
      name: "Cera Facewash",
      image:
        "https://i.pinimg.com/736x/fc/ab/51/fcab51f839347978784efc25fbbc03ba.jpg",
      description:
        "Gentle, hydrating, non-comedogenic, refreshing, soothing, nourishing, safe, effective, balanced, calming.",
      price: 1099,
      buttonLabel: "Add",
    },
    {
      name: "Huron Facewash",
      image:
        "https://imgs.search.brave.com/LOrUOJOL8HQxutC14S4IE-VjUS9pXxwdKMggyAB1_JY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxVDhQOUZiSUdM/LmpwZw",
      description:
        "Deep-cleansing and revitalizing facewash, perfect for everyday use. Infused with natural ingredients for smooth and healthy skin.",
      price: 1399,
      buttonLabel: "Add",
    },
    {
      name: "Dr. Sam Flawless Cleanser",
      image:
        "https://imgs.search.brave.com/2FkBGKdJet-f_hZioY4YLEEhTzuJS4Uo5MZ8YIHulQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjc3/NTE1MjY4LWJlc3Qt/ZmFjZS13YXNoLTE2/Nzc1MTUyMTUuanBn/P2Nyb3A9MS4wMHh3/OjAuODU1eGg7MCww/LjA2OTB4aCZyZXNp/emU9OTgwOio",
      description:
        "A flawless cleanser designed to remove impurities and promote a radiant complexion. Gentle on all skin types.",
      price: 1899,
      buttonLabel: "Add",
    },
  ];

  products.forEach((val, indx) => {
    mainContainer.innerHTML += `<div class="card" id = ${indx}>

              <img
                src="${val.image}"
                alt=""
              />
     <h3 class= "name"> ${val.name} </h3>
              <p class="about">
                ${val.description}
              </p>
   
              <div class="addPrice">
                <span class="price"> ₹${val.price}</span>
                <button class="btn">Add </button>
              </div>
    
              <h3 class="itemAdd" id = ${indx} ></h3>
            </div>`;
  });
}

let numCount = 0;
let productCount = {};
let itemAdd = document.querySelectorAll(".itemAdd");
let btn = document.querySelectorAll(".card");
let count = document.querySelector(".count");
btn.forEach((val, indx) => {
    productCount[indx] = 1;
  val.addEventListener("click", (event) => {
    if (event.target.innerText === "Add") {
      if (numCount < 10) {
        numCount++;
        count.innerHTML = numCount;
        itemAdd[indx].innerHTML = `${productCount[indx]++} Item is Added in Cart`;
       
      } else if (numCount === 10) {
        alert("You Reach Max Limit To Add Item In Cart");
      }
    }
  });
});




let sizeCheck = document.querySelector(".size");
let cards = document.querySelectorAll(".card");
const clickCounts = Array(cards.length).fill(0);
let cardContainer = document.querySelector(".cardContainer");
let btn2 = document.querySelector(".img");
let counting = new Array(cards.length).fill(0)
let counting2 = new Array(cards.length).fill(0)
let count3 = 3;
cards.forEach((val, i) => {
  val.addEventListener("click", (event) => {
    clickCounts[i]++;
    if (event.target.innerText === "Add") {
      let data2 = JSON.parse(localStorage.getItem("cartDetail")) ?? [];

      data2[val.id] = {
        id: val.id,
        clicked: true,
        imgUrl: val.querySelector("img").src,
        discription: val.querySelector(".about").innerText,
        price: val.querySelector(".price").innerHTML,
        name: val.querySelector(".name").innerText,
        itemadd: val.querySelector(".itemAdd").innerText,
      };

      localStorage.setItem("cartDetail", JSON.stringify(data2));
      counting2[i]++
      let cal = counting2[i]
     let getPrice = data2[i].price
     let getOgPrice = getPrice.split("").splice(2).join("")
     let riyal = cal*getOgPrice
      
      if (counting[i] < 1) {
        sizeCheck.innerHTML += ` <div class="cartProduct">
  <img src= ${data2[i].imgUrl} alt="">

  <div class="containinfo">

  <h3>${data2[i].name} </h3>
    <p>${data2[i].discription}</p>
    <div class="totalPrice">
      <span class = "price1">
        ₹${riyal}
      </span>
      <div class="buttoncontainer">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  </div>
 </div>`;
        counting[i]++
      }
    }
  });
});

btn2.addEventListener("click", () => {
  sizeCheck.style.display = "block";
});
