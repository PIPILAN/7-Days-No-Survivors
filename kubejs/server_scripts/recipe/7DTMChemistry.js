onEvent('recipes', event => {

  event.custom(
    {
      "type":"sevendaystomine:cooking_pot_shapeless",
      "ingredients":[
        {
          "item":"minecraft:potion",
          "nbt": "{Potion:\"minecraft:water\"}",
        },
        {
          "item":"sevendaystomine:coffee_beans"
        },
        {
          "item":"minecraft:bone_meal"
        }
      ],
      "result":{
        "item":"minecraft:potion",
        "nbt": "{Potion:\"parcool:poor_energy_drink\"}",
        "count":1
      }
    }
    ).id('7dns:poor_energy_drink')

    event.custom(
      {
        "type":"sevendaystomine:cooking_pot_shapeless",
        "ingredients":[
          {
            "item":"minecraft:potion",
            "nbt": "{Potion:\"minecraft:water\"}",
          },
          {
            "item":"sevendaystomine:coffee_beans"
          },
          {
            "item":"sevendaystomine:salt"
          },
          {
            "item":"sevendaystomine:salt"
          }
        ],
        "result":{
          "item":"minecraft:potion",
          "nbt": "{Potion:\"parcool:energy_drink\"}",
          "count":1
        }
      }
      ).id('7dns:energy_drink')

})
