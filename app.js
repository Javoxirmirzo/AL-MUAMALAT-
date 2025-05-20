let personsArr = [
    {
        imgUrll:'../assets/images/course.images/Sample 46.png',
        name : "Various versions have evolve..." ,
        rate : "⭐⭐⭐⭐⭐ (20)",
        cost : '$500',
    },
    {
        imgUrll:'../assets/images/course.images/Sample 26.png',
        name : "Various versions have evolve..." ,
        rate : "⭐⭐⭐⭐⭐ (102)",
        cost : '$500',
    },
    {
        imgUrll:'../assets/images/course.images/Sample 12.png' ,
        name : "Various versions have evolve...",
        rate : "⭐⭐⭐⭐⭐ (102)",
        cost : "$500"
    },
    {
        imgUrll:'../assets/images/course.images/Sample 46.png',
        name : "Various versions have evolve..." ,
        rate : "⭐⭐⭐⭐⭐ (20)",
        cost : '$500',
    },
    {
        imgUrll:'../assets/images/course.images/Sample 26.png',
        name : "Various versions have evolve..." ,
        rate : "⭐⭐⭐⭐⭐ (102)",
        cost : '$500',
    },
    {
        imgUrll:'../assets/images/course.images/Sample 12.png' ,
        name : "Various versions have evolve...",
        rate : "⭐⭐⭐⭐⭐ (102)",
        cost : "$500"
    }, {
        imgUrll:'../assets/images/course.images/Sample 46.png',
        name : "Various versions have evolve..." ,
        rate : "⭐⭐⭐⭐⭐ (20)",
        cost : '$500',
    },
    {
        imgUrll:'../assets/images/course.images/Sample 26.png',
        name : "Various versions have evolve..." ,
        rate : "⭐⭐⭐⭐⭐ (102)",
        cost : '$500',
    },
    {
        imgUrll:'../assets/images/course.images/Sample 12.png' ,
        name : "Various versions have evolve...",
        rate : "⭐⭐⭐⭐⭐ (102)",
        cost : "$500"
    },
]

let cardsPerson = document.getElementById ('cards_person')


function showProduct(){
    for (let i = 0 ; i < personsArr.length ; i++ ){
        console.log(personsArr[i]);
        cardsPerson.innerHTML += `<div class="card">
    <div class="card_img">
    <img src="${personsArr[i].imgUrll}" alt=""/>
    </div>
    <div class="card_info">
        <p> ${personsArr[i].name}</p>
        <p> ${personsArr[i].rate}</p>
        <h3> ${personsArr[i].cost}</h3>
    </div>
    </div>`
    }
}