const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
    id: "pt.nuvio.private.streams",
    version: "1.0.0",
    name: "Private Streams",
    description: "Addon privado apenas para fontes de reprodução",

    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"],

    // Sem catálogo = nada aparece na Home
    catalogs: []
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async (args) => {
    console.log("Pedido recebido:", args.type, args.id);

    return {
        streams: []
    };
});

serveHTTP(builder.getInterface(), {
    port: process.env.PORT || 7000
});
