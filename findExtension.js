function findExtension(filename){
    var lastDotPosition = filename.lastIndexOf(".");
    if (lastDotPosition === -1)  throw new Error("Error");
    else return filename.substr(lastDotPosition+1);
}
