/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pkh8dgw5juppehz",
    "created": "2023-09-01 20:46:50.352Z",
    "updated": "2023-09-01 20:46:50.352Z",
    "name": "Sessions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "su5u79l1",
        "name": "StartTime",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jt06vlub",
        "name": "EndTime",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("pkh8dgw5juppehz");

  return dao.deleteCollection(collection);
})
