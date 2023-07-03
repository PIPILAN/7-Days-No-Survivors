onEvent('recipes', event => {

  event.remove({id:"sophisticatedbackpacks:backpack"})
  event.custom(
    {
      "type": "sevendaystomine:workbench_shaped",
      "pattern": [
        "FOFOF",
        "LOCOL",
        "LCBCL",
        "LLCLL",
        "FLLLF"
      ],
      "key": {
        "F": {
          "item": "sevendaystomine:plant_fiber"
        },
        "L": {
          "tag": "forge:leather"
        },
        "C": {
          "item": "minecraft:chest"
        },
        "O": {
          "item": "sevendaystomine:scrap_iron"
        },
        "B": {
          "item": "sevendaystomine:backpack"
        }
      },
      "result": {
        "item": "sophisticatedbackpacks:backpack"
      }
    }
  ).id('sophisticatedbackpacks:backpack')

  event.remove({id:"sophisticatedbackpacks:iron_backpack"})
  event.custom(
    {
      "type": "sevendaystomine:workbench_shaped",
      "pattern": [
        "LMLML",
        "MMCMM",
        "MCBCM",
        "MMCMM",
        "LMMML"
      ],
      "key": {
        "L": {
          "tag": "forge:leather"
        },
        "M": {
          "tag": "forge:ingots/iron"
        },
        "C": {
          "item": "ironchest:iron_chest"
        },
        "B": {
          "item": "sophisticatedbackpacks:backpack"
        }
      },
      "result": {
        "item": "sophisticatedbackpacks:iron_backpack"
      }
    }
  ).id('sophisticatedbackpacks:iron_backpack')

  event.remove({id:"sophisticatedbackpacks:gold_backpack"})
  event.custom(
    {
      "type": "sevendaystomine:workbench_shaped",
      "pattern": [
        "LILIL",
        "MICIM",
        "MCBCM",
        "MMCMM",
        "LMMML"
      ],
      "key": {
        "L": {
          "tag": "forge:leather"
        },
        "M": {
          "tag": "forge:ingots/gold"
        },
        "C": {
          "item": "ironchest:gold_chest"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "B": {
          "item": "sophisticatedbackpacks:iron_backpack"
        }
      },
      "result": {
        "item": "sophisticatedbackpacks:gold_backpack"
      }
    }
  ).id('sophisticatedbackpacks:gold_backpack')

  event.remove({id:"sophisticatedbackpacks:diamond_backpack"})
  event.custom(
    {
      "type": "sevendaystomine:workbench_shaped",
      "pattern": [
        "LILIL",
        "MICIM",
        "MCBCM",
        "MMCMM",
        "LMMML"
      ],
      "key": {
        "L": {
          "tag": "forge:leather"
        },
        "M": {
          "tag": "forge:gems/diamond"
        },
        "C": {
          "item": "ironchest:diamond_chest"
        },
        "I": {
          "tag": "forge:ingots/iron"
        },
        "B": {
          "item": "sophisticatedbackpacks:gold_backpack"
        }
      },
      "result": {
        "item": "sophisticatedbackpacks:diamond_backpack"
      }
    }
  ).id('sophisticatedbackpacks:diamond_backpack')



})