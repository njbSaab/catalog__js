function redner() {
  const productsStore = localStorageUtil.getProducts();


  headerPage.render(productsStore.length);
  productsPage.render();

}
spinnerPage.render()

let CATALOG = [];


fetch('server/catalo.json')
   .then(res => res.json())
   .then(body => {
      CATALOG = body

      setTimeout(() =>{
         spinnerPage.handleClear()
         redner();
      }, 1000)

   })
   .catch((error) => {
      errorPage.redner()
      spinnerPage.handleClear()
   })

