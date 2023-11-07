const router = require("express").Router(); 

const { addBookDetails,viewAllBooks,getBookDetailsById,editBookDetails,deleteBookDetails  } = require('../controllers/BookController')




// ============================ authentication middleware , authorization can also be included as middleware=======================================

router.route('/addBookDetails')
 .post( addBookDetails);

router.route('/viewAllBooks')  
 .get( viewAllBooks)

router.route('/getBookDetailsById/:_id')  
 .get( getBookDetailsById)

router.route('/editBookDetails/:_id')
 .put(editBookDetails)

router.route('/deleteBookDetails/:_id')
 .delete(deleteBookDetails)


 

 




// =======================================================================

 module.exports = router;