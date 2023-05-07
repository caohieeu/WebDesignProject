/*cart section logic*/

/*open, close cart modal*/
const cartBtn = document.querySelector('#js-cart');
const modalShopping = document.querySelector('.js-cart-modal');
const modalClose = document.querySelector('.js-modal-close');
const footerModalClose = document.querySelector('.js-footer-modal-close');

function showShoppingProducts() {
    modalShopping.classList.add('open');
}

function hideShoppingProducts() {
    modalShopping.classList.remove('open');
}

cartBtn.addEventListener('click', showShoppingProducts)
modalClose.addEventListener('click', hideShoppingProducts)
footerModalClose.addEventListener('click', hideShoppingProducts);
/*******************/

/*add product logic*/
const btnAddProducts = document.querySelectorAll('.add-to-cart');
const listProducts = document.querySelector('.js-cart-modal table tbody');
var dataProduct;
var cart = [];

//read file data.json
fetch('data.json')
  .then(res => res.json())
  .then(data => dataProduct = data)
  .catch(err => console.error(err));

function addProduct(e) {
  const id = e.currentTarget.id - 1;
  let product = cart.find(p => p.id === id);
  if (product) {
    product.quantity++;
  } else {
    const data = dataProduct[id];
    const productName = data.productName;
    const image = data.image;
    const price = data.price;
    const quantity = 1;
    product = { id, productName, image, price, quantity };
    cart.push(product);
  }
  createItem();
}

//update quantity
function updateQuantity(id) {
  const product = document.getElementById(`quantity_${id + 1}`);
  product.innerHTML = cart[id].quantity;
}

//get total
function getTotal() {
  let total = 0;
  for(let product of cart) {
      total += (product.price * product.quantity) || 0;
    }
    return total;
}

function updateTotalEachProduct(product, index) {
  const totalText = document.querySelectorAll('.js-total-each-product')[index];
  const total = product.quantity * product.price;
  totalText.innerHTML = `$${total}`;
}

//update total
function updateTotal() {
  const total = document.getElementById('total-products');
  total.innerHTML = `
  <tr class="total-products">
  <td colspan="4">Total:</td>
  <td colspan="1">$${getTotal()}</td>
  </tr>
  `;
}

//render products
function createItem() {
  let products = "";
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    if (product.quantity > 1) {
      console.log(product);
      updateQuantity(i);
    }

    products += `
      <tr id="itemProduct" >
        <td><img src="${product.image}" alt=""></td>
        <td style="width: 40%;"><p>${product.productName}</p></td>
        <td>$${product.price}</td>
        <td id="quantity_${i + 1}">${product.quantity}</td>
        <td class="js-total-each-product">$${product.price * product.quantity}</td>
        <td><i class="js-remove-item fa-solid fa-xmark"></i></td>
      </tr>
      `;
      updateTotal();
  }

  listProducts.innerHTML = products;

  
/*delete product logic*/
const btnDeleteProducts = document.querySelectorAll('.js-remove-item');

function deleteProduct(e) { 
    const parentCard = e.currentTarget.parentNode.parentNode;
    const quantityCard = parentCard.children[3];
    
    const index = quantityCard.id[quantityCard.id.length - 1] - 1;
    //remove product
    if(quantityCard.textContent*1 <= 1 ) {
        parentCard.remove();
        //find product to delete
        const deleteProduct = cart.find( 
            product => product.id == index
        )

        //delete product in cart array
        cart.splice(cart.indexOf(deleteProduct), 1);
    }

    //descrease quantity
    else {
        console.log(index, cart[index]);
        cart[index].quantity--;
        updateQuantity(index);  
        updateTotalEachProduct(cart[index], index);
      }
      updateTotal();
}

for(const btnDelete of btnDeleteProducts) {
    btnDelete.addEventListener('click', e => deleteProduct(e));
  }
}

for (const btnAdd of btnAddProducts) {
  btnAdd.addEventListener('click', e => addProduct(e));
}