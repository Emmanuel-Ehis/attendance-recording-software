/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lzb7jrfj1ur424p",
    "created": "2023-09-01 08:21:27.786Z",
    "updated": "2023-09-01 08:21:27.786Z",
    "name": "Tutors",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nzmv1zz9",
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
        "id": "qmtxxs9b",
        "name": "Class",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "gj6uc5enfybrrdn",
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
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": false,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "requireEmail": true
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lzb7jrfj1ur424p");

  return dao.deleteCollection(collection);
})
