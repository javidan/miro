# Assignment

Share board demo can be found here

EmailInput demo can be found here


## Share Board 

For share board name functionality please check `/page` folder

For styles I used less. in order compile them:

```bash

npm i --global less

cd page/

lessc styles/index.less index.css

```

demo can be found here



## Input Emails

Input emails can be used as simplest like

```html

<div id="emails-input1"></div>

<script src="./dist/email_input.bundle.js"></script>

<script>
var inputContainerNode1 = document.querySelector('#emails-input1');
var emailsInput1 = EmailsInput(inputContainerNode1, {}); 

</script>

```

You can add extra config object as an extra argument to EmailInput
where you can override default classNames with own, prepopulate emails
and add actions which will fire when you add or remove email


``` javascript
config = {
  containerClass: 'email_input', // Main container className
  inputClass: 'email_input__typer', // Input field className
  emailClass: 'email_input__email',  // individual email className
  invalidEmailClass: 'email_input__email--invalid', // Invalid email className
  deleteButtonClass: "email_input__delete", // Delete icon className
  emailTextClass: "email_input__text", // Email text className
  inputPlaceholder: 'add more people...', // Override placeholder text
  onAdd: (email) => {}, // When you add email onAdd callback will fire
  onRemove: (email) => {}, // When you removing email onRemove callback will fire
  prepopulate: ['someemail@gmail.com'], // You can add predefined emails
}

var inputContainerNode1 = document.querySelector('#emails-input1');
var emailsInput1 = EmailsInput(inputContainerNode1, config); 

```

There are also additional functions for checking email count
and adding email

```javascript

emailsInput.addEmail("sdfsdfsd@gmail.com") // will add new email to field
emailsInput.emailCount() // will return count of emails

```

### Building email_input

I used webpack as a build tool and less for styles

```bash
cd email_input
npm i

npm run dev # for development build
npm run build # for minimized production build

```


