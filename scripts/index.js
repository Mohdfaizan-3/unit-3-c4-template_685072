// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


fetch("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
.then((res)=>{
 return res.json()
})
.then(()=>{
    let x = articles
    console.log(x)
}

)
//.then(console.log(articles.name))