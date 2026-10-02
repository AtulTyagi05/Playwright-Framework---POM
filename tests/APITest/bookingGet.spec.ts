import { test, expect } from '@playwright/test';

test('@API Get by id', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/3193');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    // expect(response.headers()['content-type']).toContain('application/json');

    const responseBody = await response.json();
    // expect(responseBody.id).toBe(1);
    // expect(responseBody.userId).toBe(1);
    console.log(responseBody);
    expect(responseBody).toHaveProperty('firstname');
    expect(responseBody).toHaveProperty('lastname');
    expect(typeof responseBody.firstname).toBe('string');
    expect(responseBody.additionalneeds.length).toBeGreaterThan(0);
});