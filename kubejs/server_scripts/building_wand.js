ServerEvents.recipes(e => {
    e.remove({ id: 'wands:stone_wand' });
    e.shaped('wands:stone_wand', ['  M', ' S ', 'S  '], {
        S: '#forge:rods/wooden',
        M: '#minecraft:stone_crafting_materials'
    }).id('kubejs:wands/stone_wand');

    e.remove({ id: 'wands:iron_wand' });
    e.shaped('wands:iron_wand', ['  M', ' W ', 'S  '], {
        S: '#forge:rods/wooden',
        W: 'wands:stone_wand',
        M: 'minecraft:iron_ingot'
    }).id('kubejs:wands/iron_wand');

    e.remove({ id: 'wands:diamond_wand' });
    e.shaped('wands:diamond_wand', ['  M', ' W ', 'S  '], {
        S: '#forge:rods/wooden',
        W: 'wands:iron_ingot',
        M: 'minecraft:diamond'
    }).id('kubejs:wands/diamond_wand');

    e.smithing(
        'wands:creative_wand',
        'majruszsdifficulty:enderium_upgrade_smithing_template',
        'wands:netherite_wand',
        'minecraft:nether_star'
    );
});