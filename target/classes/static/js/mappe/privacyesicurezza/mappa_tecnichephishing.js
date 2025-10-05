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
      { key: "Tecniche di Phishing più comuni", level: 0 },

      { key: "E-mail Phishing", level: 1 },
      { key: "Caratteristiche: messaggi che imitano banche o enti", level: 2 },
      { key: "Meccanismo: link o allegati fraudolenti", level: 2 },
      { key: "Obiettivo: sottrarre credenziali", level: 2 },
      { key: "Esempio: finta e-mail della banca con link sospetto", level: 3 },

      { key: "Spear Phishing", level: 1 },
      { key: "Caratteristiche: messaggi personalizzati con dati reali", level: 2 },
      { key: "Obiettivo: ottenere accesso in ambito aziendale", level: 2 },
      { key: "Esempio: 'Documento urgente progetto Alfa'", level: 3 },
      { key: "Difesa: verificare con altro canale aziendale", level: 3 },

      { key: "Smishing e Vishing", level: 1 },
      { key: "Smishing: SMS con link fraudolenti", level: 2 },
      { key: "Esempio: SMS 'BancaXYZ: attività sospetta…'", level: 3 },
      { key: "Vishing: telefonate che fingono operatori", level: 2 },
      { key: "Esempio: richiesta codice OTP al telefono", level: 3 },
      { key: "Difesa: non cliccare link, non dire codici al telefono", level: 3 },

      { key: "Clone Phishing", level: 1 },
      { key: "Caratteristiche: e-mail legittima duplicata con link malevoli", level: 2 },
      { key: "Esempio: ricevuta duplicata con link fasullo", level: 3 },
      { key: "Difesa: controllare indirizzo del mittente", level: 3 },

      { key: "Pharming", level: 1 },
      { key: "Caratteristiche: reindirizzamento su sito falso", level: 2 },
      { key: "Esempio: digiti www.tuabanca.it → sito falso", level: 3 },
      { key: "Difesa: controllare sempre l’indirizzo completo", level: 3 },

      { key: "Conclusione", level: 0 },
      { key: "Fattore umano = vulnerabilità principale", level: 1 },
      { key: "Difesa più efficace: educazione digitale", level: 1 }
    ],
    [
      { from: "Tecniche di Phishing più comuni", to: "E-mail Phishing" },
      { from: "E-mail Phishing", to: "Caratteristiche: messaggi che imitano banche o enti" },
      { from: "E-mail Phishing", to: "Meccanismo: link o allegati fraudolenti" },
      { from: "E-mail Phishing", to: "Obiettivo: sottrarre credenziali" },
      { from: "E-mail Phishing", to: "Esempio: finta e-mail della banca con link sospetto" },

      { from: "Tecniche di Phishing più comuni", to: "Spear Phishing" },
      { from: "Spear Phishing", to: "Caratteristiche: messaggi personalizzati con dati reali" },
      { from: "Spear Phishing", to: "Obiettivo: ottenere accesso in ambito aziendale" },
      { from: "Spear Phishing", to: "Esempio: 'Documento urgente progetto Alfa'" },
      { from: "Spear Phishing", to: "Difesa: verificare con altro canale aziendale" },

      { from: "Tecniche di Phishing più comuni", to: "Smishing e Vishing" },
      { from: "Smishing e Vishing", to: "Smishing: SMS con link fraudolenti" },
      { from: "Smishing: SMS con link fraudolenti", to: "Esempio: SMS 'BancaXYZ: attività sospetta…'" },
      { from: "Smishing e Vishing", to: "Vishing: telefonate che fingono operatori" },
      { from: "Vishing: telefonate che fingono operatori", to: "Esempio: richiesta codice OTP al telefono" },
      { from: "Smishing e Vishing", to: "Difesa: non cliccare link, non dire codici al telefono" },

      { from: "Tecniche di Phishing più comuni", to: "Clone Phishing" },
      { from: "Clone Phishing", to: "Caratteristiche: e-mail legittima duplicata con link malevoli" },
      { from: "Clone Phishing", to: "Esempio: ricevuta duplicata con link fasullo" },
      { from: "Clone Phishing", to: "Difesa: controllare indirizzo del mittente" },

      { from: "Tecniche di Phishing più comuni", to: "Pharming" },
      { from: "Pharming", to: "Caratteristiche: reindirizzamento su sito falso" },
      { from: "Pharming", to: "Esempio: digiti www.tuabanca.it → sito falso" },
      { from: "Pharming", to: "Difesa: controllare sempre l’indirizzo completo" },

      { from: "Tecniche di Phishing più comuni", to: "Conclusione" },
      { from: "Conclusione", to: "Fattore umano = vulnerabilità principale" },
      { from: "Conclusione", to: "Difesa più efficace: educazione digitale" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);
