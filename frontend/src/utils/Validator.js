import rules from './rules';

export const FIELDS = {
    DOMAIN: 'DOMAIN',
    EMAIL: 'EMAIL',
    PHONENUMBER: 'PHONENUMBER',
    TEXT: 'TEXT',
}
export function validator(fieldValues, defaultErrors) {
    const errors=defaultErrors;
    let isValid = true;
    fieldValues.map((field) => {
        switch(field.type) {
            case FIELDS.DOMAIN:
                const domainValue = field.value;
                if(domainValue===null || !domainValue) {
                    errors[field.key]=rules.Domain.onEmpty; isValid=false;
                }else if(!new RegExp(rules.Domain.regex).test(domainValue)){
                    errors[field.key]=rules.Domain.notValid; isValid=false;
                } else {
                    errors[field.key]=''; isValid=true;
                }
                return true;
            case FIELDS.EMAIL: 
                const emailValue = field.value;
                if(emailValue===null || !emailValue) {
                    errors[field.key]=rules.Email.onEmpty; isValid=false;
                }else if(!new RegExp(rules.Email.regex).test(emailValue)){
                    errors[field.key]=rules.Email.notValid; isValid=false;
                } else {
                    errors[field.key]=''; isValid=true;
                }
                return true;
            case FIELDS.TEXT: 
                const textValue = field.value;
                if(textValue===null || !textValue) {
                    errors[field.key]=rules.Text.onEmpty; isValid=false;
                } else {
                    errors[field.key]=''; isValid=true;
                }
                return true;
            case FIELDS.PHONENUMBER: 
                const phonenumber = field.value;
                if(phonenumber===null || !phonenumber) {
                    errors[field.key]=rules.Phonenumber.onEmpty; isValid=false;
                }else if(!new RegExp(rules.Phonenumber.regex).test(phonenumber)){
                    errors[field.key]=rules.Phonenumber.notValid; isValid=false;
                } else {
                    errors[field.key]=''; isValid=true;
                }
                return true;
            default:
                console.log('Every thing is okay');
        }
    });
    const response = {
        errors,
        isValid
    }
    console.log(response);
    return response;
}