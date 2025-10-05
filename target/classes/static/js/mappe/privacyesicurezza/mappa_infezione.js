function init() {
  var $ = go.GraphObject.make;
  var myDiagram = $(go.Diagram, "myDiagramDiv", {
    "undoManager.isEnabled": true,
    initialAutoScale: go.Diagram.UniformToFill,
    initialViewportSpot: go.Spot.Center,
    initialDocumentSpot: go.Spot.Center,
    layout: $(go.TreeLayout, { angle: 90, layerSpacing: 40 })
  });

  function getColor(level) {
    switch (level) {
      case 0: return "#f4e58f"; // root
      case 1: return "#a9d8ec"; // blu
      case 2: return "#a7f3a7"; // verde
      case 3: return "#ffc8d0"; // rosso
      default: return "#e8e7e7";
    }
  }

  myDiagram.nodeTemplate =
    $(go.Node, "Auto",
      $(go.Shape, "RoundedRectangle",
        { stroke: null },
        new go.Binding("fill", "level", getColor)),
      $(go.TextBlock,
        {
          margin: 8,
          font: "8pt Montserrat, sans-serif",
          textAlign: "center",
          wrap: go.TextBlock.WrapFit,
          maxSize: new go.Size(170, NaN)
        },
        new go.Binding("text", "key"))
    );

  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.Orthogonal, curve: go.Link.None, corner: 0 },
      $(go.Shape, { strokeWidth: 1, stroke: "#555" }),
      $(go.Shape, { toArrow: "Standard", stroke: null, fill: "#555" })
    );

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Fase di INFEZIONE", level: 0 },

      { key: "Obiettivo", level: 1 },
      { key: "Penetrare nel sistema e garantire esecuzione", level: 2 },

      { key: "Canali principali di infezione", level: 1 },

      { key: "Trasferimento fisico", level: 2 },
      { key: "Supporti rimovibili (USB, CD, ecc.)", level: 2 },
      { key: "Esempio: Stuxnet diffuso via chiavette USB", level: 3 },
      { key: "Caso pratico: chiavetta trovata in ufficio", level: 3 },

      { key: "Posta elettronica", level: 2 },
      { key: "Allegati mascherati (doc, pdf, macro)", level: 2 },
      { key: "Esempio storico: Melissa (1999)", level: 3 },
      { key: "Esempio pratico: 'fattura.pdf' che installa malware", level: 3 },

      { key: "Web", level: 2 },
      { key: "Download volontario di file malevoli", level: 2 },
      { key: "Drive-by download sfruttando vulnerabilità", level: 2 },

      { key: "Attivazione del malware", level: 1 },
      { key: "Tecniche di mascheramento in contenuti legittimi", level: 2 },
      { key: "Modifica header/file eseguibili per eseguire prima il codice malevolo", level: 2 },
      { key: "Esempio: virus che si accoda al codice originale", level: 3 },

      { key: "Risultato", level: 1 },
      { key: "Esecuzione nascosta del codice e persistenza", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Infezione = mix di vulnerabilità tecniche e fattore umano", level: 1 },
      { key: "Mascheramento è chiave per superare le difese iniziali", level: 1 }
    ],
    [
      { from: "Fase di INFEZIONE", to: "Obiettivo" },

      { from: "Fase di INFEZIONE", to: "Canali principali di infezione" },
      { from: "Canali principali di infezione", to: "Trasferimento fisico" },
      { from: "Trasferimento fisico", to: "Supporti rimovibili (USB, CD, ecc.)" },
      { from: "Supporti rimovibili (USB, CD, ecc.)", to: "Esempio: Stuxnet diffuso via chiavette USB" },
      { from: "Supporti rimovibili (USB, CD, ecc.)", to: "Caso pratico: chiavetta trovata in ufficio" },

      { from: "Canali principali di infezione", to: "Posta elettronica" },
      { from: "Posta elettronica", to: "Allegati mascherati (doc, pdf, macro)" },
      { from: "Posta elettronica", to: "Esempio storico: Melissa (1999)" },
      { from: "Posta elettronica", to: "Esempio pratico: 'fattura.pdf' che installa malware" },

      { from: "Canali principali di infezione", to: "Web" },
      { from: "Web", to: "Download volontario di file malevoli" },
      { from: "Web", to: "Drive-by download sfruttando vulnerabilità" },

      { from: "Fase di INFEZIONE", to: "Attivazione del malware" },
      { from: "Attivazione del malware", to: "Tecniche di mascheramento in contenuti legittimi" },
      { from: "Attivazione del malware", to: "Modifica header/file eseguibili per eseguire prima il codice malevolo" },
      { from: "Attivazione del malware", to: "Esempio: virus che si accoda al codice originale" },

      { from: "Fase di INFEZIONE", to: "Risultato" },
      { from: "Risultato", to: "Esecuzione nascosta del codice e persistenza" },

      { from: "Fase di INFEZIONE", to: "Conclusione" },
      { from: "Conclusione", to: "Infezione = mix di vulnerabilità tecniche e fattore umano" },
      { from: "Conclusione", to: "Mascheramento è chiave per superare le difese iniziali" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);
