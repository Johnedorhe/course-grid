const content = document.querySelector('#content')
const allButtons = document.querySelectorAll('button')
const closeBtn = document.querySelectorAll('.close-btn')

const nodeContent = document.querySelector('#node')
const nodeBtn = document.querySelector('#node-btn')

nodeBtn.addEventListener('click', () => {
    content.innerHTML = nodeContent.innerHTML 
})

const npmContent = document.querySelector('#npm')
const npmBtn = document.querySelector('#npm-btn')

npmBtn.addEventListener('click', () => {
     content.innerHTML = npmContent.innerHTML
})

const coreContent = document.querySelector('#core')
const coreBtn = document.querySelector('#core-btn')

coreBtn.addEventListener('click', () => {
     content.innerHTML = coreContent.innerHTML
})

const eventContent = document.querySelector('#event')
const eventBtn = document.querySelector('#event-btn')

eventBtn.addEventListener('click', () => {
     content.innerHTML = eventContent.innerHTML
})

const expressContent = document.querySelector('#express')
const expressBtn = document.querySelector('#express-btn')

expressBtn.addEventListener('click', () => {
     content.innerHTML = expressContent.innerHTML
})

const databaseContent = document.querySelector('#database')
const databaseBtn = document.querySelector('#database-btn')

databaseBtn.addEventListener('click', () => {
     content.innerHTML = databaseContent.innerHTML
})

const templateContent = document.querySelector('#template')
const templateBtn = document.querySelector('#template-btn')

templateBtn.addEventListener('click', () => {
     content.innerHTML = templateContent.innerHTML
})

const securityContent = document.querySelector('#security')
const securityBtn = document.querySelector('#security-btn')

securityBtn.addEventListener('click', () => {
     content.innerHTML = securityContent.innerHTML
})

const aggregationContent = document.querySelector('#aggregation')
const aggregationBtn = document.querySelector('#aggregation-btn')

aggregationBtn.addEventListener('click', () => {
     content.innerHTML = aggregationContent.innerHTML
})

const deploymentContent = document.querySelector('#deployment')
const deploymentBtn = document.querySelector('#deployment-btn')

deploymentBtn.addEventListener('click', () => {
     content.innerHTML = deploymentContent.innerHTML
})

const graphQLContent = document.querySelector('#graphQL')
const graphQLBtn = document.querySelector('#graphQL-btn')

graphQLBtn.addEventListener('click', () => {
     content.innerHTML = graphQLContent.innerHTML
})

const typescriptContent = document.querySelector('#typescript')
const typescriptBtn = document.querySelector('#typescript-btn')

typescriptBtn.addEventListener('click', () => {
     content.innerHTML = typescriptContent.innerHTML
})


document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && content.classList.contains('hidden')) {
        content.classList.replace('hidden', 'block');
    }
});

