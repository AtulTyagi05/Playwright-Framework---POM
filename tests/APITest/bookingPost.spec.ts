import { test, expect } from '@playwright/test';

test('@API Get by id', async ({ request }) => {

    const authdata = {
    "username" : "admin",
    "password" : "password123"
}
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {headers:{"Content-Type": "application/json"}, data:authdata});
     expect(response.status());
    const responseBody = await response.json();
    console.log(responseBody)
    const authtoken = await responseBody.token;
    console.log("Token value "  + authtoken);


    //Create the record with post
    const postData = {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    
    const bookingResponse = await request.post('https://restful-booker.herokuapp.com/booking', {headers:{"Content-Type": "application/json"}, data:postData});

    const postResponseBody = await bookingResponse.json();
    console.log(postResponseBody);
    const bookingID = await postResponseBody.bookingid;
    console.log(bookingID);


//Update the records with PUT

const putData = {
    "firstname" : "Atul",
    "lastname" : "Tyagi",
    "totalprice" : 222,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2025-01-01",
        "checkout" : "2026-01-01"
    },
    "additionalneeds" : "Breakfast"
}
    
    const putBookingResponse = await request.put('https://restful-booker.herokuapp.com/booking/'+bookingID, {headers:{"Content-Type": "application/json", "Accept": "application/json", "Cookie": "token="+authtoken},data:putData})

    const putResponseBody = await putBookingResponse.json();
    console.log(putResponseBody);
    const putbookingID = await putResponseBody.bookingid;
    console.log(putbookingID);

    //Delete the record

      const deleteBookingResponse = await request.delete('https://restful-booker.herokuapp.com/booking/'+bookingID, {headers:{"Content-Type": "application/json", "Cookie": "token="+authtoken}})

      expect(deleteBookingResponse.status()).toBe(201);
      console.log(deleteBookingResponse.status());
      console.log(deleteBookingResponse.statusText());

      //Verify the records are deleted or not
       const afterDeleteResponse = await request.get('https://restful-booker.herokuapp.com/booking/'+bookingID);
      console.log(afterDeleteResponse.status());
      console.log(afterDeleteResponse.statusText());
    












});

