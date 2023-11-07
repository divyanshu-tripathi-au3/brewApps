
APIS:  APIs are not secured usually APIs must be authenticated with middleware

    http://localhost:4000/api/books/addBookDetails
    http://localhost:4000/api/books/viewAllBooks
    http://localhost:4000/api/books/getBookDetailsById/:_id
    http://localhost:4000/api/books/editBookDetails/:_id
    http://localhost:4000/api/books/deleteBookDetails/:_id

API endpoints and their usage:
    /addBookDetails  : to add new Book while title should be unique and summary is not mendatory
    /viewAllBooks  : to fetch all added books by all users  here we can bound by user specific as well
    /getBookDetailsById/:_id  : to fetch perticular book by ID
    /editBookDetails/:_id      : to edit perticular book by ID
    /deleteBookDetails/:_id  : to delete perticular book by ID


Instructions to set up and run the application locally
    git clone 
    npm install
    npm start


Any decisions or assumptions you made during the development process:
    I got assignment late so made it in very less hours although task was not big
    it was just about book
    there can be various ways where 1:M and M:M relations among author , books and users collections

