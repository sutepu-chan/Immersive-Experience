LootJS.modifiers(e => {

    const runic_tablet = LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.3));
    //.addLoot(LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.1)))
    const scroll = LootEntry.of("irons_spellbooks:scroll")
        .customFunction({ function: "irons_spellbooks:randomize_spell" })
        .when(c => c.randomChance(0.4));
    /*
    .addLoot(LootEntry.of("irons_spellbooks:scroll", 1)
            .customFunction({
                function: "irons_spellbooks:randomize_spell",
                quality: {
                    "min": 0.0,
                    "max": 1.0
                },
            })
            .when(c => c.randomChance(0.4)))
    */
    const power_point = LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.3));
    //.addWeightedLoot([0, 2], [LootEntry.of('touhou_little_maid:power_point', 2).when(c => c.randomChance(0.4))])

    const arcane_essence = LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4));
    //.addWeightedLoot([0, 5], [LootEntry.of('irons_spellbooks:arcane_essence').when(c => c.randomChance(0.4))])

    const spellCurios = [
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
    ]
    /*
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
    */


    const normalFood = [
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
    const rareFood = [
        LootEntry.of('minecraft:enchanted_golden_apple').when(c => c.randomChance(0.1)),
        LootEntry.of('minecraft:golden_apple').when(c => c.randomChance(0.3)),
        LootEntry.of('minecraft:golden_carrot').when(c => c.randomChance(0.6)),
    ]


    const bulkOre = [
        LootEntry.of('minecraft:lapis_lazuli', 6).when(c => c.randomChance(0.6)),
        LootEntry.of('minecraft:redstone', 7).when(c => c.randomChance(0.5)),
        LootEntry.of('minecraft:coal', 7).when(c => c.randomChance(0.7)),

    ]
    const commonOre = [
        LootEntry.of('minecraft:iron_nugget', 6).when(c => c.randomChance(0.4)),
        LootEntry.of('minecraft:iron_ingot', 3).when(c => c.randomChance(0.3)),
        LootEntry.of('minecraft:gold_nugget', 6).when(c => c.randomChance(0.4)),
        LootEntry.of('minecraft:gold_ingot', 3).when(c => c.randomChance(0.3)),
        LootEntry.of('minecraft:copper_ingot', 4).when(c => c.randomChance(0.4)),
    ]
    const mediumRareOre = [
        LootEntry.of('epicsamurai:silver_ingot', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicsamurai:amethyst_ingot', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicsamurai:quartz_ingot', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicsamurai:jade', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicsamurai:aquamarine', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicsamurai:onyx', 2).when(c => c.randomChance(0.1)),

        LootEntry.of('epicpaladins:arclight_gem', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicpaladins:bloodstone_gem', 2).when(c => c.randomChance(0.1)),
        LootEntry.of('epicpaladins:cryorium_gem', 2).when(c => c.randomChance(0.1)),
    ]
    const rareOre = [
        LootEntry.of('minecraft:diamond', 1).when(c => c.randomChance(0.05)),
        LootEntry.of('epicsamurai:ruby', 1).when(c => c.randomChance(0.05)),
        LootEntry.of('minecraft:emerald', 3).when(c => c.randomChance(0.2)),
    ]
    const netherOre = [
        LootEntry.of('minecraft:quartz', 3).when(c => c.randomChance(0.2)),
        LootEntry.of('epicpaladins:moonlight_gem', 2).when(c => c.randomChance(0.1)),

    ]


    const mobLoot = [
        LootEntry.of('minecraft:cobweb', 1).when(c => c.randomChance(0.6)),
        LootEntry.of('minecraft:stick', 2).when(c => c.randomChance(0.7)),
        LootEntry.of('minecraft:bone_meal', 5).when(c => c.randomChance(0.6)),
        LootEntry.of('minecraft:bone', 3).when(c => c.randomChance(0.6)),
        LootEntry.of('minecraft:string', 3).when(c => c.randomChance(0.6)),
        LootEntry.of('minecraft:gunpowder', 3).when(c => c.randomChance(0.6)),
        LootEntry.of('minecraft:rotten_flesh', 4).when(c => c.randomChance(0.7)),
    ]


    const horseItem = [
        LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.02)),
        LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.05)),
        LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.1)),
        LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.2)),
    ]
    const ironArmor = [
        LootEntry.of('epicsamurai:white_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:white_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:white_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:white_samurai_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:iron_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:iron_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:iron_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:iron_samurai_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicpaladins:knight_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicpaladins:knight_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicpaladins:knight_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicpaladins:knight_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:steel_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:steel_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:steel_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:steel_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gray_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gray_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gray_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gray_samurai_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:green_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:green_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:green_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:green_samurai_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:blue_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:blue_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:blue_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:blue_samurai_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:red_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:red_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:red_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:red_samurai_helmet').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gold_samurai_boots').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gold_samurai_leggings').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gold_samurai_chestplate').when(c => c.randomChance(0.06)),
        LootEntry.of('epicsamurai:gold_samurai_helmet').when(c => c.randomChance(0.06)),
    ]
    const ironWeapon = [
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
    ]
    const goldWeapon = [
        LootEntry.of('simplyswords:gold_longsword').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_twinblade').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_rapier').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_katana').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_sai').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_spear').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_glaive').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_warglaive').when(c => c.randomChance(0.1)),
        LootEntry.of('minecraft:golden_axe').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_scythe').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_halberd').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_claymore').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_chakram').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_greataxe').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_greathammer').when(c => c.randomChance(0.1)),
        LootEntry.of('simplyswords:gold_cutlass').when(c => c.randomChance(0.1)),
        LootEntry.of('minecraft:golden_sword').when(c => c.randomChance(0.1))
    ]
    const diamondWeapon = [
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
    ]
    const netheriteWeapon = [
        LootEntry.of('minecraft:netherite_sword').when(c => c.randomChance(0.08)),
        LootEntry.of('minecraft:netherite_axe').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_longsword').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_twinblade').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_rapier').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_katana').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_sai').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_spear').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_glaive').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_warglaive').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_cutlass').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_claymore').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_greathammer').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_greataxe').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_chakram').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_scythe').when(c => c.randomChance(0.08)),
        LootEntry.of('simplyswords:netherite_halberd').when(c => c.randomChance(0.08))
    ]
    const runicWeapon = [
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
    ]
});