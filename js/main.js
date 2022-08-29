const menu = [
    {
        id: 1,
        title: "Ttteokbokki",
        category: "Kore",
        price: 200,
        img:"https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Balık köftesi ile servis edilen baharatlı pirinç kekleri.`
    },
    {        
        id: 2,
        title: "Chicken Ramen",
        category: "Japonya",
        price: 170,
        img:"https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Soya fasulyesi, yeşil soğan gibi sebzelerle servis edilen tavuklu şehriye çorbası. İsteğe bağlı olarak yumurta isteyebilirsiniz. `,
        
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Kore",
        price: 180,
        img:"https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Haşlanmış sebzeler, özel acı sos ile servis edilir.`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "Cin",
        price: 150,
        img:"https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, yeşil soğan ile birlikte servis edilir. `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "Cin",
        price: 230,
        img:"https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Fasulye ve turşu ile servis edilen Yangzhou usulü kızarmış pilav `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japonya",
        price: 190,
        img:"https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Pirinçli Sandviç, soya sosuyla servis edilir`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Kore",
        price: 250,
        img:"https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Yeşil soğan ile servis edilen siyah fasulye soslu erişte `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "Cin",
        price: 220,
        img:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Acı biber soslu erişte, soya fasulyesi ve soğan ile servis edilir`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japonya",
        price: 80,
        img:"https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Bal ile servis edilen kırmızı fasulye ezmesi tatlısı.`,
    },
];

const btnAll = document.querySelector("#All");
const btnKorea = document.querySelector("#Kore");
const btnJapan = document.querySelector("#Japonya");
const btnChina = document.querySelector("#Cin");
const body = document.querySelector(".section-center")

window.addEventListener("load",allMenu);

function allMenu(){
  while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }
  for(let i of menu){
    let menuElement = `
    <div class="menu-items col-6">
    <img src="${i.img}" alt="${i.title}" class="photo">
    <div class="menu-info">
    <div class="menu-title">
    <h4>${i.title}</h4>
    <h4 class="price">${i.price}</h4>
    </div>
    <div class="menu-text">
    ${i.desc}
    </div>
    </div>
    </div>
    `
    
    body.insertAdjacentHTML("afterbegin", menuElement);
  }
};

btnAll.addEventListener("click",allMenu);



//Kore
let arrKoreaFoods = menu.filter(item => item.category == "Kore");

function menuKorea(){
  while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }

  for(let i of arrKoreaFoods){
    let menuElement = `
    <div class="menu-items col-6">
      <img src="${i.img}" alt="${i.title}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${i.title}</h4>
          <h4 class="price">${i.price}</h4>
        </div>
        <div class="menu-text">
          ${i.desc}
        </div>
      </div>
    </div>
    `

    body.insertAdjacentHTML("afterbegin", menuElement);
  }
}

btnKorea.addEventListener("click",menuKorea);


//Japonya
let arrJapanFoods = menu.filter(item => item.category == "Japonya");

function menuJapan(){
  while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }

  for(let i of arrJapanFoods){
    let menuElement = `
    <div class="menu-items col-6">
      <img src="${i.img}" alt="${i.title}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${i.title}</h4>
          <h4 class="price">${i.price}</h4>
        </div>
        <div class="menu-text">
          ${i.desc}
        </div>
      </div>
    </div>
    `

    body.insertAdjacentHTML("afterbegin", menuElement);
  }
}

btnJapan.addEventListener("click",menuJapan);



//Çin
let arrChinaFoods = menu.filter(item => item.category == "Cin");

function menuChina(){
  while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }

  for(let i of arrChinaFoods){
    let menuElement = `
    <div class="menu-items col-6">
      <img src="${i.img}" alt="${i.title}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${i.title}</h4>
          <h4 class="price">${i.price}</h4>
        </div>
        <div class="menu-text">
          ${i.desc}
        </div>
      </div>
    </div>
    `

    body.insertAdjacentHTML("afterbegin", menuElement);
  }
}
btnChina.addEventListener("click",menuChina);
    