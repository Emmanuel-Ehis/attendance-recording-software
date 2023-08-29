/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m01ftqce18vrydx",
    "created": "2023-08-23 12:08:27.031Z",
    "updated": "2023-08-23 12:08:27.031Z",
    "name": "Sessions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dti0w1em",
        "name": "Date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "hpgm9fgu",
        "name": "ClassID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "gj6uc5enfybrrdn",
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
  const collection = dao.findCollectionByNameOrId("m01ftqce18vrydx");

  return dao.deleteCollection(collection);
})
