
export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

export const avatarUrlValidationMessage = 'Esta no es un URL valida, por favor verifica que sea una URL valida y que contenga el protocolo http o https.';