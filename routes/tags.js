const to = require('../utils/to');
const db = require('../config/conn');
const tools = require('../utils/tools');


exports.createTag = async(req,res) =>{
    let arr = tools.sqlvals(req.body);

    [err,result] = await to(db.query('INSERT INTO TAG(title) values (?);',req.body.title ) );

    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        console.log(result);
        return res.sendSuccess(null,'Inserted Data');
    }

};

exports.delTag = async(req,res) => {

    [err,result] = await to(db.query('DELETE FROM TAG WHERE id = ?;',req.body.id));

    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        [err2,result2] = await to(db.query('DELETE FROM TAGSOFBOOK where TAGID = ?;',req.body.id));

        if(err2){
            console.log(err);
            return res.sendError(null);
        }

        else{
            return res.sendSuccess(null,'Tag removed');
        }
    }

};

exports.addTag = async(req,res) =>{
    [err,result] = await to (db.query('INSERT INTO TAGSOFBOOK(BOOKMARKID,TAGID) VALUES (?,?);' ,[req.body.bookmarkid,req.body.tagid]));

    if(err){
        console.log(err);
        return res.sendError(null);
    }

    else{
        return res.sendSuccess(null,'done');
    }
};

exports.removeTag = async(req,res) =>{

    [err,result] = await to (db.query ('DELETE FROM TAGSOFBOOK(BOOKMARKID,TAGID) VALUES(?,?);',[req.body.bookmarkid,req.body.tagid]));

    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        return res.sendSuccess(null,'Tag removed from bookmark');
    }

};

exports.getallTags = async(req,res) => {
    [err,result] = await to (db.query('SELECT * FROM TAG;'));

    if(err){
        console.log(err);
        return res.sendError(null);
    }
    else{
        return res.sendSuccess(result);
    }
};