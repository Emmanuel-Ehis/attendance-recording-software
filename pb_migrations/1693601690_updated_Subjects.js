/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj81kdqp",
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
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gj81kdqp",
    "name": "field",
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
})
