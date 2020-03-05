module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "off",
    files: [
      'src/**/*.js',
    ],
    babel: {
      optionsFile: 'babel.config.js',
      options: {
        cwd: 'src',
        presets: ['@babel/env'],
      },
      extensions: ['.js']
    },
    transpilers: [
      'babel'
    ],
  });
};
