import { test, expect } from '@playwright/test';

test('@API Create post', async ({ request }) => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: newPost,
    });

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/json');

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.title).toBe(newPost.title);
    expect(responseBody.body).toBe(newPost.body);
    expect(responseBody.userId).toBe(newPost.userId);
});

test('@API Create post with empty body returns success', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
});

test('@API Create post - validate response schema types', async ({ request }) => {
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: newPost,
    });
    const responseBody = await response.json();

    expect(typeof responseBody.id).toBe('number');
    expect(typeof responseBody.title).toBe('string');
    expect(typeof responseBody.body).toBe('string');
    expect(typeof responseBody.userId).toBe('number');
});
