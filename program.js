var Hapi = require("hapi");
var Path = require("path");
var Fs   = require("fs");
var rot13 = require("rot13-transform");
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
  host: "localhost",
  port: Number(process.argv[2] || 8080)
});

// Exercise 1 HELLO_HAPI
// server.route({
//   method: "GET",
//   path: "/",
//   handler: function (request, reply) {
//     reply("Hello Hapi")
//   }
// });

// Exercise 2 ROUTES
// server.route({
//   method: "GET",
//   path: "/{name}",
//   handler: helloWorld
// });

// Exercise 3 HANDLING
// server.route({
//   method: "GET",
//   path: "/",
//   handler: {
//     file: Path.join(__dirname, "index.html")
//   }
// });

// Exercise 4 Directories
// server.route({
//   method: "GET",
//   path: "/foo/bar/baz/{file*}",
//   handler: {
//     directory: {
//       path: Path.join(__dirname, 'public')
//     }
//   }
// });

// Exercise 5 VIEWS
// server.route({
//   method: "GET",
//   path: "/{query?}",
//   handler: {
//     view: "index.html"
//   }
// });

// Exercise 6 PROXIES
// server.route({
//   method: "GET",
//   path: "/proxy",
//   handler: {
//     proxy: {
//       host: '127.0.0.1',
//       port: 65535
//     }
//   }
// });

// Exercise 7 HELPING
// server.route({
//   method: "GET",
//   path: "/{query?}",
//   handler: {
//     view: "template.html"
//   }
// });

// Exercise 8 STREAMS
// server.route({
//   method: "GET",
//   path: "/",
//   config: {
//     handler: function (request, reply) {
//       var thisfile = Fs.createReadStream(Path.join(__dirname, 'rot.txt'));
//       reply(thisfile.pipe(rot13()));
//     }
//   }
// });

// Exercise 9 VALIDATION
// server.route({
//   path: '/chickens/{breed}',
//   method: 'GET',
//   config: {
//     handler: chickenHandler,
//     validate: {
//       params: {
//         breed: Joi.string().required(),
//       }
//     }
//   }
// });

// Exercise 10 VALIDATION USING JOI OBJECT
// server.route({
//   path: '/login',
//   method: 'POST',
//   config: {
//     handler: loginHandler,
//     validate: {
//       payload: Joi.object({
//         isGuest: Joi.boolean().required(),
//         username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
//         accessToken: Joi.string().alphanum(),
//         password: Joi.string().alphanum(),
//       })
//       .options({ allowUnknown: true })
//       .without('password', 'accessToken')
//     }
//   }
// });

// Exercise 11 UPLOADS
// server.route({
//   path: '/upload',
//   method: 'POST',
//   config: {
//
//     handler: uploadHandler,
//
//     payload: {
//       output: 'stream',
//       parse: true
//       allow: 'multipart/form-data'
//     }
//   }
// });

// Exercises 5 & 7
// server.views({
//   engines: {
//     html: require('handlebars')
//   },
//   path: Path.join(__dirname, 'templates'),
//   helpersPath: Path.join(__dirname, 'helpers')
// })

// Exercise 2 ROUTES
// function helloWorld(request, reply) {
//   reply("Hello " + encodeURIComponent(request.params.name));
// }

// Exercise 9 VALIDATION
// function chickenHandler (request, reply) {
//   reply("BOCK");
// }

// Exercise 10 VALIDATION USING JOI OBJECT
// function loginHandler (request, reply) {
//   reply("login successful");
// }

// Exercise 11 UPLOADS
// function uploadHandler(request, reply) {
//   var data = request.payload;
//   var body = '';
//
//   if (data.file) {
//     var name = data.file.hapi.filename;
//     var path = __dirname + "/uploads/" + name;
//     var file = Fs.createWriteStream(path);
//
//     file.on('error', function (err) {
//       console.error(err)
//     });
//
//     data.file.pipe(file);
//
//     data.file.on('data', function (data) {
//       body += data;
//     });
//
//     data.file.on('end', function (err) {
//       var ret = {
//         description: data.description,
//         file: {
//           data: body,
//           filename: data.file.hapi.filename,
//           headers: data.file.hapi.headers
//         }
//       }
//       console.log(data)
//       reply(JSON.stringify(ret));
//     });
//   }
// }

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
