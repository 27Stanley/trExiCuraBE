<h1>API Documentation Overview</h1>

This API allows for fetching, posting, and deleting user and their curated art collection information. Below are the available endpoints and their respective methods.

The base URL for all endpoints is https://trexicurabe.onrender.com/.

<h2>Endpoints:</h2>

<h3>Users Endpoints:</h3>
<p>
Fetch All Users - Fetches a list of all users.

Request Type: GET
Endpoint: /users

Example request: GET https://trexicurabe.onrender.com/users/

Fetch User by ID - Fetches details of a user by their unique ID.

Request Type: GET
Endpoint: /users/{user_id}

Example Request: GET https://trexicurabe.onrender.com/users/${userId}

Create a New User - Adds a new user to the DB with the provided username. Simultaneously creates an artcollection and adds it to the DB that is linked to the new user.

Request Type: POST
Endpoint: /users

Example Request: POST https://trexicurabe.onrender.com/users

Content Type - json:
{
"username": "purple_grapefruit"
}

Delete User by ID - Removes a user from the databse by their unique ID.

Request Type: DELETE
Endpoint: /users/{user_id}

Example Request: GET https://trexicurabe.onrender.com/users/${userId}

</p>

<h3>Curated Collections Endpoints:</h3>
<p>
  tba
</p>

<h3>Error Handling</h3>
<p>
  All endpoints will return appropriate HTTP status codes along with error messages in case of failures.
</p>
