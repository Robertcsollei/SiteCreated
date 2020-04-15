const Fs = require('fs')

function createdDate (file) {  
    const { birthtime } = Fs.statSync(file)
    
    return birthtime
}
    
    let date = new Date();
    let origin = createdDate('./index.html');
    var runtime = date.getTime() - origin.getTime() ;
    runtime = Math.round( runtime / (1000 * 3600 * 24));
    
    var stream = Fs.createWriteStream("cache.js");
    stream.once('open', function(fd) {
    stream.write("let origin = " + runtime);

    stream.end();
});