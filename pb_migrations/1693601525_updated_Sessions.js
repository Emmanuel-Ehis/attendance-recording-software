/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkh8dgw5juppehz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kr6rznlw",
    "name": "SubjectID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "cp5ydwfwxyfammv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oklugwls",
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
  const collection = dao.findCollectionByNameOrId("pkh8dgw5juppehz")

  // remove
  collection.schema.removeField("kr6rznlw")

  // remove
  collection.schema.removeField("oklugwls")

  return dao.saveCollection(collection)
})
