document.querySelector('.btn').addEventListener('click', ()=>addNewUser())
document.querySelector('.view_btn').addEventListener('click', ()=>showUsers())
let id = 0
let personArr =[]
let addNewUser = () =>{
    let name = document.querySelector('.user_name').value
    let age = document.querySelector('.user_age').value

    let date = new Date()
    let = currentDate =date.getFullYear() + '.' +
    (date.getMonth()+1) + '.' +date.getDate()
    console.log(date.getDay())

const person = {
    'id':id,
    'name': name,
    'age':age,
    'createDate':currentDate
}
personArr.push(person)
}
let showUsers = () =>{
    let wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = " "
    personArr.forEach(person =>{

        let card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', person.id)
        card.insertAdjacentHTML('beforeend',`
        <div class="user_name">${person.name} </div>
        <div class="user_age">${person.age}</div>
        <div class="user_date">${person.createDate} </div>
        <div class="exit">x</div>
        `)
        card.querySelector('.exit').addEventListener('click', removeCard)
        wrapper.insertAdjacentElement('beforeend',card)
        card.closest
    })
}

function removeCard(){
    let card = this.closest('.card')
    let id = card.getAttribute('id')
    for (let i = 0 ; i < personArr.length; i++){
        if(personArr[i].id == id){
            personArr.splice(i,1)
            break
        }
    }
    this.closest('.card').remove()
}