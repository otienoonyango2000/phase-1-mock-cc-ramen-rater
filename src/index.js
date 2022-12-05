// document.addEventListener('DOMContentLoaded', ()=> {
//         fetch('http://localhost:3002/ramens')
//         .then((resp) => resp.json())
//         .then((data) => console.log(data))
//         getImages(data);
// })

// function getImages(menus){
//     for(let menu of menus){
//         console.log(menu.image);
//     }
// }


document.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:3002/ramens")
    .then(response=>{
        return response.json()
    })
    .then(data=>{
        console.log(data)
        return getImages(data)
    })
})

function getImages(menus){
    for(let menu of menus){
        console.log(menu.image)
        inputimage(menu)
    }
}

function inputimage(menu){
    let image = document.createElement('img')
    image.setAttribute('src',menu.image)
    let div = document.getElementById('ramen-menu')
    div.appendChild(image)
    image.addEventListener('click', ()=>{ 
        
        document.querySelector('#pic').setAttribute('src',menu.image)
        
        document.querySelector('#menuName').textContent= menu.name
        document.querySelector('#restaurantName').textContent = menu.restaurant
        document.querySelector('#rating-display').textContent = menu.rating
        document.querySelector('#comment-display').textContent = menu.comment
    })
}


let form = document.getElementById("new-ramen")
form.addEventListener("submit", event => {
    event.preventDefault()
    const item = {
     rating : event.target.rating.value,
     name : event.target.name.value,
     restaurant: event.target.restaurant.value,
    
    image : event.target.image.value,
     comment: event.target.new_comment.value,}
  })



// function insertImage(menu){
//     let image = document.createElement("img")
//     image.setAttribute('src',menu.image)
//     let div = document.getElementById('ramen-menu')
//     div.appendChild(image)
//     image.addEventListener('click',e =>{
//    document.querySelector('#sharon').setAttribute('src',menu.image)
//    document.querySelector('#menuName').textContent = menu.name
//    document.querySelector('#restaurantName').textContent =restaurant.name
//     })
// }
