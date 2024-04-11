function pieceOfPie(array, start, end) {
let stratIdx= array.indexOf(start)
let endIdx = array.indexOf(end)
let finalList = []
for (let i=stratIdx; i<=endIdx; i++){
    let element = array[i]
    finalList.push(element)
}
return finalList

}
// console.log(pieceOfPie(['Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'));
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));