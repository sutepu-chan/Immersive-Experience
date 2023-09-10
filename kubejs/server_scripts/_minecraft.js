ServerEvents.recipes(e => {
    e.shaped('16x minecraft:stick', ['L', 'L'], {
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/stick');
    e.shaped('4x minecraft:chest', ['LLL', 'L L', 'LLL'], {
        L: '#minecraft:logs'
    }).id('kubejs:minecraft/chest');

    
})