var fs = require("fs");
var filename = 'test.txt';

if(fs.existsSync(filename) == true){
    var data = fs.readFileSync(filename);
    console.log(data.toString());
}else{
    console.error("File does not exists");
}

console.log("End of Program");