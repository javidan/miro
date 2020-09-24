import removeIcon from "./icons/remove.svg";

class Email{

  constructor(emailAddress, onRemove, userConfig){
    this.emailAddress = emailAddress
    this.onRemove = onRemove

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

  isValid(){
    return this.emailAddress.indexOf('@') != -1
  }

  remove(){
    this.containerNode.remove()
  }

  buildTextNode(address){
    const textNode = document.createElement("div")
    textNode.setAttribute('class', this.config.emailTextClass)
    textNode.innerHTML = address

    return textNode
  }

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

  build(){
    const { containerNode, removeButtonNode, textNode } = this

    removeButtonNode.addEventListener('click', e => this.onRemove(this))

    containerNode.appendChild(textNode)
    containerNode.appendChild(removeButtonNode)

    return containerNode

  }
}


export default Email