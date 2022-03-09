let div = document.getElementById("demo")

function get_des() {
    url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        .then(res =>
            res.json()
        )
        .then(data => {
            console.log(data)
            for (let each of data){
                b_title=each.title
                b_body=each.body
                let h1=document.createElement("h1")
                h1.textContent=b_title
                div.append(h1)
                let para=document.createElement("p")
                para.textContent=b_body
                div.append(para)
                let hr=document.createElement("hr")
                div.append(hr)
            }
        })
}