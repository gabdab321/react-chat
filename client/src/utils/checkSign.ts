export function checkUsername(username: string): string | undefined {
    let errorMsg
    if(!(username.length >= 3 && username.length <= 15)) {
        errorMsg = "Your username has to contain from 3 to 15 characters"
    }
    return errorMsg
}

export function checkPassword(password: string): string | undefined {
    let errorMsg
    if(!(password.length >= 4 && password.length <= 20)) {
        errorMsg = "Your password has to contain from 4 to 20 characters"
    }
    return errorMsg
}

export function checkPublicName(publicName: string): string | undefined {
    let errorMsg
    if(!(publicName.length >= 1 && publicName.length <= 25)) {
        errorMsg = "Your public name has to contain from 1 to 25 characters"
    }
    return errorMsg
}