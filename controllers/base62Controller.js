// base62
characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function encode(num) {
    if(num===0)
        return characters[0];
    var encoded = "";
    var base = 62;
    while(num>0){
        var r = num%base;
        num = Math.floor(num/base);
        encoded=characters[r]+encoded;
    }
    decode(encoded);
    return encoded;
}

function decode(str) {
    var res=0,len = str.length;
    for(var i=0;i<len;i++){
        var k =0;
        var char = str.charCodeAt(i);
        if(char<58){ // 0-9
            k = char-48;
        } else if(char<91){ // A-Z
            k = char-55; // char-65+10 where 10 for last 10 digits
        }
        else { // a-z
            k = char-61; // char-97+10+26 where 10+26 for 10 digits and 26 small letters
        }
        res+= k*Math.pow(62,len-i-1);
    }
    return res;
}
module.exports.encode = encode;
module.exports.decode = decode;
