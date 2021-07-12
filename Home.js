function fetchData(){
    fetch("http://localhost:1337/titles")
       .then(response =>{
          if(!response.ok){
             throw Error("Error");
          }
          return response.json();
       })
       .then(data =>{
          console.log(data);
          const html = data.map(user => {
             return `
             <div class="main">
             <div class="t1"><h1><i>${user.title}</i></h1></div>
             <div class="t2">
                 <p><i>${user.body}</i></p>
             </div>
             </div>
             `;
             
          })
          .join("")
          console.log(html)
          document.querySelector("#hello").insertAdjacentHTML("afterbegin",html);
       })
       .catch(error =>{
          console.log(error);
       })
 }
 
 fetchData();

 function fetchDataone(){
   fetch("http://localhost:1337/infos")
      .then(response =>{
         if(!response.ok){
            throw Error("Error");
         }
         return response.json();
      })
      .then(data =>{
         console.log(data);
         const html = data.map(userone => {
            return `
            <div class="one1">
              <img src="${userone.image.name}">
              <h1>${userone.text}</h1>
            </div>
            `;
            
         })
         .join("")
         console.log(html)
         document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
      })
      .catch(error =>{
         console.log(error);
      })
}




fetchDataone();

