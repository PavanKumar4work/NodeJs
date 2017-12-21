var localfs = require('fs');
var fileName = 'testfile.txt';

var fileWData = "Hello everyOne just writing a demo code to check write operation";


// Check if file exists
if(localfs.existsSync(fileName) == true){

    // Writing data to file synchronously
    localfs.writeFileSync(fileName, fileWData);
    console.log(fileName + " : Data write successful");

    // Reading data from file synchronously
    let fileRData = localfs.readFileSync(fileName);
    console.log("Data Read from file: \n" + fileRData.toString());
}else{
    console.error("File Does not exists");
}
