LootJS.modifiers(e => {

    e.addLootTableModifier('nova_structures:chests/illager_hideout_brewing')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addAlternativesLoot(
            LootEntry.of('minecraft:phantom_membrane', 2).when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:pufferfish', 1).when(c => c.randomChance(0.3)),
            LootEntry.of('minecraft:rabbit_foot', 2).when(c => c.randomChance(0.5)),
        )
        .addWeightedLoot(
            [5, 6],
            [
                Item.of('minecraft:sugar', 1).withChance(0.8),
                Item.of('minecraft:gunpowder', 2).withChance(0.6),
                Item.of('minecraft:spider_eye', 6).withChance(0.6),
                Item.of('minecraft:slime_ball', 6).withChance(0.6),
            ]
        )
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.4)),
            ]
        )
        .addAlternativesLoot(
            LootEntry.of('minecraft:potion', '{Potion:"irons_spellbooks:instant_mana_two"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:bulldrogioth"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"fromtheshadows:terrible_plague"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"illagerinvasion:strong_berserking"}').when(c => c.randomChance(0.10)),
            LootEntry.of('minecraft:potion', '{Potion:"aquamirae:potion_of_tenacity"}').when(c => c.randomChance(0.10))
        );


    e.addLootTableModifier('nova_structures:chests/illager_hideout_fishing')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [2, 5],
            [
                LootEntry.of('farmersdelight:salmon_slice', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:cod_slice', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('aquamirae:spinefish', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:cod', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:tropical_fish', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:pufferfish', 1).when(c => c.randomChance(0.5)),
                LootEntry.of('rocks:starfish', 2).when(c => c.randomChance(0.8))
            ]
        );

    e.addLootTableModifier('nova_structures:chests/illager_hideout_heart_loot')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('minecraft:music_disc_otherside').when(c => c.randomChance(0.3)))
        .addLoot(LootEntry.of('minecraft:globe_banner_pattern').when(c => c.randomChance(0.3)))
        .addLoot(LootEntry.of('simplyswords:runic_tablet'))
        .addWeightedLoot([0, 3], [LootEntry.of('minecraft:name_tag').when(c => c.randomChance(0.5))])
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
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            }))
        .addWeightedLoot(
            [12, 16],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:emerald', 6).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:iron_ingot', 8).when(c => c.randomChance(0.8)),
            ]
        )

    e.addLootTableModifier('nova_structures:chests/illager_hideout_lesser_tresure')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.4)))
        .addLoot(LootEntry.of('minecraft:vex_armor_trim_smithing_template').when(c => c.randomChance(0.3)))
        .addLoot(LootEntry.of('minecraft:music_disc_ward').when(c => c.randomChance(0.1)))
        .addLoot(LootEntry.of('minecraft:music_disc_11').when(c => c.randomChance(0.05)))
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

    e.addLootTableModifier('nova_structures:chests/illager_hideout_library')
        .removeLoot(Ingredient.all)
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
            [4, 5],
            [

                LootEntry.of('minecraft:paper', 4).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:feather', 5).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:book', 2).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:lantern', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.5)),
            ]
        )
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.6)));
            p.enchantWithLevels([15, 20]);
        })

    e.addLootTableModifier('nova_structures:chests/illager_hideout_meat')
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('untamedwilds:food_bear_raw', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('untamedwilds:food_turtle_raw', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('untamedwilds:food_pachyderm_raw', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:cod_slice', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:salmon_slice', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:mutton_chops', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:ham', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:minced_beef', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:chicken_cuts', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('farmersdelight:bacon', 1).when(c => c.randomChance(0.3))
            ]
        )

    e.addLootTableModifier('nova_structures:chests/illager_hideout_raw_ores')
        .addWeightedLoot(
            [6, 8],
            [
                LootEntry.of('minecraft:raw_iron_block', 3).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:raw_copper_block', 4).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:raw_gold_block', 1).when(c => c.randomChance(0.3))
            ]
        )

    e.addLootTableModifier('nova_structures:chests/illager_hideout_trash')
        .addWeightedLoot(
            [3, 5],
            [
                LootEntry.of('minecraft:cobweb', 1).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:stick', 2).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.7)),
            ]
        )

    e.addLootTableModifier('nova_structures:chests/illager_hideout_tresure')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.8)))
        .addLoot(LootEntry.of('minecraft:vex_armor_trim_smithing_template').when(c => c.randomChance(0.3)))
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
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.5,
                    "max": 1.0
                },
            }))
        .addWeightedLoot(
            [14, 16],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:emerald', 6).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:netherite_scrap', 1).when(c => c.randomChance(0.3)),
            ]
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
        .addWeightedLoot(
            [1, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple')
            ]
        );

    e.addLootTableModifier('nova_structures:chests/illager_hideout_vegitarian')
        .addWeightedLoot(
            [5, 6],
            [
                LootEntry.of('farmersdelight:mixed_salad', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('farmersdelight:onion', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('farmersdelight:tomato', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('farmersdelight:cabbage', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('oceansdelight:seagrass_salad', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('untamedwilds:food_aardvark_cucumber', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:beetroot', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:golden_carrot', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:potato', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:carrot', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:dried_kelp', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:baked_potato', 1).when(c => c.randomChance(0.2))
            ]
        );

    e.addLootTableModifier('nova_structures:chests/illager_hideout_weaponry')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.3)))
        .addLoot(LootEntry.of('minecraft:sentry_armor_trim_smithing_template').when(c => c.randomChance(0.2)))
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('minecraft:diamond_axe').when(c => c.randomChance(0.08)),
                LootEntry.of('minecraft:diamond_sword').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_longsword').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_twinblade').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_rapier').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_katana').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_sai').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_spear').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_glaive').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_warglaive').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_cutlass').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_claymore').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_greathammer').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_greataxe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_chakram').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_scythe').when(c => c.randomChance(0.08)),
                LootEntry.of('simplyswords:diamond_halberd').when(c => c.randomChance(0.08)),
            )
            p.enchantWithLevels(30);
        })
        .addWeightedLoot(
            [6, 10],
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

});