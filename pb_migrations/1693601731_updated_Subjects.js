/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lg8bdifr",
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
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv")

  // remove
  collection.schema.removeField("lg8bdifr")

  return dao.saveCollection(collection)
})
