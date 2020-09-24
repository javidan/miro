import EmailsInputField from './emails_input_field.js'
import "./styles/index.less"


// Autoscroll when adding emails


window.EmailsInput = function(container, config){
  let e = new EmailsInputField(container, config)
  return e.build()
}