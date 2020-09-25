import Email from './email.js'

/**
 * EmailInputField
 * Class which is responsible generating input field inside given container
 * optional config also can be passed
 */
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

  removeEmail(container, email){
    this.emails.splice(this.emails.indexOf(email), 1)

    //fix in ie
    email.remove(container)
    this.config.onRemove(email)
  }

  addEmail(address){
    const {input} = this

    // get list of emails, split by comma and trim the whitespaces
    const addresses = address.split(',').map(address=> address.trim())

    const list = addresses.map(address => {
      if(address) return new Email(address, this.removeEmail.bind(this, this.container), this.config)
    }).filter((email) => email )

    this.emails = [...this.emails, ...list]

    // get email list, create email instance for each of them
    // and add to list of emails and DOM
    list.forEach((email)=>{
      this.container.insertBefore(email.build(), this.input)
      this.config.onAdd(email)
    })

    input.value = ""
    
    // If you paste emails or add them scroller will go to the bottom all the time
    this.container.scrollTop = this.container.scrollHeight;

    return this
  }

  emailsCount(){
    return this.emails.length
  }

  // main function for creating domnodes and adding them
  // to main container
  build(){
    let {container, input} = this

    if(!container){
      console.log("Invalid container specified for EmailInput")
      return
    }

    this.setNodes()
    this.setListeners()
    
    container.appendChild(input)

    this.config.prepopulate.forEach(address => this.addEmail(address))
    return this
  }

  // Will set the classNames for container and
  setNodes(){
    let {container, input, config} = this

    const classNames = [ container.getAttribute('class'), config.containerClass].filter(c=> c).join(' ')

    container.setAttribute('class', classNames)
    
    input.setAttribute('class', config.inputClass)
    input.setAttribute('placeHolder', config.inputPlaceholder)
  }


  // Add Listeners for actions
  setListeners(){
    const { input } = this

    input.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ',') {
        this.addEmail(e.target.value)
        e.preventDefault()
      }
    })

    // input.addEventListener('blur', e => this.addEmail(e.target.value))

    input.addEventListener('paste', e => {
      let pastedText = '';
      if (typeof e.clipboardData === 'undefined')
          pastedText = window.clipboardData.getData('Text')
      else
          pastedText = e.clipboardData.getData('text/plain')
          
      this.addEmail(pastedText)
      e.preventDefault()
    })
  }

}


export default EmailsInputField