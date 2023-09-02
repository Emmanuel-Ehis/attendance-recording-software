/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cp5ydwfwxyfammv",
    "created": "2023-09-01 20:47:22.689Z",
    "updated": "2023-09-01 20:47:22.689Z",
    "name": "Subjects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kvojdf5y",
        "name": "Name",
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
        "id": "gj81kdqp",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("cp5ydwfwxyfammv");

  return dao.deleteCollection(collection);
})
