/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gj6uc5enfybrrdn",
    "created": "2023-08-23 12:02:20.858Z",
    "updated": "2023-08-23 12:02:20.858Z",
    "name": "Classes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nztnt4xh",
        "name": "TutorID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "acmzw0xtv24mzob",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "kokv2fq8",
        "name": "SubjectName",
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
        "id": "kd7dguqf",
        "name": "Level",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("gj6uc5enfybrrdn");

  return dao.deleteCollection(collection);
})
