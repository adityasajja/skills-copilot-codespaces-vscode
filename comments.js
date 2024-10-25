// Create web server
// Create a web server that listens to incoming requests on port 3000 and serves a static HTML file that contains the comments from the comments.json file. The comments should be rendered on the server side before sending it to the client.
// The comments should be rendered as an unordered list of comments. Each comment should contain the name of the commenter and the comment itself.
// The HTML file should be served with the correct content type.    
// The comments.json file is as follows:
// {
//     "comments": [
//         {
//             "name": "John Doe",
//             "comment": "This is a comment"
//         },
//         {
//             "name": "Jane Doe",
//             "comment": "This is another comment"
//         }
//     ]
// }
// The HTML file should look like this:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
// </head>
// <body>
//     <ul>
//         <li>
//             <strong>John Doe</strong>: This is a comment
//         </li>
//         <li>
//             <strong>Jane Doe</strong>: This is another comment
//         </li>
//     </ul>
// </body>
// </html>
// The server should respond with the correct content type.
// The server should respond with the correct content.
// The server should respond with the correct status code.
// The server should respond with the correct headers.
// The server should respond with the correct body.
// The server should listen on port 3000.
// The server should serve the HTML file.
// The server should render the comments on the server side.
// The server should render the comments as an unordered list of comments.
// Each comment should contain the name of the commenter and the comment itself.
// The server should serve the correct content type.
// The server should serve the correct content.
// The server should serve the correct status code.

const http = require('http');
const fs = require('fs');
const path = require('path');
const comments = require('./comments.json');
