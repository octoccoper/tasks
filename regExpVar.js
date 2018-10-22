function regexVar(x) {
    let re = x.match(/^([aeiou]).*\1$/);
    return re ? true : false;
}
