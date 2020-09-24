# InputEmail



## Usage

```javascript

config = {
  containerClass: 'email_input',
  inputClass: 'email_input__typer',
  emailClass: 'email_input__email',
  invalidEmailClass: 'email_input__email--invalid',
  deleteButtonClass: "email_input__delete",
  emailTextClass: "email_input__text",
  inputPlaceholder: 'add more people...',
  onAdd: (email) => {},
  onRemove: (email) => {},
  prepopulate: [],
}



var inputContainerNode = document.querySelector('#emails-input');
var emailsInput = EmailsInput(inputContainerNode, config); 


emailsInput.addEmail("sdfsdfsd@gmail.com")
emailsInput.emailCount()

```