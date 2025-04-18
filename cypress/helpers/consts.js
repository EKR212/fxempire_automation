import { generateRandomText } from "./utils"

//URL
export const pageURL = 'https://www.fxempire.com/'
export const apiUrl = 'https://fxempire.com/api/v1/en/articles/latest/top-articles-homepage'

//login consts
export const correctEmail = 'einavkr212@gmail.com'
export const correctPassword = 'testPassword'

export const incorrectEmail = 'incorectEmail@gmail.com'
export const incorrectPassword = 'incorectPassword'

export const incorrectEmailFormat = 'incorect email format'
export const incorrectEmailFormatError ='Please enter your email address in format: name@example.com'

//search consts
export const goodSearchQuary = 'GOLD'
export const nonExistingSearchQuary = generateRandomText()
export const noMatchingInstrumentsError = 'No matching instruments'
