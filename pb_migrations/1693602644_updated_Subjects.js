/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv")

  collection.name = "Subject"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv")

  collection.name = "Subjects"

  return dao.saveCollection(collection)
})
