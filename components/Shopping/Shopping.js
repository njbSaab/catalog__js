class Shopping{
   handleClear(){
      ROOT_SHOPPING.innerHTML = '';
   }
   handleBuy(){   
      const modalHtml = `
      <div class="modal-buy">
         <h5 class="inner-name">thank's for yor buy</h5>
         <button class="btn" onclick="shoppingPage.handleClear();">✔️</button>
       </div>
      `
      ROOT_SHOPPING.innerHTML = modalHtml
   }

   render(){
      const productsStore = localStorageUtil.getProducts();
      let htmlCatalog = '';
      let sumCatalog = 0;

      CATALOG.forEach(({ id, name, price, })=>{
         if(productsStore.indexOf(id) !== -1) {
            htmlCatalog += `
            <div class="inner-box__item">
               <h5 class="inner-name">${name}</h5>
               <p class="inner-price">${price}</p>
             </div>
            `
            sumCatalog += price
         }      
      })

      const html =`

  <div class="shopping-background"> 
    <div class="shopping">
         <div class="modal-body">
            <div class="container">
               <div class="shopping-box">
                  <div class="shopping-inner-box">
                     ${htmlCatalog}
                     <div class="shopping-sum">
                     <p class="inner-sum">${sumCatalog}</p>
                     </div>
                  </div>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="shoppingPage.handleClear();"></button>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="shoppingPage.handleClear();">Close</button>
                  <button type="button" class="btn btn-primary" 
                  onclick="shoppingPage.handleBuy();">Buy products</button>
               </div>
            </div>
         </div>
   </div>
      `

      ROOT_SHOPPING.innerHTML = html
   }
}
const shoppingPage = new Shopping()
