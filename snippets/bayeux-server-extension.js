bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
bayeux.attach(server);