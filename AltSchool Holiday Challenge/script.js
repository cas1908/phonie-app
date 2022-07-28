// GLOBAL VARIABLES DECLARATION
let submitButton = document.querySelector('.btn')
let input = document.querySelector('input')
let logoDisplay = document.querySelector('#logoDisplay')
let img
let label = document.querySelector('label')

// ARRAY FOR NETWORK CARRIER LOGO
const logos = [
    `assets/9mobile.png`,
    `assets/glo.png`,
    `assets/airtel.png`,
    `assets/mtn.png`
]



// ------ Object for all Network Carrier Prefixes ------
let mtn = {
    one: '0803',
    two: '0806',
    three: '0703',
    four: '0706',
    five: '0903',
    six: '0906',
    seven: '0816',
    eight: '0814',
    nine: '0810',
    ten: '0913',
    eleven: '0702',
    twelve: '0704',
    thirteen: '0813'
}

let nineMobile = {
    one: '0809',
    two: '0909',
    three: '0817',
    four: '0818',
    five: '0908'
}

let glo = {
    one: '0805',
    two: '0905',
    three: '0811',
    four: '0815',
    five: '0705',
    six: '0807',
    seven: '0915'
}

let airtel = {
    one: '0802',
    two: '0808',
    three: '0701',
    four: '0708',
    five: '0901',
    six: '0907',
    seven: '0812',
    eight: '0902',
    nine: '0912'
}


// ARRAY OF OBJECTS TO SORE EVERY NETWORK CARRIER
const network = [nineMobile, glo, airtel, mtn]
console.log(network)

//  REVEAL NETWORK CARRIER
submitButton.addEventListener('click', function(e){
    label.classList.remove('active-label')
    if (input.value.toString().length === 11) {
        network.forEach((line) => {

        

            for (var e in line) {
                    switch (input.value.startsWith(line[e])) {
                        case true:
                            if (network.indexOf(line) == 0) {
                                img = document.createElement('img')
                                img.setAttribute('src', `${logos[0]}`)
                                // logoDisplay.appendChild(img)
                                logoDisplay.style.backgroundColor = 'white'
                                logoDisplay.style.backgroundImage = `url(${logos[0]})`
                                input.classList.add('success')
                                label.classList.add('active-label')
                                label.innerText = "Success! carrier identified"
                            }
                            else if (network.indexOf(line) == 1) {
                                img = document.createElement('img')
                                img.setAttribute('src', `${logos[1]}`)
                                // logoDisplay.appendChild(img)
                                logoDisplay.style.backgroundImage = `url(${logos[1]})`
                                input.classList.add('success')
                                label.classList.add('active-label')
                                label.innerText = "Success! carrier identified"
                            }
                            else if (network.indexOf(line) == 2) {
                                img = document.createElement('img')
                                img.setAttribute('src', `${logos[2]}`)
                                // logoDisplay.appendChild(img)
                                logoDisplay.style.backgroundImage = `url(${logos[2]})`
                                input.classList.add('success')
                                label.classList.add('active-label')
                                label.innerText = "Success! carrier identified"
                            }
                            else if (network.indexOf(line) == 3) {
                                img = document.createElement('img')
                                img.setAttribute('src', `${logos[3]}`)
                                // logoDisplay.appendChild(img)
                                logoDisplay.style.backgroundColor = 'white'
                                logoDisplay.style.backgroundImage = `url(${logos[3]})`
                                input.classList.add('success')
                                label.classList.add('active-label')
                                label.innerText = "Success! carrier identified"
                            }
                            break;
                        case false:
                            if (!network.indexOf(line) && network.indexOf(line) != 0) {
                                input.style.borderColor = 'red'
                                label.style.color = 'var(--errorRed)'
                                label.innerText = 'Invalid number, try again'
                                label.classList.add('active-label')
                                console.log('erroe')
                            } else if (network.indexOf(line)){
                                label.style.color = 'var(--secondaryBlue)'
                                input.style.borderColor = 'green'
                                if (input.value == "") {
                                    input.style.borderColor = 'var(--tertiaryBlue)'  
                                }
                            }

                            break
                        default:
                            // input.style.borderColor = 'white'
                            break;
                    }
            }  
        })
     
           

    } else {
        label.style.color = 'var(--errorRed)'
        label.classList.add('error')
        input.classList.remove('active-input')
        input.classList.add('error-input')
        label.style.transition = '.4s ease-in-out'
        label.innerText = "Invalid number, try again"
        suggestNetwork[0].style.display = 'none'
        suggestNetwork[1].style.display ='none'
        suggestNetwork[2].style.display ='none'
        suggestNetwork[3].style.display ='none'
    }

})



