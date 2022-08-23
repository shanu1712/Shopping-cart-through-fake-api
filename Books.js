const button = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.getElementById('items');
button.addEventListener('click', function () {
  let search = input.value;
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + search) //deleting after q and adding+search so that after pressing search it is searched in the api
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);//data is printing with fetch api
      let arrayOfBooks = data.items; //converting htmldata into arrays first
      ul.innerHTML = ''; //using this as it will clear when again we will search the new item or book
      arrayOfBooks.forEach(function (ele) {
        const li = document.createElement('li');
        li.textContent = ele.volumeInfo.title; //now append also otherwise it won't print
        const thumnailimage = document.createElement('img'); //creating the image
        thumnailimage.setAttribute('src', ele.volumeInfo.imageLinks?.thumbnail); //null coalescing operator javascript
        thumnailimage.style.width = '100px';
        thumnailimage.style.height = '100px';
        //console.log(ele.volumeInfo);//checking the volumeInfo in console
        //append//
        li.appendChild(thumnailimage); //appending the image
        ul.appendChild(li); //this will append the elements in the ul after searching
        console.log(ele.volumeInfo.imageLinks?.thumbnail); //null coalescing operator javascript using it to avoid errors and search only if it is avaialble like if image is avaialble then only it will search it
      });
    });
});
