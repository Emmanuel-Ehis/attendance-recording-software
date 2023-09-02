/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kokv2fq8",
    "name": "Name",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kokv2fq8",
    "name": "SubjectName",
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
