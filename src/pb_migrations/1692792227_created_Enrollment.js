/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4yttl10ar0t8m6z",
    "created": "2023-08-23 12:03:47.878Z",
    "updated": "2023-08-23 12:03:47.878Z",
    "name": "Enrollment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "enlmcqwi",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ipkafz8c",
        "name": "classID",
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
      },
      {
        "system": false,
        "id": "k0k9kueo",
        "name": "EnrollmentDate",
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
        "id": "s3qwgjns",
        "name": "field1",
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
  const collection = dao.findCollectionByNameOrId("4yttl10ar0t8m6z");

  return dao.deleteCollection(collection);
})
