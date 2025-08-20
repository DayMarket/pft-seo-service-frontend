const { generateApi } = require('swagger-typescript-api');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
console.log(process.env.VITE_APP_SWAGGER_ENDPOINT);

const filePath = path.resolve(__dirname, '../src/shared/api/api-service');

generateApi({
  name: 'api.ts',
  output: filePath,
  url: process.env.VITE_APP_SWAGGER_ENDPOINT,
  templates: filePath,
  httpClientType: 'axios',
  defaultResponseAsSuccess: false,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: true,
  extractRequestBody: true,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript',
  },
  defaultResponseType: 'void',
  singleHttpClient: false,
  cleanOutput: false,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  extraTemplates: [],
})
  // @ts-expect-error
  .catch((e) => console.error(e));
