function InsertToDo(){
    let getInput = document.querySelector('input').value
    if (!getInput) {
        console.log('insira um text')
        return 
    }
    console.log(getInput)

    let getUl = document.querySelector('ul')
    let createLi = document.createElement('li')
    let createP = document.createElement('p')
    let createCheckbox = document.createElement('input')

    createCheckbox.type = 'checkbox'
    createLi.append(createCheckbox)
    createP.textContent = getInput
    getUl.append(createLi)
    createLi.append(createP)
}