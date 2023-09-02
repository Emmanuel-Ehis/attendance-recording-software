/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  collection.name = "Class"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn")

  collection.name = "Classes"

  return dao.saveCollection(collection)
})
