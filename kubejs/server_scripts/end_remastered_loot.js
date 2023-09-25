LootJS.modifiers(e => {

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:nether_eye');
    e.addEntityLootModifier('minecraft:blaze')
        .matchOffHand('epicpaladins:moonlight_gem')
        .randomChance(0.05)
        .addLoot('endrem:nether_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:corrupted_eye');
    e.addEntityLootModifier('minecraft:enderman')
        .anyDimension("minecraft:the_end")
        .randomChance(0.1)
        .addLoot('endrem:corrupted_eye');

    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('endrem:undead_soul');
    e.addEntityLootModifier('mutantmonsters:mutant_zombie').addLoot('endrem:undead_soul');

    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('endrem:magical_eye');
    e.addEntityLootModifier('minecraft:illusioner').addLoot('endrem:magical_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:cold_eye');
    e.addEntityLootModifier('aquamirae:maw')
        .randomChance(0.1)
        .addLoot('endrem:cold_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:rogue_eye');

    e.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('endrem:witch_pupil');
    e.addEntityLootModifier('betterwitchhuts:chests/hut_0')
        .addLoot('endrem:witch_pupil');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:cursed_eye');
    e.addEntityLootModifier('fromtheshadows:cleric')
        .randomChance(0.1)
        .addLoot('endrem:cursed_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:black_eye');
    e.addEntityLootModifier('minecraft:giant')
        .addLoot('endrem:black_eye');

    e.addLootTypeModifier(LootType.CHEST)
        .removeLoot('endrem:old_eye');

});

ServerEvents.recipes(e => {
    e.remove({ id: 'endrem:exotic_eye' });
})