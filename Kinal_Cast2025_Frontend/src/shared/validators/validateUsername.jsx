export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/;
    return username.length >= 3 && username.length <= 20;
}

export const validateUsernameMessage = 'El nombre de usuario debe tener entre 3 y 8 caracteres y no debe contener espacios.';