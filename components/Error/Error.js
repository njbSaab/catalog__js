class Error {
   redner(){
      const html = `
      <div class="error">
         <div class="error-box">
            <h1 class="error-title">Oops somethink wrong</h1>
            <p class="error-text">please try again latter</p>
         </div>
      </div>
      `
      ROOT_ERROR.innerHTML = html
   }
}
const errorPage = new Error()