var express = require('express');

var routes = function(Book){
    var bookRouter = express.Router();

    bookRouter.route('/')
        .post((req, res)=>{
            var book = new Book(req.body) // ต้องลง body-parser ก่อน
            //console.log(book)
            book.save()
            res.status(201).send(book) // 201 is created ส่ง id กลับไปหาคน call
        })
        .get((req,res)=>{
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
        });

    bookRouter.route('/:bookId')
        .get(function(req,res){


            Book.findById(req.params.bookId, function(err,book){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(book);
            });
        });
    return bookRouter;
}

module.exports = routes;