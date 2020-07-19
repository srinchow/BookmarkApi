module.exports = {
    
    sqlvals: function(temp){
        let arr1 = [];
        
        for (const key in temp) {
            if (temp.hasOwnProperty(key)) {
                console.log(key);
                const element = temp[key];
                arr1.push(element);
            }
        }

        console.log(arr1);
        return arr1;

    }

};