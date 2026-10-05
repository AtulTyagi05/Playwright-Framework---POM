//export const Base_URL = "https://rahulshettyacademy.com/loginpagePractise/";

const ENV_URL = {

    qa : "https://rahulshettyacademy.com/loginpagePractise/",
    dev : "https://rahulshettyacademy.com/loginpagePractise/",
    stage :"https://rahulshettyacademy.com/loginpagePractise/",
    prod : "https://rahulshettyacademy.com/loginpagePractise/",

}

const ENV = process.env.ENV || "prod"
export const Base_URL = (ENV_URL as any)[ENV]

export const UserName = "atul";
export const Password = "Salman@123"

