import Email from './email.js'

class EmailsInputField{
  
  constructor(container, userConfig={}){
    this.emails = []

    this.config = {
      containerClass: 'jemail_input',
      inputClass: 'jemail_input__typer',
      inputPlaceholder: 'add more people...',
      onAdd: (email) => {console.log(email, ' removed')},
      onRemove: (email) => {console.log(email, ' added')},
      prepopulate: [],
      ...userConfig
    }

    this.container = container
    this.input = document.createElement("input")

  }

  removeEmail(email){
    this.emails.splice(this.emails.indexOf(email), 1)
    email.remove()
    this.config.onRemove(email)
  }

  addEmail(address){
    const {emails, input} = this

    const addresses = address.split(',').map(address=> address.trim())

    const list = addresses.map(address => {
      if(address) return new Email(address, this.removeEmail.bind(this), this.config)
    }).filter((email) => email )

    this.emails = [...this.emails, ...list]

    list.forEach((email)=>{
      this.container.insertBefore(email.build(), this.input)
      this.config.onAdd(email)
    })

    input.value = ""
    
    this.container.scrollTop = this.container.scrollHeight;

    return this
  }

  emailsCount(){
    return this.emails.length
  }

  build(){
    let {container, input} = this

    if(!container){
      console.log("Invalid container specified for EmailInput")
      return
    }

    this.setNodes()
    this.setListeners()
    
    container.append(input)

    this.config.prepopulate.forEach(address => this.addEmail(address))
    return this
  }

  setNodes(){
    let {container, input, config} = this

    const classNames = [ container.getAttribute('class'), config.containerClass].filter(c=> c).join(' ')

    container.setAttribute('class', classNames)
    
    input.setAttribute('class', config.inputClass)
    input.setAttribute('placeHolder', config.inputPlaceholder)
  }


  setListeners(){
    const { input } = this

    input.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ',') {
        this.addEmail(e.target.value)
        e.preventDefault()
      }
    })

    input.addEventListener('blur', e => this.addEmail(e.target.value))
    input.addEventListener('paste', e => {
      this.addEmail(e.clipboardData.getData('text'))
      e.preventDefault()
    })
  }

}


export default EmailsInputField