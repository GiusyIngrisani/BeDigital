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
          maxSize: new go.Size(160, NaN)
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
      { key: "Cos’è l’HTTPS", level: 0 },

      { key: "Definizione", level: 1 },
      { key: "Estensione sicura di HTTP", level: 2 },
      { key: "Usa protocolli TLS/SSL", level: 2 },
      { key: "Protegge da intercettazioni e manomissioni", level: 2 },
      { key: "Esempio: password in busta sigillata", level: 3 },

      { key: "Cifratura delle comunicazioni", level: 1 },
      { key: "Crittografia bidirezionale client-server", level: 2 },
      { key: "Dati sensibili non leggibili da terzi", level: 2 },
      { key: "Integrità preservata contro modifiche", level: 2 },
      { key: "Applicazioni iniziali: pagamenti, e-commerce, accessi aziendali", level: 3 },

      { key: "Diffusione", level: 1 },
      { key: "Esteso oltre i contesti critici", level: 2 },
      { key: "Autenticità siti web", level: 2 },
      { key: "Protezione account e comunicazioni", level: 2 },
      { key: "Tutela identità e cronologia", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Strumento fondamentale per la sicurezza", level: 1 },
      { key: "Adozione universale = condizione essenziale", level: 1 }
    ],
    [
      { from: "Cos’è l’HTTPS", to: "Definizione" },
      { from: "Definizione", to: "Estensione sicura di HTTP" },
      { from: "Definizione", to: "Usa protocolli TLS/SSL" },
      { from: "Definizione", to: "Protegge da intercettazioni e manomissioni" },
      { from: "Definizione", to: "Esempio: password in busta sigillata" },

      { from: "Cos’è l’HTTPS", to: "Cifratura delle comunicazioni" },
      { from: "Cifratura delle comunicazioni", to: "Crittografia bidirezionale client-server" },
      { from: "Cifratura delle comunicazioni", to: "Dati sensibili non leggibili da terzi" },
      { from: "Cifratura delle comunicazioni", to: "Integrità preservata contro modifiche" },
      { from: "Cifratura delle comunicazioni", to: "Applicazioni iniziali: pagamenti, e-commerce, accessi aziendali" },

      { from: "Cos’è l’HTTPS", to: "Diffusione" },
      { from: "Diffusione", to: "Esteso oltre i contesti critici" },
      { from: "Diffusione", to: "Autenticità siti web" },
      { from: "Diffusione", to: "Protezione account e comunicazioni" },
      { from: "Diffusione", to: "Tutela identità e cronologia" },

      { from: "Cos’è l’HTTPS", to: "Conclusione" },
      { from: "Conclusione", to: "Strumento fondamentale per la sicurezza" },
      { from: "Conclusione", to: "Adozione universale = condizione essenziale" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);
