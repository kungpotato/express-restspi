var bookController = function(Book){
    var post = (req, res)=>{
        var book = new Book(req.body)

        book.save();
        res.status(201).send(book);
    }
    
    var get = (req,res)=>{
        // var responseJson = {hello: "This is my api"}
        // res.json(responseJson)

        var query = {};

        if(req.query.genre)
        // ถ้ามีค่าให้แสดง
        {
            query.genre = req.query.genre;
        }

        Book.find(query, function(err,books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    }
    return {
        post: post,
        get:get
    }
}

module.exports = bookController;