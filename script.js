let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
list.innerHTML = '';
openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [];

function showCategory(category) {
    if (category === 'phones') {
        products = [
            {
                              id: 1,
                              name: 'SAMSUNG',
                              image: '1.jpg',
                              price: 120000,
                              
                          },
                          {
                              id: 2,
                              name: 'IPHONE 14',
                              image: '2.jpg',
                              price: 120000
                          },
                          {
                              id: 3,
                              name: 'IPHONE 12',
                              image: '3.jpg',
                              price: 220000
                          },
                          {
                              id: 4,
                              name: 'HUAWEI',
                              image: '4.jpg',
                              price: 123000
                          },
                          {
                              id: 5,
                              name: 'NOkIA',
                              image: '5.jpg',
                              price: 320000
                          },
                          {
                              id: 6,
                              name: 'XAMUI',
                              image: '6.jpg',
                              price: 120000
                          },
                          {
                              id: 7,
                              name: 'SAMSUNG',
                              image: '7.jpg',
                              price: 120000
                          },
                          {
                              id: 8,
                              name: 'OPPO',
                              image: '8.jpg',
                              price: 120000
                          },
                          {
                              id: 9,
                              name: 'IPHONE 10',
                              image: '9.jpg',
                              price: 120000
                          },
            
        ];
    } else if (category === 'laptop') {
        products = [
            {
              id: 10,
            name: 'DELL INSPRION 3501',
                              image: '10.jpg',
                              price: 120000
                          },
                          {
                              id: 11,
                              name: 'HP PAVILION 15',
                              image: '11.jpg',
                              price: 120000
                          },
                          {
                              id: 12,
                              name: 'LENOVO V15 G2',
                              image: '12.jpg',
                              price: 220000
                          },
                          {
                              id: 13,
                              name: 'DELL INSPRION ',
                              image: '13.jpg',
                              price: 123000
                          },
                          {
                              id: 14,
                              name: 'LENOVO YOGA C700',
                              image: '14.jpg',
                              price: 320000
                          },
                          {
                              id: 15,
                              name: 'LENOVO LEGION 5',
                              image: '15.jpg',
                              price: 120000
                          },
                          {
                              id: 16,
                              name: 'HP ZBOOK',
                              image: '16.jpg',
                              price: 120000
                          },
                          {
                              id: 17,
                              name: 'DELL INSPRION 10',
                              image: '17.jpg',
                              price: 120000
                          },
                          {
                              id: 18,
                              name: 'DELL INSPRION 5510',
                              image: '18.jpg',
                              price: 120000
                          },
            
        ];
    } else if (category === 'watches') {
        products = [
            {
              id: 19,
                      name: 'ORAIMO WATCH 2 PRO OSW-32',
                      image: '19.jpg',
                      price: 120000
                  },
                  {
                      id: 20,
                      name: 'SMART WATCH CARDO',
                      image: '20.jpg',
                      price: 120000
                  },
                  {
                      id: 21,
                      name: 'HUAWI BAND 4E ',
                      image: '21.jpg',
                      price: 220000
                  },
                  {
                      id: 22,
                      name: 'IBSUN SMART WATCH',
                      image: '22.jpg',
                      price: 123000
                  },
                  {
                      id: 23,
                      name: 'BOROFONE BD1 SMART',
                      image: '23.jpg',
                      price: 320000
                  },
                  {
                      id: 24,
                      name: 'AMAZFIT BIP 3 PRO ',
                      image: '24.jpg',
                      price: 120000
                  },
                  {
                      id: 25,
                      name: 'WATCH DT7 ',
                      image: '25.jpg',
                      price: 120000
                  },
                  {
                      id: 26,
                      name: 'XIAOMI REDMI LITE 2',
                      image: '26.jpg',
                      price: 120000
                  },
                  {
                      id: 27,
                      name: 'SMART WATCH ORAIMO',
                      image: '27.jpg',
                      price: 120000
                  
            },
        ];
    } else if (category === 'headphones') {
        products = [
            {
              id: 28,
                      name: 'JOYROOM',
                      image: '28.jpg',
                      price: 120000
                  },
                  {
                      id: 29,
                      name: 'XIAOMI PISTPN IN-EAR ',
                      image: '29.jpg',
                      price: 120000
                  },
                  {
                      id: 30,
                      name: 'SENNHEISER HD 206',
                      image: '30.jpg',
                      price: 220000
                  },
                  {
                      id: 31,
                      name: 'REALME BUDS',
                      image: '31.jpg',
                      price: 123000
                  },
                  {
                      id: 32,
                      name: 'WIRELESS HEADPHONE',
                      image: '32.jpg',
                      price: 320000
                  },
                  {
                      id: 33,
                      name: 'PQUANXI M10',
                      image: '33.jpg',
                      price: 120000
                  },
                  {
                      id: 34,
                      name: 'SONY MDRZX110',
                      image: '34.jpg',
                      price: 120000
                  },
                  {
                      id: 35,
                      name: 'AKG K240 MKII ',
                      image: '35.jpg',
                      price: 120000
                  },
                  {
                      id:36 ,
                      name: 'SODO SD-1004',
                      image: '36.jpg',
                      price: 120000
                    },
            
        ];
    }

    initApp();
}

