/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a9q3obj7yx7ce08",
    "created": "2023-09-01 20:45:59.974Z",
    "updated": "2023-09-01 20:45:59.974Z",
    "name": "AttendanceRecords",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wffmiaki",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("a9q3obj7yx7ce08");

  return dao.deleteCollection(collection);
})
