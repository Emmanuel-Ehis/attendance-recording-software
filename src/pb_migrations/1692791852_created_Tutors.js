/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "acmzw0xtv24mzob",
    "created": "2023-08-23 11:57:32.153Z",
    "updated": "2023-08-23 11:57:32.153Z",
    "name": "Tutors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rsykvzgy",
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
        "id": "vkmaqhie",
        "name": "Email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "s1u53xcj",
        "name": "Subjet",
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
  const collection = dao.findCollectionByNameOrId("acmzw0xtv24mzob");

  return dao.deleteCollection(collection);
})
