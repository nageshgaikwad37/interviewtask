let cl = console.log;
const count = 50;
const apiKey = 'xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let gallary = document.getElementById("gallary");


   function MakeApicall(url, methodname, objbody){
      return fetch(url, {
         method : methodname,
         body : objbody,
         headers : {
            "Content-type" : "application/json; charset=UTF-8",
         }
      }).then(res => res.json())
   }


   MakeApicall(apiUrl, "GET")
       .then(data => templating(data))
       .catch(cl)


       function templating(arr){
   let result ='';
   arr.forEach(ele => {
      result += `
         <div class="card">
            <div class="cardbody">
             <img src="${ele.urls.full}" alt="image" class='img-fluid'>
            </div>
         </div>
      `
   })

   gallary.innerHTML = result;
}
