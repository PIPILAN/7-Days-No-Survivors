onEvent('recipes', event => {

// 瞄准镜

  event.remove({id:'tac:light_armor'})
  event.custom(
    {
      "type": "sevendaystomine:workbench_shaped",
      "pattern": [
        "L   L",
        "LNNNL",
        "INSNI",
        "INNNI",
        "IIIII"
      ],
      "key": {
        "L": {
          "tag": "forge:leather"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "N": {
          "tag": "forge:nuggets/iron"
        },
        "S": {
          "tag": "forge:storage_blocks/iron"
        }
      },
      "result": {
        "item": "tac:light_armor"
      },
      "recipe": "forging"
    }
  )

  event.remove({id:'tac:medium_steel_armor'})
  event.custom(
    {
      "type": "sevendaystomine:workbench_shaped",
      "pattern": [
        "N   N",
        "NIIIN",
        "ISSSI",
        "ISSSI",
        "IIIII"
      ],
      "key": {
        "I": {
          "tag": "forge:ingots/iron"
        },
        "N": {
          "tag": "forge:nuggets/iron"
        },
        "S": {
          "tag": "forge:storage_blocks/iron"
        }
      },
      "result": {
        "item": "tac:medium_steel_armor"
      },
      "recipe": "forging"
    }
  )

  event.remove({id:'tac:light_armor_plate'})
  event.custom(
    {
      "type":"sevendaystomine:locked_shaped",
      "pattern": [
        "L L",
        "NNN",
        "INI"
      ],
      "key": {
        "L": {
          "tag": "forge:leather"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "N": {
          "tag": "forge:nuggets/iron"
        }
      },
      "result": {
        "item": "tac:light_armor_plate"
      },
      "recipe": "forging"
    }
  )
})
