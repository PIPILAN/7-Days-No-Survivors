onEvent('recipes', event => {

  event.remove({id:'minecraft:fire_charge'})
  event.custom(
    {
      "type":"sevendaystomine:locked_shaped",
      "pattern": [
        "TG ",
        "C  ",
        "   "
      ],
      "key": {
        "G": {
          "item": "sevendaystomine:gas_canister"
        },
        "T": {
          "tag": "forge:gunpowder"
        },
        "C": {
          "tag": "minecraft:coals"
        }
      },
      "result": {
        "item": "minecraft:fire_charge",
        "count": 2
      },
      "recipe": "ammo"
    }
  )

  event.custom(
    {
      "type":"sevendaystomine:locked_shaped",
      "pattern": [
        "BN ",
        "B  ",
        "   "
      ],
      "key": {
        "B": {
          "item": "minecraft:brick"
        },
        "N": {
          "item": "minecraft:nether_wart"
        }
      },
      "result": {
        "item": "minecraft:nether_brick",
        "count": 2
      },
      "recipe": "forging"
    }
  )

  event.remove({id:'minecraft:dispenser'})
  event.shaped('minecraft:dispenser', [
    'SSS',
    'SBS',
    'SRS'
  ], {
    S: 'sevendaystomine:small_stone',
    B: '#sdnsmisc:bow',
    R: '#forge:dusts/redstone'
  }).id("7dns:minecraft_dispenser")

  event.remove({id:'minecraft:tripwire_hook'})
  event.shaped('minecraft:tripwire_hook', [
    ' I ',
    ' W ',
    ' P '
  ], {
    I: '#forge:ingots/iron',
    W: '#forge:rods/wooden',
    P: '#forge:plank'
  })

  event.custom(
    {
      "type":"sevendaystomine:locked_shaped",
      "pattern": [
        " G ",
        "G G",
        " G "
      ],
      "key": {
        "G": {
          "item": "sevendaystomine:scrap_iron"
        }
      },
      "result": {
        "item": "sevendaystomine:gear",
        "count": 1
      },
      "recipe": "forging"
    }
  ).id("7dns:misc_gear")

    event.custom(
    {
      "type":"sevendaystomine:locked_shaped",
      "pattern": [
        " G ",
        "G G",
        " G "
      ],
      "key": {
        "G": {
          "item": "sevendaystomine:scrap_iron"
        }
      },
      "result": {
        "item": "sevendaystomine:gear",
        "count": 1
      },
      "recipe": "forging"
    }
  ).id("7dns:misc_gear")

  event.shaped('minecraft:glass_bottle', [
    '   ',
    'G G',
    ' G '
  ], {
    G: 'sevendaystomine:scrap_glass'
  }).id("7dns:glass_bottle")
})
