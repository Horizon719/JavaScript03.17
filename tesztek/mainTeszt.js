QUnit.module('osszeallit metodus tesztelese', function() {
    QUnit.test('1. letezik e a fuggveny', function(assert) {
        assert.ok(osszeallit, "Létezik az osszeallit");
    });
    QUnit.test('2. letezik e a fuggveny', function(assert) {
        assert.ok(typeof osszeallit == "function", "Létezik az osszeallit");
    });
    QUnit.test('teljes lista', function(assert) {
        lista = [
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
        assert.equal(osszeallit(lista), "<table><tr><th>NÉV</th><th>ELSŐ TULAJDONSÁG</th><th>MÁSODIK TULAJDONSÁG</th></tr><tr><th>Autó</th><th>piros</th><th>négy kerekű</th></tr><tr><th>Saláta</th><th>zöld</th><th>fejes</th></tr><tr><th>Bolt</th><th>kicsi</th><th>vegyes</th></tr></table>");
    });
});