let listCards = [];

function initApp() {
    list.innerHTML = '';
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}

function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    let count = 0;
    let totalPrice = 0;
    listCard.innerHTML = '';
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;

        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>`;
        listCard.appendChild(newDiv);
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

















// webpage


function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}

// -----------------------------------------------

function changeimg() {
    var image=document.getElementById("img1")
    console.log(image.src);

     if(image.src.endsWith("13.jpg"))
    {
        image.src="./image/2.jpg";
    }
   else if(image.src.endsWith("2.jpg"))
    {
        image.src="./image/3.jpg";
    }
    else if(image.src.endsWith("3.jpg"))
    {
        image.src="./image/34.jpg";
    }
    else if(image.src.endsWith("34.jpg"))
    {
        image.src="./image/9.jpg";
    }
    else if(image.src.endsWith("9.jpg"))
    {
        image.src="./image/6.jpg";
    }
    else if(image.src.endsWith("6.jpg"))
    {
        image.src="./image/7.jpg";
    }
    else if(image.src.endsWith("7.jpg"))
    {
        image.src="./image/20.jpg"
    }
    else if(image.src.endsWith("20.jpg"))
    {
        image.src="./image/35.jpg";
    }
    else if(image.src.endsWith("35.jpg"))
    {
        console.log("true");
        image.src="./image/13.jpg";
    }
}
var intervalid;
function playphoto() {
var image=document.getElementById("img1");
intervalid=setInterval(function(){
  changeimg();
}, 1000);
}
function stopphoto()
{
clearInterval(intervalid);
}







let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






var form = document.getElementsByTagName('form')[0];
var rows = document.querySelectorAll('.input-row');
var errorName = document.getElementById('error-name');
var errorEmail = document.getElementById('error-email');
var errorPassword = document.getElementById('error-password');
var formData = new FormData(form);
var formValues;
function submitForm(e) {
  errorName.classList.remove('show-error');
  errorEmail.classList.remove('show-error');
  errorPassword.classList.remove('show-error');
  document.getElementById('success-message').style.display = 'none';
  e.preventDefault();
  formData = new FormData(form);
  formValues = {
    name: formData.get('name'),
    email: formData.get('email'),
    country: formData.get('country'),
    password: formData.get('password'),
    gender: formData.get('gender'),
  };

  if (formValues.name.length <= 3) errorName.classList.add('show-error');
  if (formValues.email.search(/^\w+@\w+\.\w+/))
    errorEmail.classList.add('show-error');
  if (
    formValues.password.search(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
  )
    errorPassword.classList.add('show-error');

  document.querySelectorAll('.show-error').length === 0
    ? (document.getElementById('success-message').style.display = 'block')
    : '';
}

function watchChange() {
  formData = new FormData(form);
  formValues = {
    name: formData.get('name'),
    email: formData.get('email'),
    country: formData.get('country'),
    password: formData.get('password'),
    gender: formData.get('gender'),
  };

  console.log('formValues: ', formValues);
  if (formValues.name.length <= 3 && formValues.name.length !== 0)
    errorName.classList.add('show-error');
  else errorName.classList.remove('show-error');

  if (formValues.email.search(/^\w+@\w+\.\w+/) && formValues.email.length !== 0)
    errorEmail.classList.add('show-error');
  else errorEmail.classList.remove('show-error');
  if (
    formValues.password.search(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    ) &&
    formValues.password.length !== 0
  )
    errorPassword.classList.add('show-error');
  else errorPassword.classList.remove('show-error');
}

form.onreset = function () {
  document.getElementById('success-message').style.display = 'none';
};
