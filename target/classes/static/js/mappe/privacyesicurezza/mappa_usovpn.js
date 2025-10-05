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
      { key: "Perché usare una VPN", level: 0 },

      { key: "Accesso sicuro alle reti pubbliche", level: 1 },
      { key: "Protegge credenziali e dati sensibili", level: 2 },
      { key: "Riduce attacchi su Wi-Fi non protetti", level: 2 },

      { key: "Tutela della cronologia", level: 1 },
      { key: "Impedisce tracciamento da ISP e browser", level: 2 },
      { key: "Previene profilazione commerciale", level: 2 },

      { key: "Accesso a contenuti limitati", level: 1 },
      { key: "Bypass restrizioni geografiche", level: 2 },
      { key: "Streaming e servizi bloccati", level: 2 },

      { key: "Protezione dell’identità", level: 1 },
      { key: "Anonimizza l’IP", level: 2 },
      { key: "Maggiore libertà di espressione", level: 2 },
      { key: "Limite: i dati che condividi restano riconducibili a te", level: 3 },

      { key: "Conclusione", level: 0 },
      { key: "Sicurezza + Privacy + Accesso ai contenuti", level: 1 },
      { key: "Strumento utile per utenti e aziende", level: 1 }
    ],
    [
      { from: "Perché usare una VPN", to: "Accesso sicuro alle reti pubbliche" },
      { from: "Accesso sicuro alle reti pubbliche", to: "Protegge credenziali e dati sensibili" },
      { from: "Accesso sicuro alle reti pubbliche", to: "Riduce attacchi su Wi-Fi non protetti" },

      { from: "Perché usare una VPN", to: "Tutela della cronologia" },
      { from: "Tutela della cronologia", to: "Impedisce tracciamento da ISP e browser" },
      { from: "Tutela della cronologia", to: "Previene profilazione commerciale" },

      { from: "Perché usare una VPN", to: "Accesso a contenuti limitati" },
      { from: "Accesso a contenuti limitati", to: "Bypass restrizioni geografiche" },
      { from: "Accesso a contenuti limitati", to: "Streaming e servizi bloccati" },

      { from: "Perché usare una VPN", to: "Protezione dell’identità" },
      { from: "Protezione dell’identità", to: "Anonimizza l’IP" },
      { from: "Protezione dell’identità", to: "Maggiore libertà di espressione" },
      { from: "Protezione dell’identità", to: "Limite: i dati che condividi restano riconducibili a te" },

      { from: "Perché usare una VPN", to: "Conclusione" },
      { from: "Conclusione", to: "Sicurezza + Privacy + Accesso ai contenuti" },
      { from: "Conclusione", to: "Strumento utile per utenti e aziende" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);
