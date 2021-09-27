console.log("worked great")

const myp = document.createElement('p')
myp.textContent = 'Hello, world'
myp.classList.add('special')
console.log(myp)

const myImg = document.createElement('img')
myImg.src = 'https://picsum.photos/500';
myImg.alt = "good pic"
console.log(myImg)

const myDiv = document.createElement('div')
myDiv.classList.add('wrapper')
console.log(myDiv)

myDiv.append(myp)
myDiv.append(myImg)
document.body.append(myDiv) //touch the DOM once to keep things fast

const hdg = document.createElement('h2')
hdg.textContent = "Cool Beans"

myDiv.insertAdjacentElement('afterbegin', hdg)

//inserting an unordered list of
const myList = document.createElement('ul')

const li1 = document.createElement('li')
li1.textContent = "one"
const li2 = document.createElement('li')
li2.textContent = "two"
const li3 = document.createElement('li')
li3.textContent = "three"
const li4 = document.createElement('li')
li4.textContent = "four"
const li5 = document.createElement('li')
li5.textContent = "five"

myList.append(li3)
li3.insertAdjacentElement("afterbegin", li2)
li3.insertAdjacentElement("beforeend", li4)
myList.prepend(li1)
myList.append(li5)
  
document.body.append(myList)