//  SUGGEST NETWORK CARRIER ON INPUT
let inputValue
let span0 = document.createElement('span')
let span1 = document.createElement('span')
let span2 = document.createElement('span')
let span = document.createElement('span')
let suggestNetwork = document.querySelectorAll('.suggestion div')
input.addEventListener('keyup', (event)=> {

    // console.log(`the key pressed is ${input.value}`)
    inputValue = input.value
    if (event.key == "Backspace") {
        span.innerText = inputValue
        span0.innerText = inputValue
        span1.innerText = inputValue
        span2.innerText = inputValue
        input.style.borderColor = 'yellowgreen)'
        label.style.color = 'yellowgreen'
        label.innerText = "Invalid number, try again"
    }
    if (input.value == "") {
        suggestNetwork[0].style.display = 'none'
        suggestNetwork[1].style.display ='none'
        suggestNetwork[2].style.display ='none'
        suggestNetwork[3].style.display ='none'
        label.style.color = 'var(--primaryBlue)'
        input.style.borderColor = 'var(--white)'
    label.innerText = "Enter phone number"
    }
    if (inputValue) {
        label.classList.add('active-label')
        input.style.borderColor = 'yellowgreen'
        suggestNetwork[0].style.display = 'flex'
        suggestNetwork[1].style.display ='flex'
        suggestNetwork[2].style.display ='flex'
        suggestNetwork[3].style.display ='flex'

        span.innerText = inputValue
        span0.innerText = inputValue
        span1.innerText = inputValue
        span2.innerText = inputValue

        suggestNetwork[3].appendChild(span0)
        suggestNetwork[1].appendChild(span1)
        suggestNetwork[2].appendChild(span2)
        suggestNetwork[0].appendChild(span)

        network.forEach((suggest) => {
            for (let e in suggest) {
                if (inputValue.slice(0,4).startsWith(suggest[e])) {
                    console.log('found')
                    if (network.indexOf(suggest) == 0) {
                        suggestNetwork[0].style.display ='none'
                        suggestNetwork[1].style.display ='none'
                        suggestNetwork[2].style.display ='none'
                    } else if (network.indexOf(suggest) == 1) {
                        suggestNetwork[0].style.display ='none'
                        suggestNetwork[2].style.display ='none'
                        suggestNetwork[3].style.display ='none'
                    } else if (network.indexOf(suggest) == 2) {
                        suggestNetwork[0].style.display ='none'
                        suggestNetwork[1].style.display ='none'
                        suggestNetwork[3].style.display ='none'
                    }else if (network.indexOf(suggest) == 3) {
                        suggestNetwork[1].style.display ='none'
                        suggestNetwork[2].style.display ='none'
                        suggestNetwork[3].style.display ='none'
                    }
                    
                }
            }
        })
    }

})



// CLEAR WHEN INPUT CLICKED
input.addEventListener('click', ()=> {
    input.value = ""
    label.style.color = 'var(--primaryBlue)'
    label.innerText = "Enter phone number"
    label.style.display = "block"
    label.classList.add('active-label')
    input.style.borderColor = 'var(--white)'
    // p.remove()
    suggestNetwork[0].style.display = "none"
    suggestNetwork[1].style.display ='none'
    suggestNetwork[2].style.display ='none'
    suggestNetwork[3].style.display ='none'
    span.innerText = ''
    span0.innerText = ''
    span1.innerText = ''
    span2.innerText = ''
    logoDisplay.style.backgroundImage = `url(assets/image.png)`

    // img.remove()
})

// DEFAULT WHEN HTML IS CLICKED
let html = document.querySelector('html')
html.addEventListener('click', (e)=> {
    if (e.target != input && e.target != submitButton) {
        // label.style.display = 'none'
        input.classList.remove('error-input')
        label.style.color = 'var(--secondaryBlue)'
        label.classList = ""
        label.innerText = 'Enter phone number'
        if (input.value == "") {
            label.classList.remove('active-label')
        } else if (input.value != ""){
                input.classList.remove('error-input')
                label.style.color = 'var(--primaryBlue)'
                label.classList.add('active-label')
        }
    }


})