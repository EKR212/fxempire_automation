import { generateRandomText } from "./utils"

export let pageURL = 'https://www.fxempire.com/'

//login consts
export let correctEmail = 'einavkr212@gmail.com'
export let correctPassword = 'testPassword'

export let incorrectEmail = 'incorectEmail@gmail.com'
export let incorrectPassword = 'incorectPassword'

export let incorrectEmailFormat = 'incorect email format'
export let incorrectEmailFormatError ='Please enter your email address in format: name@example.com'

//search consts
export let goodSearchQuary = 'GOLD'
export let nonExistingSearchQuary = generateRandomText()
export let noMatchingInstrumentsError = 'No matching instruments'
