/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m01ftqce18vrydx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpgm9fgu",
    "name": "ClassName",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "gj6uc5enfybrrdn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "Name",
        "created",
        "updated",
        "Level",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m01ftqce18vrydx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpgm9fgu",
    "name": "ClassName",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "gj6uc5enfybrrdn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "Name"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
