let tr_id=document.getElementById("trid")
function get_users(){
    URL="https://jsonplaceholder.typicode.com/users"
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        for(let each of data){
            t_sno=each.id
            t_name=each.name
            t_email=each.email
            t_username=each.username
            t_phone=each.phone
            t_website=each.website
            let tr=document.createElement("tr")
            let td_1=document.createElement("td")
            td_1.textContent=t_sno
            let td_2=document.createElement("td")
            td_2.textContent=t_name
            let td_3=document.createElement("td")
            td_3.textContent=t_email
            let td_4=document.createElement("td")
            td_4.textContent=t_username
            let td_5=document.createElement("td")
            td_5.textContent=t_phone
            let td_6=document.createElement("td")
            td_6.textContent=t_website
            tr.append(td_1,td_2,td_3,td_4,td_5,td_6)
            tr_id.append(tr)
        }
    })
}