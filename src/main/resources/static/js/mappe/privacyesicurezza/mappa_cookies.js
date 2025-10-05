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
      { key: "Cosa sono i cookies", level: 0 },

      { key: "Tipologie di cookies", level: 1 },
      { key: "Cookies di sessione", level: 2 },
      { key: "Gestiscono login o carrelli", level: 2 },
      { key: "Esempio: carrello svuotato alla chiusura browser", level: 3 },

      { key: "Cookies persistenti", level: 2 },
      { key: "Restano dopo la chiusura", level: 2 },
      { key: "Esempio: sito ricorda la lingua scelta", level: 3 },

      { key: "Cookies di prima parte", level: 2 },
      { key: "Installati dal sito visitato", level: 2 },
      { key: "Esempio: preferenze tema o lingua", level: 3 },

      { key: "Cookies di terze parti", level: 2 },
      { key: "Installati da domini esterni", level: 2 },
      { key: "Esempio: pubblicità mirata da inserzionisti", level: 3 },

      { key: "Funzionamento tecnico", level: 1 },
      { key: "Server invia cookie al browser", level: 2 },
      { key: "Contiene ID, preferenze o dati sessione", level: 2 },
      { key: "Browser restituisce cookie al ritorno", level: 2 },
      { key: "Esempio: ID utente riconosciuto al login", level: 3 },

      { key: "Tracciamento utenti", level: 1 },
      { key: "Registrano pagine visitate e ricerche", level: 2 },
      { key: "Profilazione pubblicitaria", level: 2 },
      { key: "Pixel invisibili segnalano visite", level: 3 },
      { key: "Browser fingerprinting riconosce dispositivo", level: 3 },

      { key: "Privacy e normative", level: 1 },
      { key: "GDPR e ePrivacy impongono consenso", level: 2 },
      { key: "Trasparenza sulle finalità", level: 2 },
      { key: "Possibilità di revoca/modifica scelte", level: 2 },

      { key: "Conclusione", level: 0 },
      { key: "Strumenti utili ma usati per tracciamento", level: 1 },
      { key: "Conoscenza = controllo sui propri dati", level: 1 }
    ],
    [
      { from: "Cosa sono i cookies", to: "Tipologie di cookies" },
      { from: "Tipologie di cookies", to: "Cookies di sessione" },
      { from: "Tipologie di cookies", to: "Gestiscono login o carrelli" },
      { from: "Gestiscono login o carrelli", to: "Esempio: carrello svuotato alla chiusura browser" },

      { from: "Tipologie di cookies", to: "Cookies persistenti" },
      { from: "Cookies persistenti", to: "Restano dopo la chiusura" },
      { from: "Restano dopo la chiusura", to: "Esempio: sito ricorda la lingua scelta" },

      { from: "Tipologie di cookies", to: "Cookies di prima parte" },
      { from: "Cookies di prima parte", to: "Installati dal sito visitato" },
      { from: "Installati dal sito visitato", to: "Esempio: preferenze tema o lingua" },

      { from: "Tipologie di cookies", to: "Cookies di terze parti" },
      { from: "Cookies di terze parti", to: "Installati da domini esterni" },
      { from: "Installati da domini esterni", to: "Esempio: pubblicità mirata da inserzionisti" },

      { from: "Cosa sono i cookies", to: "Funzionamento tecnico" },
      { from: "Funzionamento tecnico", to: "Server invia cookie al browser" },
      { from: "Funzionamento tecnico", to: "Contiene ID, preferenze o dati sessione" },
      { from: "Funzionamento tecnico", to: "Browser restituisce cookie al ritorno" },
      { from: "Browser restituisce cookie al ritorno", to: "Esempio: ID utente riconosciuto al login" },

      { from: "Cosa sono i cookies", to: "Tracciamento utenti" },
      { from: "Tracciamento utenti", to: "Registrano pagine visitate e ricerche" },
      { from: "Tracciamento utenti", to: "Profilazione pubblicitaria" },
      { from: "Tracciamento utenti", to: "Pixel invisibili segnalano visite" },
      { from: "Tracciamento utenti", to: "Browser fingerprinting riconosce dispositivo" },

      { from: "Cosa sono i cookies", to: "Privacy e normative" },
      { from: "Privacy e normative", to: "GDPR e ePrivacy impongono consenso" },
      { from: "Privacy e normative", to: "Trasparenza sulle finalità" },
      { from: "Privacy e normative", to: "Possibilità di revoca/modifica scelte" },

      { from: "Cosa sono i cookies", to: "Conclusione" },
      { from: "Conclusione", to: "Strumenti utili ma usati per tracciamento" },
      { from: "Conclusione", to: "Conoscenza = controllo sui propri dati" }
    ]);
}

window.addEventListener("DOMContentLoaded", init);
