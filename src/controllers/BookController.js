
const config = require('../config/index');
const querystring = require('query-string');

const { saveBookDetails, updateBookDetails, fetchBookDataById , fetchBook } = require('../repo/book')
const  { Book }   = require('../config/dbConfig')




//Add a new book (title, author, summary)=====================================================================

const addBookDetails = async (req, res) => {

    const { title, author, summary} = req.body;       
         
    try{

        let bookDetails = await fetchBook({title})
       
        if( bookDetails ){
            return res.status(400).json({ success : false, message : "Duplicate Book Title", data: {}, code: 400})
        }else {

            const result = await saveBookDetails({
                title, 
                author,         
                summary                     
            })

            return res.status(200).json({success : true, message: 'book info added', data: result, code: 200})
        }
    } catch (e) {
        return res.status(400).json({ success : false, message : e.message, data: {}, code: 400})
    }
         
}



// View a list of all books ====================================================================
 //=== usually it should be filter on user basis

const viewAllBooks =  async(req ,res) => { 
    let page = parseInt(req.query.page) || 0
    let chunk = parseInt(req.query.chunk) || 10
   
    try {
        let book = await Book.find().sort({_id:-1}).skip(page * chunk).limit(chunk)
        if( !book ){             
            res.status(400).send({success : false,  message: "There are no books in the data base.", data: {}, code: 400 })
        } else{
            return res.status(200).json({success : true, message: 'all books details', data: book, code: 200})
        }
    } catch (e) {
        res.status(400).send({success : false,  message: e.message, data: {}, code: 400 })
    }
}



// View details of a specific book by its ID ===========================================================================

const getBookDetailsById =  async(req ,res) => {  
    let id = req.params._id   

    try {
       
        let bookDetails = await fetchBook(id)
       console.log(bookDetails)
        if( !bookDetails ){             
            res.status(400).send({success : false,  message: "There is no book in the data with this id", data: {}, code: 400 })
        } else{
            res.status(200).send({ success : true, message: 'Book details fetched', data: bookDetails, code: 200 })
        }    
    } catch (e) {
        res.status(400).send({success : false,  message: e.message, data: {}, code: 400 })
    }
}



//Update a book's details==========================================================

const editBookDetails = async (req, res) => {
try {  
    const { title, author, summary } = req.body;    
    let updates = req.body   
    let id = req.params._id
   
   
        let editedBookdetails = await updateBookDetails({ id }, updates, { new: true })

        if( !editedBookdetails ){             
            res.status(400).send({success : false,  message: "There is no book in the data with this id", data: {}, code: 400 })
        } else{                
             res.status(200).send({ success : true, message: 'book info updated!', data: editedBookdetails, code: 200 })       
        }
    } catch (e) {
        res.status(400).send({success : false,  message: e.message, data: {}, code: 400 })
    }
       
}




// Delete a book ==========================================================================

const deleteBookDetails = async (req, res) => {
    let id = req.params._id

    try {
        const deletedData = await Book.findOneAndDelete({id});

        if( !deletedData ){             
            res.status(400).send({success : false,  message: "There is no book in the data with this id", data: {}, code: 400 })
        } else{ 
            res.status(200).send({ success : true, message: 'book info deleted!', data: deletedData, code: 200 }) 
        }    
      } catch (e) {
        res.status(400).send({success : false,  message: e.message, data: {}, code: 400 })
      }
  
  
}



    

// =====================================================================


module.exports = {
    addBookDetails,
    viewAllBooks,
    getBookDetailsById,
    editBookDetails,
    deleteBookDetails    
}