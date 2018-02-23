let initialState = {
    username: '',
    password: '',
    newUsername: '',
    newPassword: '',
    listings: [],
    propName: '',
    propDesc: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageurl: '',
    loanAmount: '',
    monthlyMort: '',
    desiredRent: ''
}

const TYPING_USERNAME = "TYPING_USERNAME";
const TYPING_PASSWORD = "TYPING_PASSWORD";
const GET_LISTINGS = "GET_LISTING";
const TYPING_PROP_NAME = "TYPING_PROP_NAME";
const TYPING_PROP_DESC = "TYPING_PROP_DESC";
const TYPING_ADDRESS = "TYPING_ADDRESS";
const TYPING_CITY = "TYPING_CITY";
const TYPING_STATE = "TYPING_STATE";
const TYPING_ZIP = "TYPING_ZIP";
const TYPING_IMG_URL = "TYPING_IMG_URL";
const TYPING_LOAN_AMOUNT = "TYPING_LOAN_AMOUNT";
const TYPING_MONTHLY_MORTGAGE = "TYPING_MONTHLY_MORTGAGE";
const TYPING_DESIRED_RENT = "TYPING_DESIRED_RENT";
const CANCEL_LISTING = "CANCEL_LISTING";





function reducer(state=initialState, action) {
    switch(action.type) {
        case TYPING_USERNAME:
            return Object.assign({}, state, {username: action.payload})

        case TYPING_PASSWORD:
        return Object.assign({}, state, {password: action.payload})

        case GET_LISTINGS:
        return Object.assign({}, state, {listings: action.payload})

        case TYPING_PROP_NAME:
        return Object.assign({}, state, {propName: action.payload})

        case TYPING_PROP_DESC:
        return Object.assign({}, state, {propDesc: action.payload})

        case TYPING_ADDRESS:
        return Object.assign({}, state, {address: action.payload})

        case TYPING_CITY:
        return Object.assign({}, state, {city: action.payload})

        case TYPING_STATE:
        return Object.assign({}, state, {state: action.payload})

        case TYPING_ZIP:
        return Object.assign({}, state, {zip: action.payload})

        case TYPING_IMG_URL:
        return Object.assign({}, state, {imageurl: action.payload})

        case TYPING_LOAN_AMOUNT:
        return Object.assign({}, state, {loanAmount: action.payload})

        case TYPING_MONTHLY_MORTGAGE:
        return Object.assign({}, state, {monthlyMort: action.payload})

        case TYPING_DESIRED_RENT:
        return Object.assign({}, state, {desiredRent: action.payload})

        case CANCEL_LISTING:
        return Object.assign({},{username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        listings: [],
        propName: '',
        propDesc: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        imageurl: '',
        loanAmount: '',
        monthlyMort: '',
        desiredRent: ''})

        default: return state;
    }

}


export function typingUsername(u) {
    return {type: TYPING_USERNAME,
    payload: u
    }
}
export function typingPassword(p) {
    return {type: TYPING_PASSWORD,
    payload: p
    }
}
export function getListings(l) {
    return {type: GET_LISTINGS,
    payload: l
    }
}
export function typingPropertyName(p) {
    return {type: TYPING_PROP_NAME,
    payload: p
    }
}
export function typingPropertyDescription(p) {
    return {type: TYPING_PROP_DESC,
    payload: p
    }
}
export function typingAddress(a) {
    return {type: TYPING_ADDRESS,
    payload: a
    }
}
export function typingCity(c) {
    return {type: TYPING_CITY,
    payload: c
    }
}
export function typingState(s) {
    return {type: TYPING_STATE,
    payload: s
    }
}
export function typingZip(z) {
    return {type: TYPING_ZIP,
    payload: z
    }
}
export function typingImageurl(i) {
    return {type: TYPING_IMG_URL,
    payload: i
    }
}
export function typingLoanAmount(l) {
    return {type: TYPING_LOAN_AMOUNT,
    payload: l
    }
}
export function typingMonthlyMortgage(m) {
    return {type: TYPING_MONTHLY_MORTGAGE,
    payload: m
    }
}
export function typingDesiredRent(r) {
    return {type: TYPING_DESIRED_RENT,
    payload: r
    }
}
export function cancelListing() {
    return{
        type:CANCEL_LISTING
    }
}

export default reducer