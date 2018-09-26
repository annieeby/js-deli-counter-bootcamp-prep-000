function takeANumber(line, name) {
  line.push(name)
  var number = line.length
  return `Welcome, ${name}. You are number ${number} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
  else { 
    return "There is nobody waiting to be served!"
    return katzDeliLine[0]
  }
}


/*
function currentLine(line) {
  if (line.length===0) {
    return "The line is currently empty."
  }
  if (line.length>0) {
    var statement = []
    for(var i=0, n=1; i<line.length; i++, n++) {
      statement.push(`${n}. ${line[i]}`)
    }
    return `The line is currently: ${statement.join(', ')}`
  }
}
*/

function currentLine (line) {
 if (line.length>0) {
   var array=[]
    var statement="The line is currently:"
    for (var i=0; line.length>0; i++) {
  array.push(statement += ` ${i+1}. ${line[i]},`)
    }
   return array;
 }
 else{
     return "The line is currently empty.";
 }
}









/*


*/