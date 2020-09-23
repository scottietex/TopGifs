function getsource(id){
    $.ajax ({
        url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=4d58b05dbbb74086800a0dc69857cf1b",
        success: function(res) {
            document.getElementById('sourceLink').innerHTML=res.sourceUrl
            document.getElementById('sourceLink').href=res.sourceUrl
        }
    })
}
function getrecipe(q){
    $.ajax ({
        url:"https://api.spoonacular.com/recipes/search?apiKey=4d58b05dbbb74086800a0dc69857cf1b&number=1&"+q,
        success: function (res) {
            document.getElementById("output").innerHTML="<h3>"+res.results[0].title+"</h3><br><img src='"+res.baseUri+res.results[0].image+"width='400'/> <br> ready in "+res.results[0].readyInMinutes+" minutes"
            getsource(res.results[0].id)
        }
    })
}

//$.getJSON('https://api.spoonacular.com/recipes/findByIngredients?apiKey=4d58b05dbbb74086800a0dc69857cf1b',function(data){
   // console.log(data);
  
    //$.each(data, function(index, value){
    //  console.log(value);
   // })
  //});


//4d58b05dbbb74086800a0dc69857cf1b
//GET https://api.spoonacular.com/recipes/findByIngredients