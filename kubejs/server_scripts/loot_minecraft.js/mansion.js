LootJS.modifiers(e => {

    e.addLootTableModifier('minecraft:chests/illager_mansion/evoker_chest')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.2)))
        .addWeightedLoot(
            [3, 4],
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
            LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:golden_apple', 2).when(c => c.randomChance(0.6)),
            LootEntry.of('minecraft:golden_carrot', 4).when(c => c.randomChance(1.0)),
        )
        .addWeightedLoot(
            [4, 5],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.6)),
            ]
        )


    e.addLootTableModifier('minecraft:chests/illager_mansion/generic')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addLoot(LootEntry.of('minecraft:sentry_armor_trim_smithing_template').when(c => c.randomChance(0.3)))
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
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
        .addWeightedLoot(
            [6, 10],
            [
                LootEntry.of('minecraft:dark_oak_sapling', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:dark_oak_planks', 8).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:dark_oak_log', 4).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:candle', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:flower_pot', 2).when(c => c.randomChance(0.2))
            ]
        )

    e.addLootTableModifier('minecraft:chests/illager_mansion/kitchen')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [6, 10],
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
            [4, 5],
            [
                LootEntry.of('minecraft:cooked_porkchop').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:baked_potato').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:cooked_mutton').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:cooked_chicken').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:cooked_rabbit').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:cooked_beef').when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:pumpkin_pie').when(c => c.randomChance(0.3))
            ]
        )

    e.addLootTableModifier('minecraft:chests/illager_mansion/library_chest')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [3, 5],
            [
                LootEntry.of('minecraft:bookshelf', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:book', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:writable_book', 1).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:feather', 2).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:leather', 4).when(c => c.randomChance(0.5))
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.2,
                    "max": 1.0
                },
            })
        )
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.5)));
            p.enchantWithLevels(30);
        })
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.5)));
            p.enchantWithLevels(30);
        })

    e.addLootTableModifier('minecraft:chests/illager_mansion/pillager_chest')
        .addWeightedLoot(
            [6, 10],
            [
                LootEntry.of('minecraft:arrow', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:spectral_arrow', 4).when(c => c.randomChance(0.2)),
                LootEntry.of('nyfsarcheryplus:netherite_tipped_arrow', 1).when(c => c.randomChance(0.05)),
                LootEntry.of('nyfsarcheryplus:diamond_tipped_arrow', 1).when(c => c.randomChance(0.08)),
                LootEntry.of('nyfsarcheryplus:golden_tipped_arrow', 2).when(c => c.randomChance(0.12)),
                LootEntry.of('nyfsarcheryplus:iron_tipped_arrow', 2).when(c => c.randomChance(0.15)),
                LootEntry.of('nyfsarcheryplus:stone_tipped_arrow', 4).when(c => c.randomChance(0.2))
            ]
        )

    e.addLootTableModifier('minecraft:chests/illager_mansion/ravager_chest')
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:iron_block', 3).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:gold_block', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:emerald_block', 2).when(c => c.randomChance(0.1)),
            ]
        )

    e.addLootTableModifier('minecraft:chests/illager_mansion/secret_room')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [6, 6],
            [
                LootEntry.of('minecraft:iron_block', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:gold_block', 2).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:emerald_block', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:diamond_block', 1).when(c => c.randomChance(0.2)),
            ]
        )
        .addWeightedLoot(
            [10, 12],
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
                LootEntry.of('minecraft:amethyst_shard', 2).when(c => c.randomChance(0.6)),
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.7,
                    "max": 0.9
                },
            })
        )
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
        .addAlternativesLoot(
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
        )

    e.addLootTableModifier('minecraft:chests/illager_mansion/smithing_room')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [8, 10],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
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
            p.enchantWithLevels([10, 20]);
        });

    e.addLootTableModifier('minecraft:chests/illager_mansion/vindicator_chest')
        .addWeightedLoot(
            [8, 10],
            [
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
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

    e.addLootTableModifier('minecraft:chests/illager_mansion/witch_chest')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [5, 8],
            [
                LootEntry.of('minecraft:sugar', 8).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:gunpowder', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:spider_eye', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:slime_ball', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:phantom_membrane', 2).when(c => c.randomChance(0.15)),
                LootEntry.of('minecraft:pufferfish', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:carrot', 4).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:dragon_breath', 1).when(c => c.randomChance(0.02)),
            ]
        )
        .addWeightedLoot(
            [2, 4],
            [
                LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.2)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:potion', '{Potion:"irons_spellbooks:instant_mana_two"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:bulldrogioth"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"illagerinvasion:strong_berserking"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"aquamirae:potion_of_tenacity"}').when(c => c.randomChance(0.10))
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.5,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.2)))
        .addAlternativesLoot(
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
            LootEntry.of('irons_spellbooks:affinity_ring', 1).customFunction({ function: "irons_spellbooks:randomize_ring_enhancement" }).when(c => c.randomChance(0.1)),
        )



})

/*
    "minecraft:chests/illager_mansion/wool",
    */