onEvent('recipes', event => {

// 枪械工作台

  event.remove({id:'tac:workbench'})
  event.custom(
    {
      "type":"sevendaystomine:locked_shaped",
      "pattern": [
        "WWW",
        "IBI",
        "I I"
      ],
      "key": {
        "W": {
          "tag": "minecraft:logs"
        },
        "I": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "minecraft:iron_block"
        }
      },
      "result": {
        "item": "tac:workbench"
      },
      "recipe": "forging"
    }
  ).id('7dns:tac_workdbench')

})
