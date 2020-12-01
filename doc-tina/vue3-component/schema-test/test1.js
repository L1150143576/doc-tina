// Node.js require:
const Ajv = require("ajv")
var localize = require('ajv-i18n');
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // test: false,
      minLength: 10,
      errorMessage: {
        type: "必须是字符串",
        minLength: "长度必须大于10"
      }
    },
    age: {
      type: 'number'
    },
    pets: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    isWorker: {
      type: 'boolean'
    }
  },

}
const ajv = new Ajv({ allErrors: true })
require('ajv-errors')(ajv)
// ajv.addFormat('test', (data) => {
//   console.log(data, '===')
//   return data === 'hahaha'
// })
ajv.addKeyword('test', {
  // macro () {
  //   return {
  //     minLength: 10
  //   }
  // },
  // compile (schema, parentSchema) {
  //   console.log(schema, parentSchema)
  //   return () => true
  // },
  // metaSchema: {
  //   type: 'boolean',

  // },
  validate: function fun (schema, data) {
    fun.errors = [
      {
        keyword: 'test',
        dataPath: '.name',
        schemaPath: '#/properties/name/test',
        params: { keyword: 'test' },
        message: 'hello,msg'
      }
    ]
    return false
  },
  // validate: function (schema, data) {
  //   if (schema === true) {
  //     return true
  //   } 
  //   else {
  //     console.log(data.length)
  //     return data.length === 6
  //   }
  // },
  errors: false

});
var validate = ajv.compile(schema);

var valid = validate({
  name: "hahaha",
  age: 18,
  pets: ['mimi', 'aa'],
  isWorker: true

});

if (!valid) {
  // ru for Russian

  localize.zh(validate.errors);
  console.log(validate.errors);
}