/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  // remove
  collection.schema.removeField("nztnt4xh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nztnt4xh",
    "name": "TutorID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "acmzw0xtv24mzob",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
