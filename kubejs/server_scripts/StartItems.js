
onEvent('player.logged_in', event => {

  if (!event.player.stages.has('starting_items')) {

    event.player.stages.add('starting_items')

    event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:7dns"}'))
  }

  if (!event.player.stages.has('starting_items2')) {

    event.player.stages.add('starting_items2')

    event.player.give('sevendaystomine:bottled_water')
    event.player.give('sevendaystomine:bottled_water')
    event.player.give('sevendaystomine:bottled_water')
    event.player.give(Item.of('sevendaystomine:canned_ham', '{Damage:0}'))
    event.player.give('sevendaystomine:torch')
  }
})