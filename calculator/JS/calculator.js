let equal = document.getElementById('button=')
let square = document.getElementById("button^")
let clear = document.getElementById("buttonclr")
let ques = document.getElementById("ques")
let output = document.getElementById("out")
let error1 = document.getElementById("err")
let ul_1 = document.getElementById("ul-list")
let historybtn = document.getElementById("buttonhistory")

square.addEventListener("click", function () {
    ques.textContent += "**"
})


function clickbtn(id) {
    let btn_value = document.getElementById(id)
    ques.textContent += btn_value.innerHTML
}


historybtn.addEventListener("click", function () {
    if (ques.textContent != "" && output.textContent != "") {
        let li = document.createElement('li')
        li.classList.add("li-list")
        let span_2 = document.createElement("span")
        span_2.innerHTML = ques.textContent
        let span_3 = document.createElement('span')
        span_3.innerHTML = " = " + output.textContent
        li.append(span_2, span_3)
        ul_1.append(li)
        ques.textContent = ""
        output.textContent = ""
    }
    else {
        ques.textContent = ""
        output.textContent = ""
        error1.textContent = ""
    }


})
clear.addEventListener('click', function () {
    ques.textContent = ""
    output.textContent = ""
    error1.textContent = ""
})
equal.addEventListener('click', function () {
    try {
        let res = eval(ques.textContent)
        output.textContent = res
    } catch (e) {
        error1.textContent = "Invalid Arithmetic operations"
    }
})