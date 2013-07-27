define({
  "masterTable" : {
    "min": 1,
    "max":100,
    "items": [
      {
        "minor": {
          "min": 1,
          "max": 4
        },
        "medium": {
          "min": 1,
          "max": 10
        },
        "major": {
          "min": 1,
          "max": 10
        },
        "description": "Armor and Shields",
        "url": "",
        "nextTable": "armorAndShieldsTable"
      },

      {
        "minor": {
          "min": 5,
          "max": 9
        },
        "medium": {
          "min": 11,
          "max": 20
        },
        "major": {
          "min": 11,
          "max": 20
        },
        "description": "Weapons",
        "nextTable": "weaponsTable"
      }
    ]
  },

  "table1": {
    "min": 1,
    "max": 100,
    "items": [
      {
        "minor": {
          "min": 1,
          "max": 50
        },
        "medium": {
          "min": 1,
          "max": 50
        },
        "major": {
          "min": 1,
          "max": 50
        },
        "description": "table1 item1",
        "nextTable": "table2"
      },
      {
        "minor": {
          "min": 51,
          "max": 100
        },
        "medium": {
          "min": 51,
          "max": 100
        },
        "major": {
          "min": 51,
          "max": 100
        },
        "description": "table1 item2",
        "nextTable": "table2"
      }
    ]
  },
  "table2": {
    "min": 1,
    "max": 100,
    "items": [
      {
        "minor": {
          "min": 1,
          "max": 50
        },
        "medium": {
          "min": 1,
          "max": 50
        },
        "major": {
          "min": 1,
          "max": 50
        },
        "description": "table2 item1",
        "nextTable": null
      },
      {
        "minor": {
          "min": 51,
          "max": 100
        },
        "medium": {
          "min":51,
          "max": 100
        },
        "major": {
          "min":51,
          "max": 100
        },
        "description": "table2 item2",
        "nextTable": null
      }
    ]
  }
})