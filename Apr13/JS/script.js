var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var selectedArray = [];

var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "unsplash",
        title: "unsplash photo",
        cost: 100,
        desc: "Lorem ipsum dolor sit, amet consectetur adeipsicing elit. Doloremque, consequatur."
    },

    {
        img: "http://unsplash.it/256/256?image=998",
        alt: "image 205",
        title: "Another Unsplash photo",
        cost: 75,
        desc: "Notes and photos bound together after a long trip."
    },

    {
        img: "http://unsplash.it/256/256?image=401",
        alt: "image 401",
        title: "ANother Picture ma friend",
        cost: 22,
        desc: "Enjoy a fist sandwhich ya hoozer"
    },

    {
        img: "http://unsplash.it/256/256?image=903",
        alt: "image 401",
        title: "Another Picture ma friend",
        cost: 22,
        desc: "Enjoy a fist sandwhich ya hoozer"
    },
]

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        var item = `
        <li data-sku="001">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="$arr[i].atl}">
            <h3>Unsplash Photo</h3>
            <p>$100</p>
            <p>Lorem ipsum dolor sit, amet consectetur adeipsicing elit. Doloremque, consequatur.</p>
        </li>`;
        items.innerHTML += item;
    }
    console.log(items.childNodes);
}

displayItems(itemArray);

function addListener(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', function(evt){
            console.log(this.firstElementChild);
            this.classList.toggle('selected');
            // Ternary Operator // aka super awesome if statement
            (this.firstElementChild.checked == true) ? 
            this.firstElementChild.checked = false : 
            this.firstElementChild.checked = true;
        });
    }
    // console.log(this.dataset.sku);
    // selectedArray.push(arr[this.dataset.sku]);

    console.log(Array.isArray(arr));
    console.log(arr.slice(this.dataset.sku));

    console.log(selectedArray);
}

addListener(items.children);