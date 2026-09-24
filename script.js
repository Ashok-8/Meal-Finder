 
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(response => response.json())
        .then(data =>{
            let output="";
            data.categories.map(item=>{
                output +=`
                <div>
                   
                    <h2>${item.strCategory}</h2>

                <img src="${item.strCategoryThumb}"
               
                width="150">
               
                 
                </div>
                `;
            });
              document.getElementById("items").innerHTML=output;
        });



      ///  *******************************************///
//       function filterd(){
//         let search = document.getElementById('search-bar').ariaValueMax.toLocaleLowerCase()
//         let tempData = output.filter((item)=>item.name.toLocaleLowerCase().includes(search))
// output(tempData)
//       }
      

 