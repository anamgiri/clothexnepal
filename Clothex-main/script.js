// for products array

let products ={
    data: [
      {
        productName: "Eren Tshirt",
        category: "Tshirts",
        price: "Rs 999",
        image:
          "erentshirt.png",
      },
      {
        productName: "Imagination printed Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "imagination.jpg",
      },
      {
        productName: "Strawhats printed Tshirt",
        category: "Tshirts",
        price: "Rs 999",
        image:
          "strawhats.png",
      },
      {
        productName: "Gojo printed Tshirt",
        category: "Tshirts",
        price: "Rs 999",
        image:
          "gojo.png",
      },
      {
        productName: "Sukuna printed Tshirt",
        category: "Tshirts",
        price: " Rs 999",
        image:
          "sukuna.png",
      },
      {
        productName: "Nobody Cares printed Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "nobodycares.png",
      },
      {
        productName: "Restless printed Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "restless.png",
      },
      {
        productName: "Independent printed Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "independent.png",
      },
      {
        productName: "Do not Cross Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "donotcross.png",
      },
      {
        productName: "Obito printed Tshirt",
        category: "Tshirts",
        price: "Rs 999",
        image:
          "obito.png",
      },
      {
        productName: "Silence printed Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "silence.png",
      },
      {
      productName: "Original printed Tshirt",
        category: "Streetwear",
        price: "Rs 999",
        image:
          "original.png",
      },
      {
        productName: "Zoro embroidery Tshirt",
          category: "Embroidery",
          price: "Rs 1499",
          image:
            "zoroembroidery.jpg",
        },
      {
        productName: "Japanese Fish embroidery Tshirt",
          category: "Embroidery",
          price: "Rs 1999",
          image:
            "fish.jpg",
        },
      {
        productName: "Bleach embroidery Tshirt",
          category: "Embroidery",
          price: "Rs 1999",
          image:
            "bleach.jpg",
        },
        {
          productName: "Ace embroidery Tshirt",
            category: "Embroidery",
            price: "Rs 1499",
            image:
              "ace.jpg",
          },
          {
            productName: "Cream plain Tshirt",
              category: "Plaintshirts",
              price: "Rs 799",
              image:
                "cream.jpg",
            },
            {
              productName: "Blue plain Tshirt",
                category: "Plaintshirts",
                price: "Rs 799",
                image:
                  "blue.jpg",
              },
              {
                productName: "White plain Tshirt",
                  category: "Plaintshirts",
                  price: "Rs 799",
                  image:
                    "white.jpg",
                },
                {
                  productName: "Red plain Tshirt",
                    category: "Plaintshirts",
                    price: "Rs 799",
                    image:
                      "red.jpg",
                  },
                  {
                    productName: "Black plain Tshirt",
                      category: "Plaintshirts",
                      price: "Rs 799",
                      image:
                        "black.jpg",
                    },
                    {
                      productName: "Solo leveling embroidery Tshirt",
                        category: "Embroidery",
                        price: "Rs 1999",
                        image:
                          "sololeveling.png",
                      },
                      {
                        productName: "Solo leveling embroidery blades",
                          category: "Embroidery",
                          price: "Rs 1999",
                          image:
                            "blades.png",
                        },
                        {
                          productName: "Stone washed tshirt",
                            category: "Plaintshirts",
                            price: "Rs 799",
                            image:
                              "stone.jpg",
                          },
    ],
  };


  for (let i = 0; i < products.data.length; i++) {
    let product = products.data[i];

    //Create Card
    let card = document.createElement("div");
    card.classList.add("card", product.category, "hide");

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    // Add onclick attribute to navigate to single product page
    card.innerHTML = `
        <div class="image-container"><img src="${product.image}"></div>
        <div><i class='bx bx-heart' id="heart-icon"></i></div>
        <div class="container">
            <div>
                <h5 class="product-name">${product.productName.toUpperCase()}</h5>
                <h6>${product.price}</h6>
            </div>
            <button class="cart-btn" onclick="redirectToProduct(${i + 1})">Buy this</button>
        </div>
    `;

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// Function to redirect to single product page
function redirectToProduct(index) {
    window.location.href = `singleproduct${index}.html`;
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
  document.addEventListener("DOMContentLoaded", function() {
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
});
