const $=document

const products=[
  { id : 1 , name : 'FTI' , price : '$18' , src : '../photos/FTI HANDSFREE T15 NEW ACTION.jpg' , desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt adipisci perferendis eveniet eligendi sapiente tempora soluta omnis! Officia adipisci quod totam natus voluptates, doloribus necessitatibus a alias exercitationem quam, corrupti eius consequuntur omnis voluptatibus. Sit iste dolorum libero. Quis, accusamus repellat provident reiciendis eaque distinctio dignissimos dolorem officiis ea natus.'},
  { id : 2 , name : 'GT7 Neo' , price : '$20' , src : '../photos/GT7 Neo.jpg' , desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore neque earum explicabo. Earum laborum corrupti sequi unde. Cum, natus nemo provident earum autem rem delectus facere laborum totam voluptatem adipisci cupiditate ipsam tempora deserunt quod nam illum voluptatum, asperiores recusandae quasi, facilis fuga! Dolor autem iusto at, illum quam culpa ad praesentium. Enim laboriosam recusandae minus ut laudantium itaque vel.'},
  { id : 3 , name : 'GT6' , price : '$17' , src : '../photos/HDI BLUETOOTH GT6 GLOBAL.jpg' , desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus? Similique sint fugiat minima id. Possimus, odit, aut fuga quos maxime in tempora et veniam sapiente ex adipisci sed assumenda ratione dolorum non nobis. Dicta omnis debitis ad voluptatem repudiandae.'},
  { id : 4 , name : 'MORIPOD T33' , price : '$22' , src : '../photos/OLA BUDS NEW MORIPOD T33 2020.jpg' , desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis labore distinctio odio tempora numquam sequi doloribus. Minus sequi esse eveniet enim voluptas? Tempora exercitationem quo inventore sunt cupiditate aperiam eos quibusdam quasi facere corporis aspernatur eligendi esse amet, quaerat totam! Nemo eveniet quibusdam fugit debitis molestiae deleniti, qui veritatis, doloribus sapiente dolor tempora perferendis consectetur vero architecto ad error. Optio in ratione autem, accusamus quia tenetur libero cum dolorum ex eum nisi quod impedit aut cumque numquam quam voluptatum!'},
  { id : 5 , name : 'T15' , price : '$15' , src : '../photos/T15.jpg' , desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum alias ipsam error aspernatur eos est, nemo et. Voluptatibus alias repellat provident, velit sit soluta corporis amet qui accusantium! Eligendi, maiores sint nulla vitae dolorum incidunt blanditiis alias quibusdam, sunt rerum est sit repellat voluptas, eaque iste ullam nam quisquam ducimus.'},
  { id : 6 , name : 'X1 Neo' , price : '$19' , src : '../photos/X1 Neo.jpg' , desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolores ipsa aliquid eos eum, quos sint quod error fugiat impedit tempora maiores vitae quisquam ipsam itaque accusamus nam delectus et id perferendis modi a numquam exercitationem repudiandae. Qui, atque totam adipisci ipsa unde blanditiis alias modi omnis hic repellat laboriosam sapiente sunt quibusdam fugit quisquam voluptas nemo quae culpa iste veniam libero maiores, quaerat facilis? Nobis nostrum, inventore at velit vero dolore perferendis consectetur. Culpa in quidem nulla ab, enim nam saepe laboriosam magni qui consectetur sunt corrupti cumque vel.'},  
]

let backBtn=$.querySelector('#back')
let productTitle=$.querySelector('h1')
let productDesc=$.querySelector('p')
let productImg=$.querySelector('img')

backBtn.addEventListener('click' , ()=>{
  history.back()
})

let locationParam=new URLSearchParams(location.search)
let mainProductId=locationParam.get('id')

let mainProductObj=products.findIndex(
  function (product){
    return product.id===Number(mainProductId)
  }
)

if (mainProductObj){
  productTitle.innerHTML=products[mainProductObj].name
  productDesc.innerHTML=products[mainProductObj].desc
  productImg.setAttribute('src' , products[mainProductObj].src)
}
else if(mainProductObj===0){
  productTitle.innerHTML=products[0].name
  productDesc.innerHTML=products[0].desc
  productImg.setAttribute('src' , products[0].src)
}
else{
  window.location.href="http://127.0.0.1:5500/html/index.html"
}
