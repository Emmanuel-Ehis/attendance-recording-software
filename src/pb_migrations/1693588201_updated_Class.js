/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vad7vpmw",
    "name": "Initials",
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
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  // remove
  collection.schema.removeField("vad7vpmw")

  return dao.saveCollection(collection)
})
