onEvent('recipes', event => {

  event.remove({id:'sevendaystomine:turret'})
  event.remove({id:'sevendaystomine:turret_advanced'})
  event.remove({id:'k-turrets:bullet_turret'})
  event.custom(
    {
      "type":"sevendaystomine:workbench_shaped",
      "pattern": [
        "CC   ",
        "CCHBP",
        " SGS ",
        " PPP ",
        " PPP "
      ],
      "key": {
        "C": {
          "item": "sevendaystomine:empty_can"
        },
        "H": {
          "item": "sevendaystomine:hunting_rifle_barrel"
        },
        "B": {
          "item": "sevendaystomine:mp5_barrel"
        },
        "S": {
          "tag": "forge:ingots/steel"
        },
        "P": {
          "item": "sevendaystomine:iron_pipe"
        },
        "G": {
          "item": "sevendaystomine:gear"
        }
      },
      "result": {
        "item": "k-turrets:bullet_turret_item"
      },
      "recipe": "computers"
    }
  )

  event.remove({id:'k-turrets:arrow_turret'})
  event.custom(
    {
      "type":"sevendaystomine:workbench_shaped",
      "pattern": [
        "CC   ",
        "CCHPP",
        "  S  ",
        "  P  ",
        "PPPPP"
      ],
      "key": {
        "C": {
          "item": "sevendaystomine:empty_can"
        },
        "H": {
          "item": "minecraft:dispenser"
        },
        "S": {
          "tag": "forge:ingots/steel"
        },
        "P": {
          "item": "sevendaystomine:iron_pipe"
        }
      },
      "result": {
        "item": "k-turrets:arrow_turret_item"
      },
      "recipe": "computers"
    }
  )

  event.remove({id:'k-turrets:firecharge_turret'})
  event.custom(
    {
      "type":"sevendaystomine:workbench_shaped",
      "pattern": [
        "CCHPP",
        "CCC  ",
        "  S  ",
        " PPP ",
        "P P P"
      ],
      "key": {
        "C": {
          "item": "sevendaystomine:empty_can"
        },
        "H": {
          "item": "minecraft:dispenser"
        },
        "S": {
          "tag": "forge:ingots/steel"
        },
        "P": {
          "item": "sevendaystomine:iron_pipe"
        }
      },
      "result": {
        "item": "k-turrets:firecharge_turret_item"
      },
      "recipe": "computers"
    }
  )

  event.remove({id:'k-turrets:gauss_turret'})
  event.custom(
    {
      "type":"sevendaystomine:workbench_shaped",
      "pattern": [
        "CTTPP",
        "CBSPP",
        " SG  ",
        " SS  ",
        " PP  "
      ],
      "key": {
        "C": {
          "item": "sevendaystomine:empty_can"
        },
        "S": {
          "tag": "forge:ingots/steel"
        },
        "P": {
          "item": "sevendaystomine:iron_pipe"
        },
        "G": {
          "item": "sevendaystomine:gear"
        },
        "T": {
          "item": "sevendaystomine:photo_cell"
        },
        "B": {
          "item": "sevendaystomine:car_battery"
        }
      },
      "result": {
        "item": "k-turrets:gauss_turret_item"
      },
      "recipe": "computers"
    }
  )

  event.remove({id:'k-turrets:cobble_turret'})
  event.custom(
    {
      "type":"sevendaystomine:workbench_shaped",
      "pattern": [
        "CCC  ",
        "  HPP",
        "  P  ",
        "  P  ",
        "PPPPP"
      ],
      "key": {
        "C": {
          "item": "sevendaystomine:empty_can"
        },
        "H": {
          "item": "minecraft:dispenser"
        },
        "P": {
          "item": "sevendaystomine:iron_pipe"
        }
      },
      "result": {
        "item": "k-turrets:cobble_turret_item"
      },
      "recipe": "computers"
    }
  )

  event.remove({id:'k-turrets:brick_turret'})
  event.custom(
    {
      "type":"sevendaystomine:workbench_shaped",
      "pattern": [
        "CCC  ",
        "CGHRP",
        "  S  ",
        " PSP ",
        "PPPPP"
      ],
      "key": {
        "C": {
          "item": "sevendaystomine:empty_can"
        },
        "H": {
          "item": "minecraft:dispenser"
        },
        "P": {
          "item": "sevendaystomine:iron_pipe"
        },
        "G": {
          "item": "sevendaystomine:gear"
        },
        "S": {
          "tag": "forge:ingots/steel"
        },
        "R": {
          "item": "sevendaystomine:sniper_rifle_barrel"
        }
      },
      "result": {
        "item": "k-turrets:brick_turret_item"
      },
      "recipe": "computers"
    }
  )
})
