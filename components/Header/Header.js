class Header {
   hendleOpenShoppingPage(){
      shoppingPage.render()
   }

   render(count){
      const html = `
      <div class="box">
      <nav class="navbar">
            <div class="container-fluid">
             <a class="navbar-brand" href="#">
             <img src="../../img/category.png" alt="">
             <p>Catalog</p>
            </a>      
            </div>
          </nav>
          <div class="box-item">
          <li class="list-group-item li-items">
              <div class="ms-2 me-auto" onclick="headerPage.hendleOpenShoppingPage();">  <img src="../../img/add-to-basket.png" alt="">   <span class="badge bg-primary rounded-pill"
              >${count}</span> </div>
          </li>
       </div>
          </div>
      `
      ROOT_HEADER.innerHTML = html
   }
}
const headerPage = new Header()



