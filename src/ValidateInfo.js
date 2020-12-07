export default function Validate(values) {


    let errors = {}

    console.log("Validate called")

    if(!values.name) {
        errors.name = '*Full name required.'
    } 
    else if(!(/^[a-zA-Z\s+]*$/.test(values.name))) {
        errors.name = '*Please enter valid name.'
    }


    if(!values.contact) {
        errors.email = '*Email required.'
    } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)) {
        errors.email = '*Please enter valid email.'
    }
   
    if(!values.password) {
        errors.password = '*Password required.'
    } else if(values.password.length>12||values.password.length<4) {
        errors.password = '*Please enter valid password.'
    } 
    

   if(!values.address){
       errors.address='*Address required.'
   }
   

    console.log(errors)

    return errors;

}