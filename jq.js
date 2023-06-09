let lista = [
    {
        nev: "NÉV",
        tul1: "ELSŐ TULAJDONSÁG",
        tul2: "MÁSODIK TULAJDONSÁG",
    },
    {
        nev: "Autó",
        tul1: "piros",
        tul2: "négy kerekű",
    },
    {
        nev: "Saláta",
        tul1: "zöld",
        tul2: "fejes",
    },
    {
        nev: "Bolt",
        tul1: "kicsi",
        tul2: "vegyes",
    },
];

$(function(){
    let feltolt = osszeallit();
    const ARTICLE = $("article");
    ARTICLE.html(feltolt);
});


function osszeallit(){
    let txt = "<table>";
    for (let i = 0; i < lista.length; i++) {
        txt += "<tr>";
        let obj = lista[i]; 
        for (const objElem in obj) {
            let j = 0;
            if (j == 0) {
                txt += `<th>${obj[objElem]}</th>`;
            } else {
                txt += `<td>${obj[objElem]}</td>`;
            }
            j++;
        }
        txt += "</tr>";
    }
    txt += "</table>"
    return txt;
}