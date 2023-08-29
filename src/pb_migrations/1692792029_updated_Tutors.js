/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("acmzw0xtv24mzob")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s1u53xcj",
    "name": "Subject",
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
  const collection = dao.findCollectionByNameOrId("acmzw0xtv24mzob")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s1u53xcj",
    "name": "Subjet",
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
})
