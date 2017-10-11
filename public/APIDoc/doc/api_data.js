define({ "api": [
  {
    "type": "delete",
    "url": "api/v1/candidates/:id",
    "title": "Delete Candidate",
    "name": "DeleteCandidates",
    "group": "Candidates",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Position of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "base64",
            "optional": false,
            "field": "cv",
            "description": "<p>CV of Candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Candidate deleted\",\n    \"data\": {\n        \"id\": 14,\n        \"age\": 30,\n        \"experience\": \"test\",\n        \"contacts\": \"test\",\n        \"created_at\": \"2017-10-06T21:11:23.538Z\",\n        \"updated_at\": \"2017-10-06T21:20:19.074Z\",\n        \"level_id\": 1,\n        \"position_id\": 2,\n        \"cv\": {\n            \"url\": \"/uploads/candidate/cv/14/cv.pdf\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CandidateNotFound",
            "description": "<p>Returned if the candidate does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Candidates"
  },
  {
    "name": "GetCandidates",
    "group": "Candidates",
    "type": "get",
    "url": "api/v1/candidates/:id",
    "title": "Get Candidates",
    "description": "<p>Returns all Candidates which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"SUCCESS\",\n   \"message\": \"Candidates loaded\",\n   \"data\": [\n       {\n           \"id\": 8,\n           \"age\": 30,\n           \"experience\": null,\n           \"contacts\": \"sss@qqq.com +15407788878\",\n           \"created_at\": \"2017-10-04T11:37:47.627Z\",\n           \"updated_at\": \"2017-10-04T11:37:47.627Z\",\n           \"level_id\": 1,\n           \"position_id\": 1,\n           \"cv\": {\n               \"url\": \"/uploads/candidate/cv/8/cv.pdf\"\n           }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Position of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "base64",
            "optional": false,
            "field": "cv",
            "description": "<p>CV of Candidate.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CandidateNotFound",
            "description": "<p>The <code>id</code> of the Candidate was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Candidates"
  },
  {
    "type": "pach",
    "url": "api/v1/candidate/:id",
    "title": "Edit candidate",
    "name": "PatchCandidates",
    "group": "Candidates",
    "description": "<p>Replace parts of existing candidate.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Candidate`s position.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "age",
            "description": "<p>Candidate`s age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Parameter",
            "type": "base64",
            "optional": true,
            "field": "CV",
            "description": "<p>Candidate`s CV.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"level_id\": 1,\n \"position_id\": 2,\n \"age\": \"30\",\n \"experience\": \"test\",\n \"contacts\": \"test\",\n \"cv\": \"data:application/pdf;base64, fw3...\"\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Position of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "base64",
            "optional": false,
            "field": "cv",
            "description": "<p>CV of Candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Update candidate\",\n  \"data\": {\n      \"id\": 14,\n      \"age\": 30,\n      \"experience\": \"test\",\n      \"contacts\": \"test\",\n      \"cv\": {\n          \"url\": \"/uploads/candidate/cv/14/cv.pdf\"\n      },\n      \"level_id\": 1,\n      \"position_id\": 2,\n      \"created_at\": \"2017-10-06T21:11:23.538Z\",\n      \"updated_at\": \"2017-10-06T21:16:20.338Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CandidateNotFound",
            "description": "<p>Returned if the candidate does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Candidates"
  },
  {
    "type": "post",
    "url": "api/v1/candidates/",
    "title": "Create Candidates",
    "name": "PostCandidates",
    "group": "Candidates",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Candidate`s level.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Candidate`s position.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "age",
            "description": "<p>Candidate`s age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Parameter",
            "type": "base64",
            "optional": true,
            "field": "CV",
            "description": "<p>Candidate`s CV.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n \"level_id\": 1,\n \"position_id\": 2,\n \"age\": \"30\",\n \"experience\": \"test\",\n \"contacts\": \"test\",\n \"cv\": \"data:application/pdf;base64, fw3...\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Position of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "base64",
            "optional": false,
            "field": "cv",
            "description": "<p>CV of Candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"status\": \"SUCCESS\",\n     \"message\": \"Saved candidate\",\n     \"data\": {\n         \"id\": 14,\n         \"age\": 30,\n         \"experience\": \"test\",\n         \"contacts\": \"test\",\n         \"created_at\": \"2017-10-06T21:11:23.538Z\",\n         \"updated_at\": \"2017-10-06T21:11:23.538Z\",\n         \"level_id\": 1,\n         \"position_id\": 2,\n         \"cv\": {\n             \"url\": \"/uploads/candidate/cv/14/cv.pdf\"\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CandidateNotFound",
            "description": "<p>The <code>id</code> of the Candidate was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Candidates"
  },
  {
    "type": "put",
    "url": "api/v1/candidates/:id",
    "title": "Update candidate",
    "name": "PutCandidates",
    "group": "Candidates",
    "description": "<p>Replace parts of existing candidate.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Candidate`s level.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Candidate`s position.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "age",
            "description": "<p>Candidate`s age.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Parameter",
            "type": "base64",
            "optional": true,
            "field": "CV",
            "description": "<p>Candidate`s CV.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"level_id\": 1,\n \"position_id\": 2,\n \"age\": \"30\",\n \"experience\": \"test\",\n \"contacts\": \"test\",\n \"cv\": \"data:application/pdf;base64, fw3...\"\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience",
            "description": "<p>Candidate`s experience.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Position of Candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "base64",
            "optional": false,
            "field": "cv",
            "description": "<p>CV of Candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update candidate\",\n    \"data\": {\n        \"id\": 14,\n        \"age\": 30,\n        \"experience\": \"test\",\n        \"contacts\": \"test\",\n        \"cv\": {\n            \"url\": \"/uploads/candidate/cv/14/cv.pdf\"\n        },\n        \"level_id\": 1,\n        \"position_id\": 2,\n        \"created_at\": \"2017-10-06T21:11:23.538Z\",\n        \"updated_at\": \"2017-10-06T21:16:20.338Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CandidateNotFound",
            "description": "<p>Returned if the candidate does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Candidates"
  },
  {
    "type": "delete",
    "url": "api/v1/levels/:id",
    "title": "Delete Level",
    "name": "DeleteLevels",
    "group": "Levels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>The Level-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Level deleted\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test1\",\n        \"created_at\": \"2017-10-04T08:23:27.316Z\",\n        \"updated_at\": \"2017-10-04T08:25:17.216Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelNotFound",
            "description": "<p>Returned if the level does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Levels"
  },
  {
    "name": "GetLevels",
    "group": "Levels",
    "type": "get",
    "url": "api/v1/levels/:id",
    "title": "Get levels",
    "description": "<p>Returns all levels which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"SUCCESS\",\n   \"message\": \"Levels loaded\",\n   \"data\": [\n       {\n           \"id\": 4,\n           \"name\": \"Senior\",\n           \"created_at\": \"2017-10-03T01:24:40.364Z\",\n           \"updated_at\": \"2017-10-03T01:24:40.364Z\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "levelNotFound",
            "description": "<p>The <code>id</code> of the level was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Levels"
  },
  {
    "type": "put",
    "url": "api/v1/levels/:id",
    "title": "Update level",
    "name": "PatchLevel",
    "group": "Levels",
    "description": "<p>Replace parts of existing levels.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the level.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t   \"name\": \"Test1\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update level\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test1\",\n        \"created_at\": \"2017-10-04T08:23:27.316Z\",\n        \"updated_at\": \"2017-10-04T08:25:17.216Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeveltNotFound",
            "description": "<p>Returned if the level does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Levels"
  },
  {
    "type": "patch",
    "url": "api/v1/levels/:id",
    "title": "Edit Level",
    "name": "PatchLevels",
    "group": "Levels",
    "description": "<p>Replace parts of existing Levels.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the level.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"Test1\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"status\": \"SUCCESS\",\n  \"message\": \"Update level\",\n  \"data\": {\n      \"id\": 6,\n      \"name\": \"Test1\",\n      \"created_at\": \"2017-10-04T08:23:27.316Z\",\n      \"updated_at\": \"2017-10-04T08:25:17.216Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LeveltNotFound",
            "description": "<p>Returned if the level does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Levels"
  },
  {
    "type": "post",
    "url": "api/v1/levels/",
    "title": "Create level",
    "name": "PostLevels",
    "group": "Levels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name of the level.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\": \"Test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>The new level-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Saved level\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test\",\n        \"created_at\": \"2017-10-04T08:23:27.316Z\",\n        \"updated_at\": \"2017-10-04T08:23:27.316Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LevelNotFound",
            "description": "<p>The <code>id</code> of the level was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Levels"
  },
  {
    "type": "delete",
    "url": "api/v1/positions/:id",
    "title": "Delete Position",
    "name": "DeletePosition",
    "group": "Positions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>The positions-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Position deleted\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test7\",\n        \"created_at\": \"2017-10-04T08:45:58.122Z\",\n        \"updated_at\": \"2017-10-04T08:49:47.054Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PositionNotFound",
            "description": "<p>Returned if the positions does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Positions"
  },
  {
    "name": "GetPositions",
    "group": "Positions",
    "type": "get",
    "url": "api/v1/positions/:id",
    "title": "Get Positions",
    "description": "<p>Returns all Positions which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n\"status\": \"SUCCESS\",\n   \"message\": \"Positions loaded\",\n   \"data\": [\n       {\n           \"id\": 4,\n           \"name\": \"Back-end\",\n           \"created_at\": \"2017-10-03T01:24:40.499Z\",\n           \"updated_at\": \"2017-10-03T01:24:40.499Z\"\n       }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PositionsNotFound",
            "description": "<p>The <code>id</code> of the Project was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Positions"
  },
  {
    "type": "pach",
    "url": "api/v1/positions/:id",
    "title": "Edit positions",
    "name": "PatchPositions",
    "group": "Positions",
    "description": "<p>Replace parts of existing Positions.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the positions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"name\": \"Test7\"\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update position\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test7\",\n        \"created_at\": \"2017-10-04T08:45:58.122Z\",\n        \"updated_at\": \"2017-10-04T08:49:47.054Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PositionstNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Positions"
  },
  {
    "type": "post",
    "url": "api/v1/positions/",
    "title": "Create Positions",
    "name": "PostPositions",
    "group": "Positions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the position.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\": \"Test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>The new position-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the position.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Saved position\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test\",\n        \"created_at\": \"2017-10-04T08:45:58.122Z\",\n        \"updated_at\": \"2017-10-04T08:45:58.122Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PositionNotFound",
            "description": "<p>The <code>id</code> of the Project was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Positions"
  },
  {
    "type": "put",
    "url": "api/v1/positions/:id",
    "title": "Update positions",
    "name": "PutPositions",
    "group": "Positions",
    "description": "<p>Replace parts of existing positions.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Optional name of the positions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \t\"name\": \"Test6\"\n     }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the positions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n    {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update position\",\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"Test6\",\n        \"created_at\": \"2017-10-04T08:45:58.122Z\",\n        \"updated_at\": \"2017-10-04T08:47:41.916Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PositionstNotFound",
            "description": "<p>Returned if the positions does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Positions"
  },
  {
    "type": "delete",
    "url": "api/v1/projects/:id",
    "title": "Delete project",
    "name": "DeleteProjects",
    "group": "Projects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Projects-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\t\"status\": \"SUCCESS\",\n \t\"message\": \"Project deleted\",\n    \t\"data\": {\n         \t\"id\": 30,\n         \t\"title\": \"TestEdit\",\n         \t\"description\": \"testUpdate\",\n         \t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n         \t\"updated_at\": \"2017-08-22T11:52:25.651Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "name": "GetProjects",
    "group": "Projects",
    "type": "get",
    "url": "api/v1/projects/:id",
    "title": "Get all projects",
    "description": "<p>Returns all projects which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n \t\"status\": \"SUCCESS\",\n \t\"message\": \"Project id=30 loaded\",\n \t\"data\":  {\n         \t \"id\": 30,\n           \t \"title\": \"Test\",\n            \t \"description\": \"test\",\n            \t \"created_at\": \"2017-08-22T11:32:34.824Z\",\n            \t \"updated_at\": \"2017-08-22T11:32:34.824Z\"\n        }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The <code>id</code> of the Project was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "patch",
    "url": "api/v1/projects/:id",
    "title": "Edit project",
    "name": "PatchProjects",
    "group": "Projects",
    "description": "<p>Replace parts of existing project.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional title of the Projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description of the Projects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"TestEdit\",\n    \"description\": \"testUpdate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\t\"status\": \"SUCCESS\",\n\t\"message\": \"Update project\",\n    \t\"data\": {\n         \t\"id\": 30,\n         \t\"title\": \"TestEdit\",\n         \t\"description\": \"testUpdate\",\n         \t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n         \t\"updated_at\": \"2017-08-22T11:52:25.651Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "api/v1/projects/",
    "title": "Create project",
    "name": "PostProjects",
    "group": "Projects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional title of the Projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description of the Projects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"Test\",\n\n    \"description\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Projects-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \t\"status\": \"SUCCESS\",\n  \t\"message\": \"Saved project\",\n  \t\"data\": {\n        \t\"id\": 30,\n       \t\t\"title\": \"Test\",\n       \t\t\"description\": \"test\",\n       \t\t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n       \t\t\"updated_at\": \"2017-08-22T11:32:34.824Z\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The <code>id</code> of the Project was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "api/v1/projects/:id",
    "title": "Update project",
    "name": "PutProjects",
    "group": "Projects",
    "description": "<p>Replace the entire project with the new representation provided.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional title of the Projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description of the Projects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"TestUpdate\",\n\n    \"description\": \"testUpdate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\t\"status\": \"SUCCESS\",\n\t\"message\": \"Update project\",\n \t\"data\": {\n   \t\t\"id\": 30,\n       \t \t\"title\": \"TestUpdate\",\n        \t\"description\": \"testUpdate\",\n        \t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n        \t\"updated_at\": \"2017-08-22T11:44:33.906Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "auth/sign_in/",
    "title": "User login",
    "name": "UserLogin",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of register user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User`s password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   “email”: “user@user.com”,\n   “password”: “123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User`s login.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User Identificator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Nickname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>User`s avatar.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>User`s surname.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>ID of the user`s level.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "is_hr",
            "description": "<p>HR user or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"data\": {\n        \"id\": 19,\n        \"email\": \"user@user.com\",\n        \"level_id\": 3,\n        \"position_id\": 3,\n        \"provider\": \"email\",\n        \"uid\": \"user@user.com\",\n        \"name\": null,\n        \"nickname\": null,\n        \"image\": null,\n        \"surname\": null,\n        \"is_hr\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If URL entered incorrect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned <code>Invalid login credentials. Please try again.</code> if email or password invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "auth/sign_out/",
    "title": "User logout",
    "name": "UserLogoutn",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "client",
            "description": "<p>client which comes in login headers.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>uid which comes in login headers.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Token which comes in login headers.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>If URL entered incorrect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned <code>Invalid login credentials. Please try again.</code> if email or password invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/v1/vacancies/:id",
    "title": "Delete vacancies",
    "name": "DeleteVacancies",
    "group": "Vacancies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Vacancies.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Vacancies.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>ID of the level for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>ID of the project for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Vacancy deleted\",\n    \"data\": {\n        \"id\": 6,\n        \"description\": \"test1\",\n        \"status\": null,\n        \"created_at\": \"2017-10-04T11:08:13.287Z\",\n        \"updated_at\": \"2017-10-04T11:28:59.890Z\",\n        \"level_id\": 4,\n        \"position_id\": 4,\n        \"project_id\": 87\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VacancieNotFound",
            "description": "<p>Returned if the Vacancies does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Vacancies"
  },
  {
    "name": "GetVacancies",
    "group": "Vacancies",
    "type": "get",
    "url": "api/v1/vacancies/:id",
    "title": "Get vacancies",
    "description": "<p>Returns all vacancies which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Vacancies loaded\",\n    \"data\": [\n        {\n            \"id\": 5,\n            \"description\": \"[\\\"Reprehenderit magni tenetur sed distinctio in. Est tempore ex laborum nam. Voluptas recusandae consectetur. Hic cumque voluptas nihil nulla culpa a.\\\", \\\"A ut fugit labore possimus doloremque. Ipsa similique aut. Id et error excepturi ut et sunt.\\\", \\\"Occaecati cupiditate sunt qui et debitis et. Vero laudantium maxime cumque blanditiis corporis perferendis consequatur. Enim quod et sit temporibus. Placeat ut quae nihil et. Suscipit ea fugit harum sint ut sed praesentium.\\\"]\",\n            \"status\": \"Lots of planets have a north!\",\n            \"created_at\": \"2017-10-03T01:24:41.071Z\",\n            \"updated_at\": \"2017-10-03T01:24:41.071Z\",\n            \"level_id\": 2,\n            \"position_id\": 3,\n            \"project_id\": 2\n        }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level id for vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>Id of the project which includes the vacancy.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The <code>id</code> of the Vacancies was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Vacancies"
  },
  {
    "type": "patch",
    "url": "api/v1/vacancies/:id",
    "title": "Edit Vacancies",
    "name": "PatchVacancies",
    "group": "Vacancies",
    "description": "<p>Replace parts of existing Vacancies.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>ID of the level for Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>ID of the project for Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Vacancies.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n            \"description\": \"test\",\n            \"level_id\": 3,\n            \"position_id\": 4,\n            \"project_id\": 1,\n            \"status\": false\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Vacancies.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Vacancies.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>ID of the level for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>ID of the project for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update vacancy\",\n    \"data\": {\n        \"id\": 6,\n        \"description\": \"test\",\n        \"level_id\": 4,\n        \"project_id\": 87,\n        \"position_id\": 4,\n        \"status\": true,\n        \"created_at\": \"2017-10-04T11:08:13.287Z\",\n        \"updated_at\": \"2017-10-04T11:17:33.480Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VacancieNotFound",
            "description": "<p>Returned if the Vacancies does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Vacancies"
  },
  {
    "type": "post",
    "url": "api/v1/vacancies/",
    "title": "Create vacancy",
    "name": "PostVacancy",
    "group": "Vacancies",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Mandatory level of the vacancy.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>Mandatory project of the vacancy.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Mandatory position of the vacancy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"level_id\": 4,\n        \"project_id\": 87,\n        \"position_id\": 4\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>Level id for vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for vacancy.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>Id of the project which includes the vacancy.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Saved vacancy\",\n    \"data\": {\n        \"id\": 6,\n        \"description\": null,\n        \"status\": null,\n        \"created_at\": \"2017-10-04T11:08:13.287Z\",\n        \"updated_at\": \"2017-10-04T11:08:13.287Z\",\n        \"level_id\": 4,\n        \"position_id\": 4,\n        \"project_id\": 87\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VacanciesNotFound",
            "description": "<p>The <code>id</code> of the Vacancies was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Vacancies"
  },
  {
    "type": "put",
    "url": "api/v1/vacancies/:id",
    "title": "Update vacancies",
    "name": "PutVacancies",
    "group": "Vacancies",
    "description": "<p>Replace the entire project with the new representation provided.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>ID of the level for Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>ID of the project for Vacancie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Vacancies.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n            \"description\": \"test\",\n            \"level_id\": 3,\n            \"position_id\": 4,\n            \"project_id\": 1,\n            \"status\": true\n        }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the Vacancies.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Vacancies.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "level_id",
            "description": "<p>ID of the level for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>ID of the position for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "project_id",
            "description": "<p>ID of the project for Vacancie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update vacancy\",\n    \"data\": {\n        \"id\": 6,\n        \"description\": \"test\",\n        \"level_id\": 4,\n        \"project_id\": 87,\n        \"position_id\": 4,\n        \"status\": true,\n        \"created_at\": \"2017-10-04T11:08:13.287Z\",\n        \"updated_at\": \"2017-10-04T11:17:33.480Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VacancieNotFound",
            "description": "<p>Returned if the Vacancies does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Vacancies"
  }
] });
