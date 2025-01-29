export const add = (num1,num2)=>{
    if( typeof num1 !== "number" || typeof num2 !== "number"){
        return 0;
    }

    return num1 + num2 ;
} 


export const reverseString = (value) =>{
return value.split("").reverse().join("");
}