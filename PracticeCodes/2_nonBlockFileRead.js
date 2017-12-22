var fs = require("fs");
var filename = 'test.txt';

if(fs.existsSync(filename) == true){
    
    fs.readFile(filename, function (err, data){
        if(err){
            console.error("Error: readFile failed");
        }else{
            console.log(data.toString());
        }
    });
}else{
    console.error("File does not exists");
}

console.log("End of Program");
