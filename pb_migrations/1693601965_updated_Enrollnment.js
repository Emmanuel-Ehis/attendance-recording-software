/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("77q9rw68v8xkq35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o8cgppz2",
    "name": "StudentID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "r6htir80rkiieve",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nedeynax",
    "name": "TutorID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "npkqscap2jeustw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("77q9rw68v8xkq35")

  // remove
  collection.schema.removeField("o8cgppz2")

  // remove
  collection.schema.removeField("nedeynax")

  return dao.saveCollection(collection)
})
