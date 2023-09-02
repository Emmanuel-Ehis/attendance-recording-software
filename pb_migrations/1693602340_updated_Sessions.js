/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pkh8dgw5juppehz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ns8fuwcj",
    "name": "WeekDay",
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
  const collection = dao.findCollectionByNameOrId("pkh8dgw5juppehz")

  // remove
  collection.schema.removeField("ns8fuwcj")

  return dao.saveCollection(collection)
})
