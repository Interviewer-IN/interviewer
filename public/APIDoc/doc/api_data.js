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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Candidate deleted\",\n    \"data\": {\n        \"id\": 69,\n        \"age\": 30,\n        \"experience\": \"test\",\n        \"contacts\": \"test\",\n        \"created_at\": \"2017-10-25T20:49:00.195Z\",\n        \"updated_at\": \"2017-10-25T20:53:50.191Z\",\n        \"level_id\": 1,\n        \"position_id\": 2,\n        \"cv\": {\n            \"url\": \"/uploads/candidate/cv/69/cv.pdf\"\n        },\n        \"name\": \"Jim\",\n        \"surname\": \"Jimson\",\n        \"notes\": \"Some notes about Jim Jimson\"\n    }\n}",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"SUCCESS\",\n   \"message\": \"Candidates loaded\",\n   \"data\": [\n       {\n           \"id\": 67,\n           \"age\": 30,\n           \"experience\": \"Some kind of freelance...\",\n           \"contacts\": \"skype: abcde; email: abcde@a.com; phone: 6509048934\",\n           \"created_at\": \"2017-10-25T19:00:06.208Z\",\n           \"updated_at\": \"2017-10-25T19:03:16.849Z\",\n           \"level_id\": 1,\n           \"position_id\": 2,\n           \"cv\": {\n               \"url\": null\n           },\n           \"name\": \"Justin\",\n           \"surname\": \"Bieber\",\n           \"notes\": \"just some notes. nothing interesting...\"\n       }\n  }",
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
            "description": "<p>Age of the candidate.</p>"
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
            "description": "<p>Level of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "position_id",
            "description": "<p>Position of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "base64",
            "optional": false,
            "field": "cv",
            "description": "<p>CV of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
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
    "type": "patch",
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
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Parameter",
            "type": "base64",
            "optional": true,
            "field": "CV",
            "description": "<p>Candidate`s CV.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"level_id\": 1,\n      \"position_id\": 2,\n      \"age\": \"30\",\n      \"experience\": \"test\",\n      \"contacts\": \"test\",\n      \"cv\": \"data:application/pdf;base64, fw3...\",\n\t  \"name\": \"Jim\",\n\t  \"surname\": \"Jimson\",\n\t  \"notes\": \"Some notes about Jim Jimson fot patch\"\n      }",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update candidate\",\n    \"data\": {\n        \"id\": 69,\n        \"age\": 30,\n        \"experience\": \"test\",\n        \"contacts\": \"test\",\n        \"cv\": {\n            \"url\": \"/uploads/candidate/cv/69/cv.pdf\"\n        },\n        \"level_id\": 1,\n        \"position_id\": 2,\n        \"name\": \"Jim\",\n        \"surname\": \"Jimson\",\n        \"notes\": \"Some notes about Jim Jimson fot patch\",\n        \"created_at\": \"2017-10-25T20:49:00.195Z\",\n        \"updated_at\": \"2017-10-25T20:51:38.429Z\"\n    }\n}",
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
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Parameter",
            "type": "base64",
            "optional": true,
            "field": "CV",
            "description": "<p>Candidate`s CV.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes of candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n     {\n      \"level_id\": 1,\n      \"position_id\": 2,\n      \"age\": \"30\",\n      \"experience\": \"test\",\n      \"contacts\": \"test\",\n      \"cv\": \"data:application/pdf;base64, fw3...\",\n\t  \"name\": \"Jim\",\n\t  \"surname\": \"Jimson\",\n\t  \"notes\": \"Some notes about Jim Jimson\"\n      }",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Saved candidate\",\n    \"data\": {\n        \"id\": 69,\n        \"age\": 30,\n        \"experience\": \"test\",\n        \"contacts\": \"test\",\n        \"created_at\": \"2017-10-25T20:49:00.195Z\",\n        \"updated_at\": \"2017-10-25T20:49:00.195Z\",\n        \"level_id\": 1,\n        \"position_id\": 2,\n        \"cv\": {\n            \"url\": \"/uploads/candidate/cv/69/cv.pdf\"\n        },\n        \"name\": \"Jim\",\n        \"surname\": \"Jimson\",\n        \"notes\": \"Some notes about Jim Jimson\"\n    }\n}",
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
            "optional": false,
            "field": "contacts",
            "description": "<p>Candidate`s contacts.</p>"
          },
          {
            "group": "Parameter",
            "type": "base64",
            "optional": true,
            "field": "CV",
            "description": "<p>Candidate`s CV.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "      {\n      \"level_id\": 1,\n      \"position_id\": 2,\n      \"age\": \"30\",\n      \"experience\": \"test\",\n      \"contacts\": \"test\",\n      \"cv\": \"data:application/pdf;base64, fw3...\",\n\t  \"name\": \"Jim\",\n\t  \"surname\": \"Jimson\",\n\t  \"notes\": \"Some notes about Jim Jimson fot put\"\n      }",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Surname of candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Some notes for candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n    {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update candidate\",\n    \"data\": {\n        \"id\": 69,\n        \"age\": 30,\n        \"experience\": \"test\",\n        \"contacts\": \"test\",\n        \"cv\": {\n            \"url\": \"/uploads/candidate/cv/69/cv.pdf\"\n        },\n        \"level_id\": 1,\n        \"position_id\": 2,\n        \"name\": \"Jim\",\n        \"surname\": \"Jimson\",\n        \"notes\": \"Some notes about Jim Jimson fot put\",\n        \"created_at\": \"2017-10-25T20:49:00.195Z\",\n        \"updated_at\": \"2017-10-25T20:53:50.191Z\"\n    }\n}",
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
    "url": "api/v1/interviews/:id",
    "title": "Delete Interviews",
    "name": "DeleteInterviews",
    "group": "Interviews",
    "header": {
      "fields": {
        "Header": [
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
            "description": "<p>Unique id of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
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
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Interview deleted\",\n    \"data\": {\n        \"id\": 22,\n        \"status\": false,\n        \"state\": \"Non new2\",\n        \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.Patch\",\n        \"date_time\": \"2017-10-16T00:40:00.000Z\",\n        \"created_at\": \"2017-10-24T06:02:51.719Z\",\n        \"updated_at\": \"2017-10-24T06:11:05.592Z\",\n        \"candidate_id\": 3,\n        \"vacancy_id\": 3,\n        \"user_id\": 19,\n        \"rating_id\": 2\n    }\n}",
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
            "field": "InterviewsNotFound",
            "description": "<p>Returned if the Interviews does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Interviews"
  },
  {
    "name": "GetInterviews",
    "group": "Interviews",
    "type": "get",
    "url": "api/v1/interviews/:id",
    "title": "Get Interviews",
    "description": "<p>Returns all Interviews which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Interviews loaded\",\n    \"data\": [\n        {\n            \"id\": 20,\n            \"status\": false,\n            \"state\": \"New\",\n            \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.\",\n            \"date_time\": \"2017-10-16T00:40:00.000Z\",\n            \"created_at\": \"2017-10-19T17:21:18.896Z\",\n            \"updated_at\": \"2017-10-22T18:48:16.703Z\",\n            \"candidate_id\": 20,\n            \"vacancy_id\": 47,\n            \"user_id\": 19,\n            \"rating_id\": 1\n        }\n   }",
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
            "description": "<p>Unique id of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
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
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
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
            "field": "InterviewsNotFound",
            "description": "<p>The <code>id</code> of the Interview was not found.</p>"
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
    "groupTitle": "Interviews"
  },
  {
    "type": "patch",
    "url": "api/v1/interviews/:id",
    "title": "Edit Interviews",
    "name": "PatchInterviews",
    "group": "Interviews",
    "description": "<p>Replace parts of existing Interviews.</p>",
    "header": {
      "fields": {
        "Header": [
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
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t \"status\": false,\n     \"state\": \"Not new\",\n     \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.EDIT\",\n    \"date_time\": \"2017-10-16T00:40:00.000Z\",\n\t\"candidate_id\": 3,\n\t\"vacancy_id\": 3,\n\t\"user_id\": 19,\n\t\"rating_id\": 2\n\t\n\t}",
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
            "description": "<p>Unique id of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
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
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update interview\",\n    \"data\": {\n        \"id\": 22,\n        \"status\": false,\n        \"state\": \"Not new\",\n        \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.EDIT\",\n        \"date_time\": \"2017-10-16T00:40:00.000Z\",\n        \"candidate_id\": 3,\n        \"vacancy_id\": 3,\n        \"user_id\": 19,\n        \"rating_id\": 2,\n        \"created_at\": \"2017-10-24T06:02:51.719Z\",\n        \"updated_at\": \"2017-10-24T06:09:11.774Z\"\n    }\n}",
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
            "field": "InterviewsNotFound",
            "description": "<p>Returned if the Interviews does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Interviews"
  },
  {
    "type": "post",
    "url": "api/v1/interviews/",
    "title": "Create Interviews",
    "name": "PostInterviews",
    "group": "Interviews",
    "header": {
      "fields": {
        "Header": [
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
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n {\n\t \"status\": false,\n     \"state\": \"New\",\n     \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.\",\n    \"date_time\": \"2017-10-16T00:40:00.000Z\",\n\t\"candidate_id\": 3,\n\t\"vacancy_id\": 3,\n\t\"user_id\": 19,\n\t\"rating_id\": 2\n\t\n}",
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
            "description": "<p>Unique id of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
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
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Saved interview\",\n    \"data\": {\n        \"id\": 22,\n        \"status\": false,\n        \"state\": \"New\",\n        \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.\",\n        \"date_time\": \"2017-10-16T00:40:00.000Z\",\n        \"created_at\": \"2017-10-24T06:02:51.719Z\",\n        \"updated_at\": \"2017-10-24T06:02:51.719Z\",\n        \"candidate_id\": 3,\n        \"vacancy_id\": 3,\n        \"user_id\": 19,\n        \"rating_id\": 2\n    }\n}",
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
            "field": "InterviewsNotFound",
            "description": "<p>The <code>id</code> of the Interviews was not found.</p>"
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
    "groupTitle": "Interviews"
  },
  {
    "type": "put",
    "url": "api/v1/interviews/:id",
    "title": "Update Interviews",
    "name": "PutInterviews",
    "group": "Interviews",
    "description": "<p>Replace parts of existing Rating.</p>",
    "header": {
      "fields": {
        "Header": [
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
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t \"status\": false,\n     \"state\": \"Not new\",\n     \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.EDIT\",\n    \"date_time\": \"2017-10-16T00:40:00.000Z\",\n\t\"candidate_id\": 3,\n\t\"vacancy_id\": 3,\n\t\"user_id\": 19,\n\t\"rating_id\": 2\n\t\n\t}",
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
            "description": "<p>Unique id of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolen",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Interviews(true/false).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedback",
            "description": "<p>Feedback for Interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_time",
            "description": "<p>Mandatory with data of interviews.</p>"
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
            "field": "candidate_id",
            "description": "<p>ID of candidate for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "vacancy_id",
            "description": "<p>ID of vacancy for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user for this interviews.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "rating_id",
            "description": "<p>ID of rating for this interviews.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update interview\",\n    \"data\": {\n        \"id\": 22,\n        \"status\": false,\n        \"state\": \"Not new\",\n        \"feedback\": \"We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.EDIT\",\n        \"date_time\": \"2017-10-16T00:40:00.000Z\",\n        \"candidate_id\": 3,\n        \"vacancy_id\": 3,\n        \"user_id\": 19,\n        \"rating_id\": 2,\n        \"created_at\": \"2017-10-24T06:02:51.719Z\",\n        \"updated_at\": \"2017-10-24T06:09:11.774Z\"\n    }\n}",
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
            "field": "InterviewsNotFound",
            "description": "<p>Returned if the Interviews does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Interviews"
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
    "description": "<p>Returns all Positions which are visible for the currently logged in user, with ID in URL- returns one position which match ID.</p>",
    "header": {
      "fields": {
        "Header": [
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
    "type": "patch",
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
    "type": "delete",
    "url": "api/v1/ratings/:id",
    "title": "Delete Rating",
    "name": "DeleteRating",
    "group": "Ratings",
    "header": {
      "fields": {
        "Header": [
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
            "description": "<p>Unique id of rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Grade of the rating.</p>"
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
          "content": "    HTTP/1.1 200 OK\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Rating deleted\",\n    \"data\": {\n        \"id\": 6,\n        \"grade\": \"test2\",\n        \"created_at\": \"2017-10-23T18:16:48.015Z\",\n        \"updated_at\": \"2017-10-23T18:45:13.614Z\"\n    }\n}",
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
            "field": "RatingNotFound",
            "description": "<p>Returned if the rating does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Ratings"
  },
  {
    "name": "GetRatings",
    "group": "Ratings",
    "type": "get",
    "url": "api/v1/ratings/:id",
    "title": "Get Ratings",
    "description": "<p>Returns all Ratings which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"SUCCESS\",\n   \"message\": \"Ratings loaded\",\n   \"data\": [\n       {\n           \"id\": 5,\n           \"grade\": \"Supa Good\",\n           \"created_at\": \"2017-10-10T23:23:08.582Z\",\n           \"updated_at\": \"2017-10-20T12:17:10.368Z\"\n       }}",
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
            "description": "<p>Unique id of the Rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Grade of the Rating.</p>"
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
            "field": "RatingNotFound",
            "description": "<p>The <code>id</code> of the Rating was not found.</p>"
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
    "groupTitle": "Ratings"
  },
  {
    "type": "patch",
    "url": "api/v1/ratings/:id",
    "title": "Edit rating",
    "name": "PatchRating",
    "group": "Ratings",
    "description": "<p>Replace parts of existing rating.</p>",
    "header": {
      "fields": {
        "Header": [
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
            "field": "grade",
            "description": "<p>Grade of ratings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "      {\n\t\"grade\": \"test1\"\n\t}",
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
            "description": "<p>Unique id of rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Grade of the rating.</p>"
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
          "content": "    HTTP/1.1 200 OK\n\n{\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update rating\",\n    \"data\": {\n        \"id\": 6,\n        \"grade\": \"test2\",\n        \"created_at\": \"2017-10-23T18:16:48.015Z\",\n        \"updated_at\": \"2017-10-23T18:45:13.614Z\"\n    }\n}",
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
            "field": "RatingNotFound",
            "description": "<p>Returned if the rating does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Ratings"
  },
  {
    "type": "post",
    "url": "api/v1/ratings/",
    "title": "Create Rating",
    "name": "PostRating",
    "group": "Ratings",
    "header": {
      "fields": {
        "Header": [
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
            "field": "grade",
            "description": "<p>Grade of ratings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n     {\n\t\"grade\": \"test\"\n\t}",
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
            "description": "<p>Unique id of rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Grade of the rating.</p>"
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
          "content": "    HTTP/1.1 200 OK\n     {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Saved rating\",\n    \"data\": {\n        \"id\": 7,\n        \"grade\": \"test\",\n        \"created_at\": \"2017-10-23T18:17:39.083Z\",\n        \"updated_at\": \"2017-10-23T18:17:39.083Z\"\n    }\n}",
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
            "field": "RatingNotFound",
            "description": "<p>The <code>id</code> of the Rating was not found.</p>"
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
    "groupTitle": "Ratings"
  },
  {
    "type": "put",
    "url": "api/v1/ratings/:id",
    "title": "Update Rating",
    "name": "PutRating",
    "group": "Ratings",
    "description": "<p>Replace parts of existing Rating.</p>",
    "header": {
      "fields": {
        "Header": [
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
            "field": "grade",
            "description": "<p>Grade of ratings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "      {\n\t\"grade\": \"test1\"\n\t}",
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
            "description": "<p>Unique id of rating.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>Grade of the rating.</p>"
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
          "content": "    HTTP/1.1 200 OK\n\n  {\n    \"status\": \"SUCCESS\",\n    \"message\": \"Update rating\",\n    \"data\": {\n        \"id\": 6,\n        \"grade\": \"test1\",\n        \"created_at\": \"2017-10-23T18:16:48.015Z\",\n        \"updated_at\": \"2017-10-23T18:29:17.152Z\"\n    }\n}",
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
            "field": "RatingNotFound",
            "description": "<p>Returned if the rating does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Ratings"
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
            "description": "<p>aapplication/json</p>"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Vacancie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t    \"description\": \"Test description of vacancie\",\n        \"level_id\": 4,\n        \"project_id\": 87,\n        \"position_id\": 4\n    }",
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
