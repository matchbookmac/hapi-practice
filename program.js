var Hapi = require("hapi");
var Path = require("path");
var server = new Hapi.Server();

server.connection({
  host: "localhost",
  port: Number(process.argv[2] || 8080)
});

// server.route({
//   method: "GET",
//   path: "/",
//   handler: {
//     file: Path.join(__dirname, "index.html")
//   }
// });

server.route({
  method: "GET",
  path: "/{query?}",
  handler: {
    view: "index.html"
  }
});

// server.route({
//   method: "GET",
//   path: "/{name}",
//   handler: helloWorld
// });

server.route({
  method: "GET",
  path: "/proxy",
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535
    }
  }
});

server.route({
  method: "GET",
  path: "/foo/bar/baz/{file*}",
  handler: {
    directory: {
      path: Path.join(__dirname, 'public')
    }
  }
});

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates'),
  helpersPath: 'helpers'
})


function helloWorld(request, reply) {
  reply("Hello " + encodeURIComponent(request.params.name))
};

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
