#loader contenttweaker
import mods.contenttweaker.item.ItemBuilder;
import crafttweaker.api.item.ItemGroup;
import crafttweaker.api.BracketHandlers;

var sdnsammotab = ItemGroup.create("sdnsammotab", () => BracketHandlers.getItem("contenttweaker:b_9mmra"));

// 子弹粗坯
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_9mmra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_12gra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_30_06ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_45acpra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_50aera");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_50bmgra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_58x42ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_68x51furyra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_308ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_338ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_556x45ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_762x25ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_762x39ra");
new ItemBuilder()
    .withItemGroup(sdnsammotab)
    .build("b_762x54ra");

// 蓝图

var sdnsmisctab = ItemGroup.create("sdnsmisctab", () => BracketHandlers.getItem("contenttweaker:blueprinta"));

new ItemBuilder()
    .withItemGroup(sdnsmisctab)
    .build("blueprinta");
new ItemBuilder()
    .withItemGroup(sdnsmisctab)
    .build("blueprintb");
new ItemBuilder()
    .withItemGroup(sdnsmisctab)
    .build("blueprintc");
new ItemBuilder()
    .withItemGroup(sdnsmisctab)
    .build("blueprintd");
new ItemBuilder()
    .withItemGroup(sdnsmisctab)
    .build("blueprinte");
new ItemBuilder()
    .withItemGroup(sdnsmisctab)
    .build("blueprintf");