export const notNullValidation=(data)=>{
    const {title,content,comment} = data
    let regex = /^\s*$/;
 if (regex.test(title||content||comment)) {
    return false;
 } else {
    return true;
 }
}