onEvent('block.right_click', event => {
  if (event.block.id == "sevendaystomine:monitor_off") {
      event.cancel();
  }
});



onEvent('block.break', event => {
  if (event.block.id == 'sevendaystomine:fridge') {
      event.player.give('sevendaystomine:fridge');
  }
});












































onEvent('tiem.right_click', event => {
  if (event.item.id == "projecte:transmutation_table") {
    event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "projecte:transmutation_table") {
      event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "projecte:interdiction_torch") {
    event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "projecte:interdiction_torch") {
      event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "projecte:dm_pedestal") {
    event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "projecte:dm_pedestal") {
      event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "projecte:item.pe_time_watch") {
    event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "projecte:item.pe_time_watch") {
      event.player.tell("§c检测到作弊模组：等价交换，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "torcherino:blocktorcherino") {
    event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "torcherino:blocktorcherino") {
      event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "torcherino:blockcompressedlanterino") {
    event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "torcherino:blockcompressedlanterino") {
      event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "torcherino:blocklanterino") {
    event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "torcherino:blocklanterino") {
      event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "torcherino:blockcompressedlanterino") {
    event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "torcherino:blockcompressedlanterino") {
      event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});

onEvent('tiem.right_click', event => {
  if (event.item.id == "torcherino:blockdoublecompressedlanterino") {
    event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});
onEvent('block.place', event => {
  if (event.block.id == "torcherino:blockdoublecompressedlanterino") {
      event.player.tell("§c检测到作弊模组：加速火把，已禁用！")
      event.cancel();
  }
});