# Pub/Sub - Notifications/Messaging Boilerplate

A fun quick approach at publication/subscription mechanics in web applications.

## Bayeux

The Bayeux specification establishes a similar pattern that you'd expect with a socket connection, 
with HTTP in mind for the implementation. The biggest difference from sockets being an endpoint, ie _channel_ 
instead of an IP:PORT being the binding point.

More directly, a protocol for bidirectional data on the web:

* client - server
* server - client
* client - client (via server)

[More on Bayeux](https://docs.cometd.org/current/reference/index.html#_bayeux)

## Enter into the arena, Faye

Faye is special because it implements the bayeux protocol over HTML5 [WebSockets](https://www.websocket.org/aboutwebsocket.html), falling back onto
AJAX (HTTP Polling) when WebSockets are not supported.

It's also special because it's super simple to setup and use standalone.

[More on Faye](https://faye.jcoglan.com/)

## Prereqs

1. [Docker installed](https://docs.docker.com/install/) locally (beware... windows + docker != good)
2. [Yarn](https://yarnpkg.com/lang/en/docs/install/) and/or [NPM](https://www.npmjs.com/get-npm) installed
3. git installed
4. Chrome installed (`sub.domain.localhost` doesn't work as expected in all browsers witout doing some DNS spoofing, it works on Chrome though)
5. Deployment Provisioned (will be using AWS under the hood)

## Supplementary Tools

1. [Traefik](https://docs.traefik.io/) Modern HTTP reverse Proxy -- super friendly with Docker
2. [Alpine Linux](https://alpinelinux.org/about/) -- extremely small OS thats docker and microservice friendly
3. [Docker Compose](https://docs.docker.com/compose/) -- a docker tool that consolidates many of the one off docker commands
4. [NGINX](https://www.nginx.com/) -- another proxy, but in this case, used to serve stateless browser files

## Manual Labor

1. Setup Directory/Build Structure
2. Create a Server code base
    1. Create Node HTTP Server
    2. Add Faye extension to HTTP Server
3. Create Client code base
    1. Boilerplate the HTML file
    2. Insert Faye Endpoint for Faye library.js file
    3. Initialize Faye
    4. Subscribe to a channel
    5. Publish to a channel
    6. Show Subscribed/Published messages in Console
    7. Add HTML/JS code for text inputs
    8. Add HTML/JS code for subscribing with an alias
4. Build & Deploy the docker images
    1. Build the images
    2. Show how small the images are
    3. Push images/Pull on AWS
    4. Deploy and watch messages roll!