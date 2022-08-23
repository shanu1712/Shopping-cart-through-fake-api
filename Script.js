fetch('https://fakestoreapi.com/products')
  .then((data) => {
    console.log(data);
    return data.json(); //converting json data in arrays//
  })
  .then((completeData) => {
    //console.log(completeData.title);//checking whether it is displaying or not
    let data1 = '';
    completeData.map((values) => {
      // removing+ before equal to in next line will only display one data
      data1 += `<div class="card"> 
      <h1 class="title">${values}</h1><img src=${values.image} alt="img" class="images">
      <p class="description">${values.description}</p>//
      <p class="category">${values.category}</p>
      <p class="price">${values.price}</p>
      </div>
      `;
    });
    document.getElementById('items').innerHTML = data1;
  });
