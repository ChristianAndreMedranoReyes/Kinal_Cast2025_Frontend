export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

export const emailValidationMessage = 'El correo no es valido, por favor verifica que sea un correo valido y que contenga el simbolo @ y el dominio.';
