/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zqzq8s2b817y8s0",
    "created": "2023-08-23 12:06:07.293Z",
    "updated": "2023-08-23 12:06:07.293Z",
    "name": "Attendance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "12dt3nlg",
        "name": "StudentID",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "yv1obwdm",
        "name": "ClassID",
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
      },
      {
        "system": false,
        "id": "gff8xtz7",
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
        "id": "3ifvas9d",
        "name": "AtendanceStatus",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Present",
            "Absent"
          ]
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
  const collection = dao.findCollectionByNameOrId("zqzq8s2b817y8s0");

  return dao.deleteCollection(collection);
})
