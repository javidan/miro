import removeIcon from "./icons/remove.svg";

// Email
// Each individual email component will be managed by Email Class
class Email{

  constructor(emailAddress, onRemove, userConfig){
    this.emailAddress = emailAddress
    this.onRemove = onRemove

    // adding default configuration
    this.config = {
      emailClass: 'jemail_input__email',
      invalidEmailClass: 'jemail_input__email--invalid',
      deleteButtonClass: "jemail_input__delete",
      emailTextClass: "jemail_input__text",
      ...userConfig
    }

    this.containerNode = this.buildContainerNode()
    this.textNode = this.buildTextNode(this.emailAddress)
    this.removeButtonNode = this.buildRemoveNode()
  }

  // Check if email valid
  // As we can really validate email only sending email to address
  // checking if it have @ sign
  isValid(){
    return this.emailAddress.indexOf('@') != -1
  }

  remove(container){
    container.removeChild(this.containerNode)
  }

  // Building text node
  buildTextNode(address){
    const textNode = document.createElement("div")
    textNode.setAttribute('class', this.config.emailTextClass)
    textNode.innerHTML = address

    return textNode
  }

  // building delete node
  buildRemoveNode(){
    const removeButtonNode = document.createElement('div')
    removeButtonNode.setAttribute('class', this.config.deleteButtonClass)

    // TODO: find better way
    removeButtonNode.innerHTML = removeIcon
    removeButtonNode.firstChild.setAttribute('width', 8)
    removeButtonNode.firstChild.setAttribute('height', 8)

    return removeButtonNode
  }

  buildContainerNode(){
    const className = [this.config.emailClass]

    if(!this.isValid()){
      className.push(this.config.invalidEmailClass)
    }

    const containerNode = document.createElement('div')
    containerNode.setAttribute('class', className.join(' '))

    return containerNode
  }

  // Will build email and return node
  build(){
    const { containerNode, removeButtonNode, textNode } = this

    removeButtonNode.addEventListener('click', e => this.onRemove(this))

    containerNode.appendChild(textNode)
    containerNode.appendChild(removeButtonNode)

    return containerNode

  }
}


export default Email