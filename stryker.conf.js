module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "off",
    mutate: [
      'src/**/*.js',
      '!src/*spec.js'
    ],
    babel: {optionsFile: 'babel.config.js'},
    transpilers: [
      'babel'
    ],
  });
};
