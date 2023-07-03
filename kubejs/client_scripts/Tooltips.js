onEvent('item.tooltip', tooltip => {

  tooltip.add('k-turrets:arrow_turret_item',
  [
    "§8基础伤害: §612.0",
    "§8开火速度: §620",
    "§8生命值: §660.0",
    "§8护甲: §63.0",
    "§8攻击范围: §632.0",
    "需要弓或弩才能使用，使用弩时伤害+20%",
    "§e放置后对其按下[Shift]+右键可进行炮台设置"
  ])

  tooltip.add('k-turrets:bullet_turret_item',
  [
    "§8基础伤害: §616(铁粒)/14(金粒)",
    "§8开火速度: §620",
    "§8生命值: §660.0",
    "§8护甲: §63.0",
    "§8攻击范围: §632.0",
    "使用铁粒和金粒作为弹药",
    "§e放置后对其按下[Shift]+右键可进行炮台设置"
  ])

  tooltip.add('k-turrets:brick_turret_item',
  [
    "§8基础伤害: §620(下界砖)/18(红砖)",
    "§8开火速度: §620",
    "§8生命值: §660.0",
    "§8护甲: §63.0",
    "§8攻击范围: §632.0",
    "使用红砖和下界砖作为弹药",
    "§e放置后对其按下[Shift]+右键可进行炮台设置"
  ])

  tooltip.add('k-turrets:firecharge_turret_item',
  [
    "§8基础伤害: §612",
    "§8开火速度: §620",
    "§8生命值: §660.0",
    "§8护甲: §63.0",
    "§8攻击范围: §632.0",
    "使用火焰弹作为弹药",
    "§e放置后对其按下[Shift]+右键可进行炮台设置"
  ])

  tooltip.add('k-turrets:gauss_turret_item',
  [
    "§8基础伤害: §648",
    "§8开火速度: §620",
    "§8生命值: §660.0",
    "§8护甲: §63.0",
    "§8攻击范围: §632.0",
    "使用高斯子弹，拥有§c极强§f的攻击力",
    "§e放置后对其按下[Shift]+右键可进行炮台设置"
  ])

  tooltip.add('k-turrets:cobble_turret_item',
  [
    "§8基础伤害: §66",
    "§8开火速度: §620",
    "§8生命值: §660.0",
    "§8护甲: §63.0",
    "§8攻击范围: §632.0",
    "使用圆石作为弹药",
    "§e放置后对其按下[Shift]+右键可进行炮台设置"
  ])

  tooltip.add([
    'sevendaystomine:car_chassis',
    'sevendaystomine:computer',
    'sevendaystomine:monitor_off'
  ],
  [
    "§c该物品会导致游戏永久崩溃，已弃用"
  ])

  tooltip.add(['sevendaystomine:book_shotgun', 'sevendaystomine:book_sniper', 'sevendaystomine:book_magnum', 'sevendaystomine:book_mp5', 'sevendaystomine:book_hunting_rifle', 'sevendaystomine:book_auger', 'sevendaystomine:book_rocket', 'sevendaystomine:survival_guide', 'sevendaystomine:book_forging', Item.of('sevendaystomine:book_ammo', '{read:1b}'), 'sevendaystomine:book_computers', 'sevendaystomine:book_concrete', 'sevendaystomine:book_electricity', 'sevendaystomine:book_chemistry', 'sevendaystomine:book_metalworking', 'sevendaystomine:book_pistol', 'sevendaystomine:book_minibike'],
  [
    "> §c该技能书仅供技术解锁用途",
    "> §c书中所写内容大部分已失效",
    "> §a具体教学请参考游戏百科书"
  ])


})