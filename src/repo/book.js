const { Book } = require('../config/dbConfig')


// =====================================
const saveBookDetails = async (data) => {
    const BookData = new Book({
      
        title: data.title, 
        author: data.author,         
        summary: data.summary
      
    })

    return await BookData.save()
}


// ================================================
const updateBookDetails = async (condition, data) => {
    try {
        const doc = await Book.findOneAndUpdate({ ...condition }, { ...data }, { new: true });
        if(!!doc) return doc
    } catch (error) {
        console.log('Error While updating bookdata!')
    }
}


// ======== if user collection will be used and book details as per user required =============================================
const fetchBookData = async (userid) => await Book.find({ user: userid })




// ===================================================
const fetchBookDataById = async (id) => await Book.findOne({ _id :id })




// ======================================================================

const fetchBook = async condition => {
    try {
        const book = await Book.findOne({ ...condition })
        if(!!book) return {  book }
        // return 'No details found for this detail!'
    } catch (error) {
        console.log('Error while fetching')
    }
}




module.exports = {
    saveBookDetails,
    updateBookDetails,
    fetchBookData ,
    fetchBookDataById ,
    fetchBook 
}