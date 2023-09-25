ServerEvents.recipes(e => {
    e.remove({id: 'enchantinginfuser:enchanting_infuser'});
    e.shaped('enchantinginfuser:enchanting_infuser', [' B ','NON', 'OEO'], {
        B: 'minecraft:enchanted_book',
        N: 'advancednetherite:netherite_diamond_ingot',
        O: 'minecraft:crying_obsidian',
        E: 'minecraft:enchanting_table'
    }).id('kubejs:enchantinginfuser/enchanting_infuser');

    e.remove({id: 'enchantinginfuser:advanced_enchanting_infuser'});
    e.shaped('enchantinginfuser:advanced_enchanting_infuser', [' B ','NON', 'OEO'], {
        B: '#simplyswords:uniques',
        N: 'advancednetherite:netherite_diamond_ingot',
        O: 'minecraft:crying_obsidian',
        E: 'enchantinginfuser:enchanting_infuser'
    }).id('kubejs:enchantinginfuser/advanced_enchanting_infuser');
})