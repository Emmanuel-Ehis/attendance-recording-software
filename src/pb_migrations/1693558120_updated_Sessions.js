/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m01ftqce18vrydx")

  // remove
  collection.schema.removeField("dti0w1em")

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ds8mn9rt",
    "name": "Day_of_week",
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
    "id": "dti0w1em",
    "name": "Date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("zfeyxfkv")

  // remove
  collection.schema.removeField("bs3rac0i")

  // remove
  collection.schema.removeField("ds8mn9rt")

  return dao.saveCollection(collection)
})
