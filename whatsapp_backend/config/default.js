var config={};


/********************Mongo config*************************/
config.dbConfig={};

config.dbConfig.host="localhost"
config.dbConfig.name="whatsappMERN"
config.dbConfig.uri="mongodb://"+dbConfig.host+"/"+dbConfig.name;

/********************Express Server config*************************/
config.server = {}
config.server.host = '0.0.0.0'
config.server.port = 8012

module.exports=config;