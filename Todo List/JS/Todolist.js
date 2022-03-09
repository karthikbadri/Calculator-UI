let inputele = document.getElementById("input")
let btn = document.getElementById("btn")
let ul = document.getElementById("ul")
let error = document.getElementById("error")
let update=document.getElementById("update")
update.classList.add("update-con")
let todo_list = []
let serialcount = 0
var update_item_id

function update_btn_show(){
    let up_date=document.getElementById(update_item_id)
    up_date.innerHTML=inputele.value
    console.log(up_date)
    inputele.value=""
    btn.classList.add("add-button2")
    update.classList.add("update-con2")
}
function addbtn() {
    error.innerHTML = ""
    let inputvalue = inputele.value
    if (inputvalue != "") {
        serialcount += 1
        let list = {
            name: inputvalue,
            num: serialcount
        }
        todo_list.push(list)
        displyItems(list)
    } else {
        error.textContent = "Required"
        error.style.color = "red"
    }
}

function delte_item(list_id) {
    let item_id = document.getElementById(list_id)
    ul.removeChild(item_id)
}

function edit_item(list_id,span_id) {
    let edit_ele = document.getElementById(list_id)
    let span_ele=document.getElementById(span_id)
    inputele.value=span_ele.innerHTML
    update_item_id=span_id
    update.classList.add("update-con2")
    btn.classList.add("add-button")
}

function displyItems(list) {
    let li = document.createElement("li")
    li.classList.add("li-container")
    let list_id = "id_no." + list.num
    li.id = list_id
    ul.appendChild(li)

    let divcon=document.createElement("div")
    divcon.classList.add("div-container")
    li.appendChild(divcon)

    let span = document.createElement("span")
    let span_id="span_id"+list.num
    span.id=span_id
    span.innerHTML = list.name
    divcon.appendChild(span)

    let div = document.createElement("div")
    divcon.appendChild(div)
    let edit = document.createElement("button")
    edit.addEventListener("click", function () {
        edit_item(list_id,span_id)
    })

    let del = document.createElement("button")
    del.addEventListener("click", function () {
        delte_item(list_id)
    })
    div.append(edit, del)

    edit.innerHTML = "edit"
    del.innerHTML = "delete"
    edit.id = "editing"
    del.id = "delting"
    inputele.value = ""
}