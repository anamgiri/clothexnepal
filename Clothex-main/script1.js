let products ={
    data: [
      {
        productName: "No Hunger Tshirt",
        category: "Tshirts",
        price: "Rs 700",
        image:
          "https://hungernomore.ph/wp-content/uploads/2023/08/HUNGER-NO-MORE-T-SHIRT-DESIGN-GREEN-SLEEVE-FRONT.jpg",
      },
      {
        productName: "Mythical Dragon Tshirt",
        category: "Tshirts",
        price: "Rs 700",
        image:
          "https://graphics-pro.com/wp-content/uploads/2022/01/CorelDRAW-Graphics-Suite_T-Shirt-Design.png",
      },
      {
        productName: "Keep Calm and Eat Tshirt",
        category: "Tshirts",
        price: "Rs 700",
        image:
          "https://alprints.com/wp-content/uploads/2018/03/Eat-Pizza-Tshirtt.jpg",
      },
      {
        productName: "Women's Hoddie",
        category: "Hoddies",
        price: "Rs 1800",
        image:
          "https://m.media-amazon.com/images/I/61TuJysnG7L._AC_UY1000_.jpg",
      },
    ],
};
for (let i of products.data) {
    //   console.log(i);
  
    //Create Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
  
    //container
    let container = document.createElement("div");
    container.classList.add("container");
  
    card.innerHTML = `
      <div class="image-container"><img src="${i.image}"></div>
      <div><i class='bx bx-heart' id="heart-icon" ></i></div>
      <div class="container">
           <div>
              <h5 class="product-name">${i.productName.toUpperCase()}</h5>
              <h6>${i.price}</h6>
          </div>
          <button class="cart-btn"> <a href="contact.html">Buy this</a></button>
      </div>
      `;
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
  
    //loop through all cards
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      // console.log(index + " Index");
  
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  
  // heart btn click
  
  let heartBtns = document.querySelectorAll("#heart-icon");
  heartBtns.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("bxs-heart");
    });
  });
 
