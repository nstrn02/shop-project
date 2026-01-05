
export function getProduct (productId){
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId){
      matchingProduct = product;
    }
  });
  return matchingProduct;
}


export const products = [{
  id : '2525',
  Image: '/images/shirkaramelkale.jpg',
  name : ' شیر کارامل پرچرب غنی شده دلیس کاله 125 میلی لیتر',
  price: 25900 ,
  category: 'labaniat',
  desc: 'حجم: 125 لیتر'
},
{
  id : '2526',
  Image:'/images/proshakecacao.jpg',
  name:'پرو شیک کاکائو موزی پروتئین وی لیوانی کاله 225 میلی لیتر',
  price: 77900,
  category: 'labaniat',
  desc: 'حجم: 225 لیتر'
},
{
  id : '2527',
  Image : '/images/shirmuz.jpg',
  name : 'شیر موز پاکتی کاله 1 لیتر',
  price: 119900,
  category: 'labaniat',
  desc: 'حجم: 1 لیتر'
},{
  id : '2528',
  Image : '/images/shirhavij.jpg',
  name: 'شیر هویج پاکتی پگاه 1 لیتر',
  price : 66500,
  category: 'labaniat',
  desc: 'حجم: 1 لیتر'
}];
