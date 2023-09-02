/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "77q9rw68v8xkq35",
    "created": "2023-09-01 20:48:22.993Z",
    "updated": "2023-09-01 20:48:22.993Z",
    "name": "Enrollnment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "do0rzsfd",
        "name": "EnrollmentDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("77q9rw68v8xkq35");

  return dao.deleteCollection(collection);
})
