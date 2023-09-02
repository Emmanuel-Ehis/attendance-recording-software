/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m01ftqce18vrydx")

  // remove
  collection.schema.removeField("zfeyxfkv")

  // remove
  collection.schema.removeField("bs3rac0i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzkju8y7",
    "name": "Start_time",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxzouju0",
    "name": "End_time",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m01ftqce18vrydx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfeyxfkv",
    "name": "start_time",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bs3rac0i",
    "name": "End_time",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("bzkju8y7")

  // remove
  collection.schema.removeField("oxzouju0")

  return dao.saveCollection(collection)
})
