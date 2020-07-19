const to = require('../utils/to');
const db = require('../config/conn');
const tools = require("../utils/tools");

exports.addBookmark = async(req,res) =>{
    let arr = tools.sqlvals(req.body);

    [err,result] = await to(db.query('INSERT INTO BOOKMARK(Link,Title,Publisher) VALUES (?,?,?);',[req.body.link,req.body.title,req.body.publisher] ) );

    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        console.log(result);
        return res.sendSuccess(null,'Inserted Data');
    }

    
};

exports.delBookmark = async(req,res) =>{

    [err,result1] = await to(db.query('DELETE FROM TAGSOFBOOK WHERE BOOKMARKID = ?',req.body.id));

    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        
        [err2,result2] = await to(db.query ('DELETE FROM BOOKMARK WHERE id = ?',req.body.id) );

        if(err2){
            console.log(err2);
            return res.sendError(null);
        }
        else{
            return res.sendSuccess(null,'Records deleted');
        }
    }

};


exports.getallBookmarks = async(req,res) =>{

    [err,result ] = await to ( db.query ('SELECT * FROM BOOKMARK ;'));
    
    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        return res.sendSuccess(result,'all records');
    }

};

