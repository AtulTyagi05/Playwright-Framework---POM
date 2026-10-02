import { Page, expect } from '@playwright/test';
import { loginLocators } from '../locators/loginLocators';

 export class loginpage {

    constructor(private page : Page){

    }

    async login(username : string , password : string){

        await this.page.fill(loginLocators.username, username);
        await this.page.fill(loginLocators.password, password);
        await this.page.click(loginLocators.signButton);
    }
}