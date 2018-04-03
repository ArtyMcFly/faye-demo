# Pub/Sub - Notifications/Messaging Boilerplate

A fun quick approach at publication/subscription mechanics in web applications.

## Bayeux

The Bayeux specification establishes a similar pattern that you'd expect with a socket connection, 
with HTTP in mind for the implementation. The biggest difference from sockets being an endpoint, ie _channel_ 
instead of an IP:PORT being the binding point.

More directly, a protocol for bidirectional data on the web:
client - server
server - client
client - client (via server)

[More on Bayeux](https://docs.cometd.org/current/reference/index.html#_bayeux)

## Enter into the arena, Faye

Faye is special because it implements the bayeux protocol over HTML5 WebSockets, falling back onto
AJAX (HTTP Polling) when WebSockets are not supported.

It's also special because it's super simple to setup and use standalone.

## Prereqs

1. Docker installed locally (beware... windows + docker != good)
2. Yarn and/or NPM installed
3. git installed
4. Chrome installed (`sub.domain.localhost` doesn't work as expected in all browsers witout doing some DNS spoofing, it works on Chrome though)




