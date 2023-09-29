LootJS.modifiers(e => {
    e.addLootTableModifier('illagerinvasion:chests/illusioner_tower_entrance')
    .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.2))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.2))])
        .addWeightedLoot(
            [2, 4],
            [
                LootEntry.of('minecraft:beetroot', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:red_mushroom', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:brown_mushroom', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:potato', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:glow_berries', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:sweet_berries', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:melon_slice', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:wheat', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:cookie', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:pumpkin_slice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:rice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:rice_panicle', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:onion', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:tomato', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:cabbage', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:cake_slice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:sweet_berry_cheesecake_slice', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('untamedwilds:food_aardvark_cucumber', 3).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:brown_mushroom_colony', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('farmersdelight:red_mushroom_colony', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:cake', 1).when(c => c.randomChance(0.05)),
            ]
        )
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('nyfsarcheryplus:iron_tipped_arrow', 4).when(c => c.randomChance(0.4))
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('simplyswords:iron_glaive').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_spear').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_sai').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_katana').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_rapier').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_twinblade').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_longsword').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:iron_sword').when(c => c.randomChance(0.1)),
            LootEntry.of('minecraft:iron_axe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_halberd').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_scythe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_chakram').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_greataxe').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_greathammer').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_claymore').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_cutlass').when(c => c.randomChance(0.1)),
            LootEntry.of('simplyswords:iron_warglaive').when(c => c.randomChance(0.1)),
        )

    e.addLootTableModifier('illagerinvasion:chests/illusioner_tower_stairs')
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:iron_block', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_block', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:emerald_block', 2).when(c => c.randomChance(0.1)),
            ]
        )
        .addWeightedLoot(
            [6, 6],
            [
                LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),
            ]
        )

})