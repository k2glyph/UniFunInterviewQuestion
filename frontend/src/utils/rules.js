const defaultMessage = {
    onEmpty:'is Required',
    notValid: 'is not valid'
};
const rules= {
    Email: {
        regex: '/^[\\w]*\\@[\\w]*\\.[a-z]{2,6}$/g',
        onEmpty: `Email ${defaultMessage.onEmpty}`,
        notValid: `Email ${defaultMessage.notValid}`,
    },
    Domain:{
        regex: '/^[\\w]*\\.[a-z]{2,6}$/g',
        onEmpty: `Domain ${defaultMessage.onEmpty}`,
        notValid: `Domain ${defaultMessage.notValid}`,
    },
   Phonenumber: {
    regex: '/^[\\d]{10,12}$/g',
    onEmpty: `Phone Number ${defaultMessage.onEmpty}`,
    notValid: `Phone Number ${defaultMessage.notValid}`,
   },
   Text: {
    onEmpty: `Text ${defaultMessage.onEmpty}`,
   }

};
export default rules;