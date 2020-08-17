var products = [
  {
    id: 1,
    name: "Giấy vệ sinh ba con sâu",
    price: 50000,
  },
  {
    id: 2,
    name: "Băng vệ sinh Vân Yêu Dấu",
    price: 500000,
  },
  {
    id: 3,
    name: "Macbook",
    price: 5000000,
  },
  {
    id: 4,
    name: "Áo dú căng ngực",
    price: 100000,
  },
  {
    id: 5,
    name: "Con cu giả",
    price: 5234423,
  },
  {
    id: 6,
    name: "Iphone",
    price: 50000912,
  },
];

let listCard = [];

function showData() {
  var tableListProduct = document.getElementById("list-products");
  let html = "";
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    html += `<tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>
        <button class="btn-add" data-id=${product.id}>Chọn</button>
      </td>
    </tr>`;
  }
  tableListProduct.innerHTML = html;
  let btnAdd = document.getElementsByClassName("btn-add");
  for (let index = 0; index < btnAdd.length; index++) {
    const element = btnAdd[index];
    element.addEventListener("click", addToCart);
  }
}

showData();

function addToCart(event) {
  const el = event.target;
  const id = parseInt(el.dataset.id);
  const product = products.find(item => item.id === id);
  listCard.push(product)
  console.log(listCard)
}
