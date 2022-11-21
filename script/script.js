const goods = [
    {
        id: 1,
        title: "BMW",
        price: "40000",
        count: "15"
    },
    {
      id: 2,
      title: "Toyota",
      price: "20000",
      count: "13"

    },
    {
      id: 3,
      title: "Ford",
      price: "30000",
      count: "20"

    },
    {
      id: 4,
      title: "Chevrolet",
      price: "60000",
      count: "9"

    },
    {
      id: 5,
      title: "Volkswagen",
      price: "30000",
      count: "13"
    }
  ]


const cards_container = document.querySelector('.container');
    goods.forEach(element => {
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const countElem = document.createElement('p');


    titleElem.innerText = `Title: ${element.title}`;  
    priceElem.innerText = `Price: ${element.price}$`; 
    countElem.innerText = `Count: ${element.count}`;

    cardElem.classList.add('card_elem');
    priceElem.classList.add('price_elem');

    cardElem.append(titleElem, priceElem, countElem);
    cards_container.append(cardElem);
    
  })


