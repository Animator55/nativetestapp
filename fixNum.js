export default function fixNum(number){
    let string = `${number}`

    if(string.length === 2) return string
    return "0"+string
}