1. Explain the differences between client-side routing and server-side routing.

   With client-side routing, most or all of an app or collection of pages is delivered at once. As such, there will likely be a longer delay (than with server-side routing) when the user first logs in. When a user clicks on a link, however, the content can be displayed much more quickly (than with server-side routing) since it has already been delivered. Some content, however, may never be seen by the user, and has thus been delivered unnecessarily. Compared to server-side-routed sites/apps, client-side-routed sites/apps take a bit more time and effort to set up properly.

   With server-side routing, the server only delivers the content that the user has requested, and only at the time the user requests it. Since the server can’t deliver the next page of content until the user decides where to go, there will likely be at least some delay between the user’s click and the delivery of the requested content. For now, SEO is optimized for server-side routing setups (though this is changing quickly).

2. What does HTTP stand for?

   The Hypertext Transfer Protocol is the network protocol that defines how servers, web browsers, and other nodes of the World Wide Web communicate with one another.

3. What does CRUD stand for?

   Create, read, update, and delete (CRUD) are the four main ways of programmatically interacting with persistent storage (generally on servers). A friends app, for example, would _read_ friends data on the server and display it to the user. The user might _create_ a new friend record, or _delete_ an old record. Finally, the user might want to edit some friend’s information and _update_ the server data accordingly.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers?

   **CRUD** :: **HTTP**
   Create :: POST
   Read :: GET
   Update :: PUT
   Delete :: DELETE

5. Mention three tools we can use to make AJAX requests.

   AJAX (Asynchronous JavaScript and XML) is a set of client-side web development techniques whose aim is to deliver to a web app user as smooth and snappy an experience as possible. This is accomplished in part by making server requests in the background as much as possible so as to avoid interfering with the page the user is viewing.

   As for three tools we can use to make AJAX requests, one is axios.js, a promise-based HTTP client. Depending on one’s definition of ‘tool’, we might consider XMLHttpRequest (XHR), which enables us to retrieve data without doing a full page refresh each time. Finally, we have the Fetch API, which, as I understand it, would be a kind of replacement for axios. The Fetch API does not enjoy full browser support, however, and thus it is safer to continue using axios for now.
