LootJS.modifiers(e => {
    e.addLootTableModifier('betterstrongholds:chests/armoury')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
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
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [1, 3],
            [
                LootEntry.of('minecraft:beetroot', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:red_mushroom', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:brown_mushroom', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:potato', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:glow_berries', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:sweet_berries', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:melon_slice', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:wheat', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:cookie', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:pumpkin_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:rice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:rice_panicle', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:onion', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:tomato', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:cabbage', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:cake_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:sweet_berry_cheesecake_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('untamedwilds:food_aardvark_cucumber', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:brown_mushroom_colony', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:red_mushroom_colony', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('minecraft:cake', 1).when(c => c.randomChance(0.01)),
            ]
        )
        .addWeightedLoot(
            [1, 3],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),
                
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.2)),
            ]
        )
        //trash
        .addWeightedLoot(
            [2, 5],
            [
                LootEntry.of('minecraft:cobweb', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:stick', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.3)),
            ]
        )
        //horses
        .addAlternativesLoot(
            LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.02)),
            LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.05)),
            LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.2)),
        )
        //iron weapon
        .addAlternativesLoot(
            LootEntry.of('simplyswords:iron_glaive').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_spear').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_sai').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_katana').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_rapier').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_twinblade').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_longsword').when(c => c.randomChance(0.08)),
            LootEntry.of('minecraft:iron_sword').when(c => c.randomChance(0.08)),
            LootEntry.of('minecraft:iron_axe').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_halberd').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_scythe').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_chakram').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_greataxe').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_greathammer').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_claymore').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_cutlass').when(c => c.randomChance(0.08)),
            LootEntry.of('simplyswords:iron_warglaive').when(c => c.randomChance(0.08)),
        )
        //iron weapons enchanted
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('simplyswords:iron_glaive').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_spear').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_sai').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_katana').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_rapier').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_twinblade').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_longsword').when(c => c.randomChance(0.08)),
                LootEntry.of('minecraft:iron_sword').when(c => c.randomChance(0.08)),
                LootEntry.of('minecraft:iron_axe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_halberd').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_scythe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_chakram').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_greataxe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_greathammer').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_claymore').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_cutlass').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:iron_warglaive').when(c => c.randomChance(0.08)),
            )
            p.enchantWithLevels([5, 20]);
        });

    e.addLootTableModifier('betterstrongholds:chests/crypt')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 5],
            [
                Item.of('minecraft:bone', 1).withChance(0.4),
                Item.of('minecraft:bone_meal', 3).withChance(0.6),
                Item.of('minecraft:ender_pearl', 2).withChance(0.4),
                Item.of('minecraft:diamond', 1).withChance(0.1)
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.4,
                    "max": 1.0
                },
            })
        )

    e.addLootTableModifier('betterstrongholds:chests/grand_library')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [4, 12],
            [
                Item.of('minecraft:paper', 3).withChance(0.3),
                Item.of('minecraft:book', 2).withChance(0.3),
                Item.of('minecraft:compass', 1).withChance(0.05),
                Item.of('minecraft:map', 1).withChance(0.02),
                Item.of('minecraft:name_tag', 1).withChance(0.02),
                Item.of('minecraft:iron_ingot', 2).withChance(0.06),
                Item.of('minecraft:gold_ingot', 2).withChance(0.06),
                Item.of('minecraft:gold_nugget', 5).withChance(0.1),
                Item.of('minecraft:iron_nugget', 5).withChance(0.1),
                Item.of('minecraft:diamond', 1).withChance(0.02),
                Item.of('minecraft:lapis_lazuli', 4).withChance(0.1)
            ]
        )
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.4)));
            p.enchantWithLevels(30);
        })
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.6)));
            p.enchantWithLevels([15, 20]);
        })

    e.addLootTableModifier('betterstrongholds:chests/library_md')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.4)))
        .addWeightedLoot(
            [4, 8],
            [
                Item.of('minecraft:book', 2).withChance(0.3),
                Item.of('minecraft:lantern', 1).withChance(0.2),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.2)),
            ]

        )
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.4)));
            p.enchantWithLevels(30);
        })
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.6)));
            p.enchantWithLevels([15, 20]);
        })

    e.addLootTableModifier('betterstrongholds:chests/mess')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [2, 6],
            [
                LootEntry.of('minecraft:beetroot', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:red_mushroom', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:brown_mushroom', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:potato', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:glow_berries', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:sweet_berries', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:melon_slice', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:wheat', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:cookie', 4).when(c => c.randomChance(0.05)),
                LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:pumpkin_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:rice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:rice_panicle', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:onion', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:tomato', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:cabbage', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:cake_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:sweet_berry_cheesecake_slice', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('untamedwilds:food_aardvark_cucumber', 3).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:brown_mushroom_colony', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('farmersdelight:red_mushroom_colony', 2).when(c => c.randomChance(0.02)),
                LootEntry.of('minecraft:cake', 1).when(c => c.randomChance(0.01)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.6)),
        )

    e.addLootTableModifier('betterstrongholds:chests/prison_lg')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 2], LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3)))
        .addWeightedLoot([0, 4], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [2, 4],
            [
                Item.of('minecraft:iron_ingot', 2).withChance(0.2),
                Item.of('minecraft:iron_nugget', 5).withChance(0.4),
                Item.of('minecraft:diamond', 1).withChance(0.1),
                Item.of('minecraft:emerald', 2).withChance(0.2),
            ]
        )
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:cobweb', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:stick', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.3)),
                Item.of('minecraft:chain', 1).withChance(0.2)
            ]
        )

    e.addLootTableModifier('betterstrongholds:chests/treasure')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet'))
        .addWeightedLoot(
            [2, 4],
            [
                Item.of('minecraft:iron_ingot', 2).withChance(0.4),
                Item.of('minecraft:gold_ingot', 2).withChance(0.4),
                Item.of('minecraft:diamond', 1).withChance(0.2),

                Item.of('epicsamurai:silver_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:steel_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:amethyst_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:quartz_ingot', 3).withChance(0.1),
                Item.of('epicsamurai:ruby', 3).withChance(0.1),
                Item.of('epicsamurai:jade', 3).withChance(0.1),
                Item.of('epicsamurai:aquamarine', 3).withChance(0.1),
                Item.of('epicsamurai:onyx', 3).withChance(0.1),

                Item.of('epicpaladins:arclight_gem', 3).withChance(0.1),
                Item.of('epicpaladins:moonlight_gem', 3).withChance(0.1),
                Item.of('epicpaladins:bloodstone_gem', 3).withChance(0.1),
                Item.of('epicpaladins:cryorium_gem', 3).withChance(0.1),
            ]
        )
        .addWeightedLoot([
            LootEntry.of('irons_spellbooks:silver_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:cooldown_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:heavy_chain_necklace').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:emerald_stoneplate_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:fireward_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:frostward_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:cast_time_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:conjurers_talisman').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:poisonward_ring').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:concentration_amulet').when(c => c.randomChance(0.1)),
            LootEntry.of('irons_spellbooks:affinity_ring').customFunction({ function: "irons_spellbooks:randomize_ring_enhancement" }).when(c => c.randomChance(0.1)),
        ])
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('simplyswords:runic_longsword').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_twinblade').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_rapier').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_katana').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_sai').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_spear').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_glaive').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_cutlass').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_claymore').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_chakram').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_greataxe').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_greathammer').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_warglaive').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_scythe').when(c => c.randomChance(0.1)),
                LootEntry.of('simplyswords:runic_halberd').when(c => c.randomChance(0.1))
            )
            p.enchantWithLevels(30);
        })
        .addLoot('simplyswords:empowered_remnant')

});