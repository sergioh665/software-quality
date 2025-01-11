const sonarqubeScanner = require('sonarqube-scanner');

console.log(sonarqubeScanner);

sonarqubeScanner({
   serverUrl: 'https://sonarcloud.io',
   token: '287cbdc2c28411128a44df7932c9596110f23133',
   options: {
      'sonar.projectKey': 'sergioh665_software-quality',
      'sonar.organization': 'sergioh665',
      'sonar.sources': './src',
   },
}, () => process.exit());
