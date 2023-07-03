onEvent('recipes', event => {

// 手枪

  event.remove({id:'sevendaystomine:pistol'})
  event.remove({id:'sevendaystomine:magnum'})
  event.remove({id:'sevendaystomine:magnum_scoped'})

  event.remove({id:'tac:m1911'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsmisc:blueprintc"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:m1911",
        "count": 1
      }
    }
  )

  event.remove({id:'tac:glock_17'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsmisc:blueprintc"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:glock_17",
        "count": 1
      }
    }
  )

  event.remove({id:'tac:sti2011'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsmisc:blueprintc"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:sti2011",
        "count": 1
      }
    }
  )

  event.remove({id:'tac:deagle_357'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "forge:gems/diamond"
          },
          "count": 3
        },
        {
          "item": {
            "tag": "sdnsmisc:blueprintc"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:deagle_357",
        "count": 1
      }
    }
  )

  event.remove({id:'tac:cz75'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:cz75",
        "count": 1
      }
    }
  )

  event.remove({id:'tac:cz75_auto'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 1
        },
        {
          "item": {
            "tag": "sdnsmisc:blueprintc"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:cz75_auto",
        "count": 1
      }
    }
  )

  event.remove({id:'tac:tti_g34'})
  event.custom(
    {
      "type": "tac:workbench",
      "materials": [
        {
          "item": {
            "tag": "sdnsgunpart:pistol_slide"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_trigger"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsgunpart:pistol_grip"
          },
          "count": 2
        },
        {
          "item": {
            "tag": "sdnsmisc:blueprintc"
          },
          "count": 1
        }
      ],
      "result": {
        "item": "tac:tti_g34",
        "count": 1
      }
    }
  )

// 冲锋枪

event.remove({id:'sevendaystomine:mp5'})

event.remove({id:'tac:vector45'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:smg_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintd"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:vector45",
      "count": 1
    }
  }
)

event.remove({id:'tac:micro_uzi'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:smg_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintd"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:micro_uzi",
      "count": 1
    }
  }
)

event.remove({id:'tac:hk_mp5a5'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:smg_barrel"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintd"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:hk_mp5a5",
      "count": 1
    }
  }
)

event.remove({id:'tac:mp7'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:smg_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_stock"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintd"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:mp7",
      "count": 1
    }
  }
)

// 步枪

event.remove({id:'sevendaystomine:ak47'})
event.remove({id:'sevendaystomine:m4'})
event.remove({id:'sevendaystomine:hunting_rifle'})

event.remove({id:'tac:ak47'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:ak47",
      "count": 1
    }
  }
)

event.remove({id:'tac:m4'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:m4",
      "count": 1
    }
  }
)

event.remove({id:'tac:qbz_95'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:qbz_95",
      "count": 1
    }
  }
)

event.remove({id:'tac:mk14'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 5
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:mk14",
      "count": 1
    }
  }
)

event.remove({id:'tac:hk416_a5'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:hk416_a5",
      "count": 1
    }
  }
)

event.remove({id:'tac:type81_x'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:type81_x",
      "count": 1
    }
  }
)

event.remove({id:'tac:fn_fal'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:fn_fal",
      "count": 1
    }
  }
)

event.remove({id:'tac:sks_tactical'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:sks_tactical",
      "count": 1
    }
  }
)

event.remove({id:'tac:m16a4'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:m16a4",
      "count": 1
    }
  }
)

event.remove({id:'tac:scar_h'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 5
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:scar_h",
      "count": 1
    }
  }
)

event.remove({id:'tac:scar_l'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:scar_l",
      "count": 1
    }
  }
)

event.remove({id:'tac:mk47'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:mk47",
      "count": 1
    }
  }
)

event.remove({id:'tac:spr15'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:spr15",
      "count": 1
    }
  }
)

event.remove({id:'tac:mk18_mod1'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinte"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:mk18_mod1",
      "count": 1
    }
  }
)

// 狙击步枪

event.remove({id:'sevendaystomine:sniper_rifle'})
event.remove({id:'tac:m24'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:sniper_rifle_barrel"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:sniper_rifle_trigger"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:sniper_rifle_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 5
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintb"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:m24",
      "count": 1
    }
  }
)

event.remove({id:'tac:ai_awp'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:sniper_rifle_barrel"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:sniper_rifle_trigger"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:sniper_rifle_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "forge:gems/diamond"
        },
        "count": 10
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintb"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:ai_awp",
      "count": 1
    }
  }
)

// 霰弹枪

event.remove({id:'sevendaystomine:shotgun_short'})
event.remove({id:'tac:db_short'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_barrel_short"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_receiver"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_stock_short"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinta"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:db_short",
      "count": 1
    }
  }
)

event.remove({id:'sevendaystomine:shotgun'})
event.remove({id:'tac:aa_12'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_receiver"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_parts"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_stock"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinta"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:aa_12",
      "count": 1
    }
  }
)

event.remove({id:'tac:m870_classic'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_barrel"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_receiver"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_parts"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_stock"
        },
        "count": 1
      },
      {
        "item": {
          "tag": "forge:leather"
        },
        "count": 8
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinta"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:m870_classic",
      "count": 1
    }
  }
)

event.remove({id:'tac:m1014'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_receiver"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_parts"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:shotgun_stock"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprinta"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:m1014",
      "count": 1
    }
  }
)

// 机枪

event.remove({id:'tac:m60'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 5
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintf"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:m60",
      "count": 1
    }
  }
)

event.remove({id:'tac:dp28'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 4
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintf"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:dp28",
      "count": 1
    }
  }
)

event.remove({id:'tac:rpk'})
event.custom(
  {
    "type": "tac:workbench",
    "materials": [
      {
        "item": {
          "tag": "sdnsgunpart:rifle_barrel"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_bolt"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:smg_trigger"
        },
        "count": 2
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_parts"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsgunpart:rifle_stock"
        },
        "count": 3
      },
      {
        "item": {
          "tag": "sdnsmisc:blueprintf"
        },
        "count": 1
      }
    ],
    "result": {
      "item": "tac:rpk",
      "count": 1
    }
  }
)

})
