function addNumbers (x?: number, y?: number):number | string {
    if(x&&y) 
    return(x+y)
    else{
        return("Falta un valor")
    }
}
console.log(addNumbers(1));