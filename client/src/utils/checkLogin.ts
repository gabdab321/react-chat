interface User {
    username: string
    password: string
}

export default function checkLogin(user: User, inputData: User): boolean {
    return user.username === inputData.username && user.password === inputData.password
}