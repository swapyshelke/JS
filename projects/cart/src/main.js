let shop = document.getElementById("shop")

console.log(shop);

// function to generate shop

const generateShop = () => {

    
    return( shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, desc, img} = x;   
      return  `
    <div class="item">
    <img width="220" src="./images/img-1.jpg" alt="product image">
    <div class="details">
      <h3>${name}</h3>

      <p>Lorem ipsum dolor sit amet.</p>

      <div class="prize-quantity">
        <h2>$ ${price}</h2>

        <div class="buttons">
          <i class="bi bi-dash-lg"></i>
          <div class="quantity">0</div>
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>

  </div>
    `
    })
     ).join("")
}

generateShop()