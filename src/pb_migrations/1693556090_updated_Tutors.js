/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("acmzw0xtv24mzob")

  // remove
  collection.schema.removeField("lox5xklv")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("acmzw0xtv24mzob")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lox5xklv",
    "name": "class",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "gj6uc5enfybrrdn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
