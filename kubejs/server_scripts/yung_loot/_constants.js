LootJS.modifiers(e => {
    const runic_tablet = LootEntry.of('simplyswords:runic_tablet').when(c => c.randomChance(0.3));
    const scroll = LootEntry.of("irons_spellbooks:scroll").customFunction({function: "irons_spellbooks:randomize_spell"})
    
    
    const power_point = [Item.of('touhou_little_maid:power_point', 2).withChance(0.3)];
    const normalFood = [
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
    const ore = [
        Item.of('minecraft:coal', 3).withChance(0.3),
        Item.of('minecraft:charcoal', 3).withChance(0.3),
        Item.of('minecraft:redstone', 4).withChance(0.2),
        Item.of('minecraft:iron_ingot', 2).withChance(0.1),
        Item.of('minecraft:gold_ingot', 2).withChance(0.1),
        Item.of('minecraft:gold_nugget', 5).withChance(0.25),
        Item.of('minecraft:iron_nugget', 5).withChance(0.25),
        Item.of('minecraft:copper_ingot', 3).withChance(0.15),
        Item.of('minecraft:lapis_lazuli', 4).withChance(0.1),
        Item.of('minecraft:diamond', 1).withChance(0.02),

        Item.of('minecraft:quartz', 3).withChance(0.2),

        Item.of('epicsamurai:silver_ingot', 3).withChance(0.1),
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

        Item.of('create:zinc_ingot', 3).withChance(0.3),
    ]
    const mobLoot = [
        Item.of('minecraft:cobweb', 1).withChance(0.2),
        Item.of('minecraft:stick', 1).withChance(0.3),
        Item.of('minecraft:bone_meal', 3).withChance(0.2),
        Item.of('minecraft:string', 2).withChance(0.2),
        Item.of('minecraft:gunpowder', 2).withChance(0.2),
    ]
    const horseItem = [
        LootEntry.of('minecraft:saddle').when(c => c.randomChance(0.15)),
        LootEntry.of('minecraft:iron_horse_armor').when(c => c.randomChance(0.12)),
        LootEntry.of('minecraft:golden_horse_armor').when(c => c.randomChance(0.08)),
        LootEntry.of('minecraft:diamond_horse_armor').when(c => c.randomChance(0.03))
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
})