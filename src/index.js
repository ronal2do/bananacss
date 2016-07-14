'use strict';

const config = {};
config.bnnSize = require('./bnnSize.js'),
config.bnnPosition = require('./bnnPosition.js'),
config.bnnGradient = require('./bnnGradient.js'),
config.bnnImport = require('./bnnImport.js'),
config.bnnAlign = require('./bnnAlign.js');

const Banana = require('./banana.js');
Banana.run(config);
