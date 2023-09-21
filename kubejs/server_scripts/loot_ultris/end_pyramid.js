LootJS.modifiers(e => {
    e.addLootTableModifier('1_splatus:ultris/chests/endpyramid_treasure')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])
        .addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])
        .addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
        .addLoot(LootEntry.of('minecraft:stick').customFunction({
            "function": "minecraft:set_nbt",
            "tag": "{CustomModelData:87005,Enchantments:[{id:\"minecraft:unbreaking\",lvl:1s}],display:{Lore:['{\"translate\":\"\",\"color\":\"yellow\",\"italic\": true}','{\"translate\":\"Used to reawaken the Shulker Stone\",\"color\":\"yellow\",\"italic\": true}','{\"translate\":\"from its deep sleep in its inverted\",\"color\":\"yellow\",\"italic\": true}','{\"translate\":\"pyramid high above the End Cities\",\"color\":\"yellow\",\"italic\": true}','{\"translate\":\"Ultris: Boss Expansion\",\"color\":\"#676e75\",\"italic\": true}','{\"translate\":\"\",\"color\":\"yellow\",\"italic\": false}'],Name:'{\"translate\":\"Endstone Key\",\"color\":\"yellow\",\"italic\": false}'}}"
        }))
        .addWeightedLoot(
            [5, 8],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('epicsamurai:ruby', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.6)),
            ]
        )
        .addWeightedLoot(
            [2, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.6,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.6)))
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


    e.addLootTableModifier('1_splatus:ultris/chests/endpyramid_treasure2')
        .removeLoot(Ingredient.all)
        .addWeightedLoot(
            [5, 8],
            [
                LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('epicsamurai:ruby', 1).when(c => c.randomChance(0.4)),
                LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.6)),
            ]
        )
        .addWeightedLoot(
            [2, 3],
            [
                LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
                LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
            ]
        )
        .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.4,
                    "max": 0.8
                },
            })
            .when(c => c.randomChance(0.2)))
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
            );
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

})