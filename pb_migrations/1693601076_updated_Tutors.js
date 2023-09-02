/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npkqscap2jeustw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjounkfa",
    "name": "Avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("npkqscap2jeustw")

  // remove
  collection.schema.removeField("yjounkfa")

  return dao.saveCollection(collection)
})
