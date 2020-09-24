
function getRandomEmail(){
  const firstnames = ['john', 'fred', 'harrison', 'thomas', 'james', 'yurgen', 'alex', 'johny']
  const lastnames = ['ferguson', 'jameson', 'walker', 'smith', 'peterson', 'craigson']
  const providers = ['outlook.com', 'gmail.com', 'yahoo.com', 'blabla.com']

  const random = (array) => array[Math.floor(Math.random() * array.length)];

  return `${random(firstnames)}.${random(lastnames)}@${random(providers)}`

}

var inputContainerNode = document.querySelector('#emails-input');
var emailsInput = EmailsInput(inputContainerNode, {}); 
window.emailInput1 = emailsInput

document.getElementById('add_email').addEventListener('click', (e)=>{
  emailsInput.addEmail(getRandomEmail())
})

document.getElementById('get_email_count').addEventListener('click', (e)=>{
  alert("Email count is: " + emailsInput.emailsCount())
})