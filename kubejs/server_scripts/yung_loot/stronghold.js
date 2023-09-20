LootJS.modifiers(e => {
    e.addLootTableModifier('betterstrongholds:chests/armoury')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [0, 2],
            [
                Item.of('touhou_little_maid:power_point', 2).withChance(0.3)
            ]
        )
        .addWeightedLoot(
            [3, 8],
            [
                Item.of('minecraft:coal', 3).withChance(0.3),
                Item.of('minecraft:charcoal', 3).withChance(0.3),
                Item.of('minecraft:redstone', 4).withChance(0.2),
                Item.of('minecraft:iron_ingot', 2).withChance(0.2),
                Item.of('minecraft:string', 1).withChance(0.2),
                Item.of('minecraft:arrow', 2).withChance(0.3),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_boots').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_boots').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_boots').when(c => c.randomChance(0.1)),
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_boots').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_boots').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_boots').when(c => c.randomChance(0.1)),
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_helmet').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_chestplate').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_leggings').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:diamond_boots').when(c => c.randomChance(0.1)),
            LootEntry.of('epicsamurai:diamond_samurai_boots').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:pumpkin_boots').when(c => c.randomChance(0.1)),
        )
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('minecraft:diamond_helmet').when(c => c.randomChance(0.05)),
                LootEntry.of('epicsamurai:diamond_samurai_helmet').when(c => c.randomChance(0.05)),
                LootEntry.of('irons_spellbooks:pumpkin_helmet').when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:diamond_chestplate').when(c => c.randomChance(0.05)),
                LootEntry.of('epicsamurai:diamond_samurai_chestplate').when(c => c.randomChance(0.05)),
                LootEntry.of('irons_spellbooks:pumpkin_chestplate').when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:diamond_leggings').when(c => c.randomChance(0.05)),
                LootEntry.of('epicsamurai:diamond_samurai_leggings').when(c => c.randomChance(0.05)),
                LootEntry.of('irons_spellbooks:pumpkin_leggings').when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:diamond_boots').when(c => c.randomChance(0.05)),
                LootEntry.of('epicsamurai:diamond_samurai_boots').when(c => c.randomChance(0.05)),
                LootEntry.of('irons_spellbooks:pumpkin_boots').when(c => c.randomChance(0.05)),
            )
            p.enchantWithLevels([20, 30]);
        });

    e.addLootTableModifier('betterstrongholds:chests/common')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [0, 2],
            [
                Item.of('touhou_little_maid:power_point', 2).withChance(0.3)
            ]
        )
        //food
        .addWeightedLoot(
            [1, 3],
            [
                Item.of('minecraft:beetroot').withChance(0.05),
                Item.of('minecraft:red_mushroom').withChance(0.05),
                Item.of('minecraft:brown_mushroom').withChance(0.05),
                Item.of('minecraft:potato').withChance(0.05),
                Item.of('minecraft:carrot').withChance(0.05),
                Item.of('minecraft:glow_berries').withChance(0.05),
                Item.of('minecraft:sweet_berries').withChance(0.05),
                Item.of('minecraft:melon_slice').withChance(0.05),
                Item.of('minecraft:wheat').withChance(0.05),
                Item.of('minecraft:cookie').withChance(0.05),
                Item.of('farmersdelight:pumpkin_slice').withChance(0.02),
                Item.of('farmersdelight:rice').withChance(0.02),
                Item.of('farmersdelight:rice_panicle').withChance(0.02),
                Item.of('farmersdelight:onion').withChance(0.02),
                Item.of('farmersdelight:tomato').withChance(0.02),
                Item.of('farmersdelight:cabbage').withChance(0.02),
                Item.of('farmersdelight:cake_slice').withChance(0.02),
                Item.of('farmersdelight:sweet_berry_cheesecake_slice').withChance(0.02),
                Item.of('untamedwilds:food_aardvark_cucumber').withChance(0.02),
                Item.of('minecraft:rabbit_foot').withChance(0.02),
                Item.of('farmersdelight:brown_mushroom_colony').withChance(0.02),
                Item.of('farmersdelight:red_mushroom_colony').withChance(0.02),
                Item.of('minecraft:cake').withChance(0.01)
            ]
        )
        //ore
        .addWeightedLoot(
            [1, 3],
            [
                Item.of('minecraft:coal', 3).withChance(0.3),
                Item.of('minecraft:charcoal', 3).withChance(0.3),
                Item.of('minecraft:redstone', 4).withChance(0.2),
                Item.of('minecraft:iron_ingot', 2).withChance(0.1),
                Item.of('minecraft:gold_ingot', 2).withChance(0.1),
                Item.of('minecraft:gold_nugget', 5).withChance(0.25),
                Item.of('minecraft:iron_nugget', 5).withChance(0.25),
                Item.of('minecraft:diamond', 1).withChance(0.05),
                Item.of('minecraft:copper_ingot', 3).withChance(0.15),
            ]
        )
        //trash
        .addWeightedLoot(
            [2, 5],
            [
                Item.of('minecraft:cobweb', 1).withChance(0.2),
                Item.of('minecraft:stick', 1).withChance(0.3),
                Item.of('minecraft:bone_meal', 3).withChance(0.2),
                Item.of('minecraft:string', 2).withChance(0.2),
                Item.of('minecraft:gunpowder', 2).withChance(0.2),
            ]
        )
        //horses
        .addAlternativesLoot(
            LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.15)),
            LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.12)),
            LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.08)),
            LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.03))
        )
        //iron weapon
        .addAlternativesLoot(
            LootEntry.of('simplyswords:iron_glaive').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_spear').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_sai').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_katana').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_rapier').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_twinblade').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_longsword').when(c => c.randomChance(0.015)),
            LootEntry.of('minecraft:iron_sword').when(c => c.randomChance(0.015)),
            LootEntry.of('minecraft:iron_axe').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_halberd').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_scythe').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_chakram').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_greataxe').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_greathammer').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_claymore').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_cutlass').when(c => c.randomChance(0.015)),
            LootEntry.of('simplyswords:iron_warglaive').when(c => c.randomChance(0.015)),
        )
        //iron weapons enchanted
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('simplyswords:iron_glaive').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_spear').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_sai').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_katana').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_rapier').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_twinblade').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_longsword').when(c => c.randomChance(0.005)),
                LootEntry.of('minecraft:iron_sword').when(c => c.randomChance(0.005)),
                LootEntry.of('minecraft:iron_axe').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_halberd').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_scythe').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_chakram').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_greataxe').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_greathammer').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_claymore').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_cutlass').when(c => c.randomChance(0.005)),
                LootEntry.of('simplyswords:iron_warglaive').when(c => c.randomChance(0.005)),
            )
            p.enchantWithLevels([5, 20]);
        });
});