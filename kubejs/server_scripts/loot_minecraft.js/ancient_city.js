LootJS.modifiers(e => {

    e.addLootTableModifier('minecraft:chests/ancient_city')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('irons_spellbooks:ruined_book').when(c => c.randomChance(0.03)))
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot(
            [0, 2],
            [
                LootEntry.of('minecraft:ward_armor_trim_smithing_template').when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:silence_armor_trim_smithing_template').when(c => c.randomChance(0.1))
            ]
        )
        .addWeightedLoot(
            [8, 14],
            [
                LootEntry.of('minecraft:iron_ingot', 5).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:gold_ingot', 4).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:coal', 7).when(c => c.randomChance(0.6)),

                LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
                LootEntry.of('epicsamurai:ruby', 2).when(c => c.randomChance(0.1)),

                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.2)),
            ]
        )
        .addWeightedLoot(
            [0, 4],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3))
            ]
        )
        .addWeightedLoot(
            [3, 5],
            [
                LootEntry.of('minecraft:disc_fragment_5', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:echo_shard', 4).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:glow_berries', 2).when(c => c.randomChance(0.3)),
                LootEntry.of('minecraft:amethyst_shard', 3).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:candle', 1).when(c => c.randomChance(0.35)),
            ]
        )
        .pool(p => {
            p.addLoot(LootEntry.of('minecraft:book').when(c => c.randomChance(0.05)));
            p.enchantRandomly('minecraft:swift_sneak');
        })
        .addLoot(LootEntry.of('minecraft:music_disc_otherside').when(c => c.randomChance(0.01)))
        .pool(p => {
            p.addAlternativesLoot(
                LootEntry.of('minecraft:diamond_axe').when(c => c.randomChance(0.02)),
                LootEntry.of('minecraft:diamond_sword').when(c => c.randomChance(0.02)),
                LootEntry.of('simplyswords:diamond_longsword').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_twinblade').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_rapier').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_katana').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_sai').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_spear').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_glaive').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_warglaive').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_cutlass').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_claymore').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_greathammer').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_greataxe').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_chakram').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_scythe').when(c => c.randomChance(0.025)),
                LootEntry.of('simplyswords:diamond_halberd').when(c => c.randomChance(0.025)),
            )
            p.enchantWithLevels(30, true)
        })


    e.addLootTableModifier('minecraft:chests/ancient_city_centre')
        .removeLoot(Ingredient.all)
        .addLoot(LootEntry.of('simplyswords:runic_tablet'))
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 1.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.4)))
        .addLoot('minecraft:music_disc_otherside')
        .addLoot(Item.of('minecraft:diamond_hoe').enchant('minecraft:silk_touch', 1).enchant('minecraft:unbreaking', 3).enchant('minecraft:efficiency', 5))
        .addWeightedLoot(
            [1, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple')
            ]
        )
        .addWeightedLoot(
            [9, 13],
            [
                LootEntry.of('minecraft:diamond', 3).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:emerald', 6).when(c => c.randomChance(0.6)),
            ]
        )
        .addWeightedLoot(
            [4, 6],
            [
                LootEntry.of('minecraft:glow_berries', 3).when(c => c.randomChance(0.7)),
                LootEntry.of('minecraft:dragon_breath', 1).when(c => c.randomChance(0.2)),
                LootEntry.of('minecraft:sculk', 2).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:sculk_vein', 5).when(c => c.randomChance(0.5)),
                LootEntry.of('minecraft:sculk_shrieker', 2).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:sculk_sensor', 3).when(c => c.randomChance(0.8)),
                LootEntry.of('minecraft:sculk_catalyst', 3).when(c => c.randomChance(0.6)),
                LootEntry.of('minecraft:amethyst_block', 2).when(c => c.randomChance(0.4))
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

})