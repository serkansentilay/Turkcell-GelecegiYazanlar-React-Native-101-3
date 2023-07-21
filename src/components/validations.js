import { object, string, ref } from 'yup';

const messages = {
    required: "Bu alan zorunlu",
    min: "En az 5 karakterli olmalı",
    email: "Geçerli e-posta giriniz",
    oneof: "Parolalar eşleşmiyor"
}

const validations = object({
    username: string().required(messages.required),
    email: string().email(messages.email).required(messages.required),
    password: string().min(5, "En az 5 karakterli olmalı").required(messages.required),
    passwordConfirm: string().oneOf([ref("password")], messages.oneof).required(messages.required)

});

export default validations