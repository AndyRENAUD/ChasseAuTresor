function drawTableau2D(x,y,emplacement) {
    let idString = ""
    let texte = "<table>"
    
    for (let xx=0; xx < x; xx++) {
        texte += `<tr>`
        for (let yy=0; yy < y; yy++) {
            idString = xx+"-"+yy
            texte += `<td id="${idString}"></td>`
        }
        texte += `</tr>`
    }
    texte += `</table>`
    document.getElementById(emplacement).innerHTML = texte
}
drawTableau2D(10,10,"ici")