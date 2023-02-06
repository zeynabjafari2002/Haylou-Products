const products=[
  { id : 1 , name : 'FTI' , price : '$18' , src : '../photos/FTI HANDSFREE T15 NEW ACTION.jpg'},
  { id : 2 , name : 'GT7 Neo' , price : '$20' , src : '../photos/GT7 Neo.jpg'},
  { id : 3 , name : 'GT6' , price : '$17' , src : '../photos/HDI BLUETOOTH GT6 GLOBAL.jpg'},
  { id : 4 , name : 'MORIPOD T33' , price : '$22' , src : '../photos/OLA BUDS NEW MORIPOD T33 2020.jpg'},
  { id : 5 , name : 'T15' , price : '$15' , src : '../photos/T15.jpg'},
  { id : 6 , name : 'X1 Neo' , price : '$19' , src : '../photos/X1 Neo.jpg'},  
]

const $=document
let productContainer=$.querySelector('.productContainer')
products.forEach(
  function (product){
    productContainer.insertAdjacentHTML('afterbegin' , '<div class="infoContainer"><h3>'+product.name+'</h3><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><img src="'+product.src+'" alt=""><p>'+product.price+'</p><button id="seeMoreBtn">See More</button></div>')
  }
)

let seeMoreBtn=$.querySelectorAll('#seeMoreBtn')

seeMoreBtn.forEach(
  function (btn){
    btn.addEventListener('click' , (item)=>{
      let getbtn=item.target
      let getParent=getbtn.parentElement
      let getProductName=getParent.firstChild.innerHTML
      let findProduct=products.findIndex(
        function (product){
          return product.name===getProductName
        }
      )
      window.location.href="http://127.0.0.1:5500/html/product.html?id="+products[findProduct].id+""
    })
  }
)


