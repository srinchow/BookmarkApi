Create Trigger t1 
AFTER INSERT 
ON TAGSOFBOOK FOR EACH ROW
UPDATE BOOKMARK 
SET updatedAt = CURRENT_TIMESTAMP where id = NEW.BOOKMARKID;

Create Trigger t2 
AFTER INSERT 
ON TAGSOFBOOK FOR EACH ROW
UPDATE TAG 
SET updatedAt = CURRENT_TIMESTAMP where id = NEW.TAGID;


Create Trigger t3 
AFTER DELETE 
ON TAGSOFBOOK FOR EACH ROW
UPDATE BOOKMARK 
SET updatedAt = CURRENT_TIMESTAMP where id = OLD.BOOKMARKID;


Create Trigger t4 
AFTER DELETE 
ON TAGSOFBOOK FOR EACH ROW
UPDATE TAG 
SET updatedAt = CURRENT_TIMESTAMP where id = OLD.TAGID;