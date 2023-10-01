ServerEvents.recipes(e => {
    e.shaped('structurize:caliper', [' I ', 'S S', 'I I'], {
        I: 'minecraft:iron_ingot',
        S: '#forge:rods/wooden'
    }).id(`kubejs:structurize/caliper`);
    e.remove({ id: 'structurize:sceptergold' });
    e.shaped('structurize:sceptergold', [' NG', ' SN', 'S  '], {
        S: '#forge:rods/wooden',
        N: '#forge:nuggets/gold',
        G: 'minecraft:gold_ingot'
    }).id(`kubejs:structurize/sceptergold`);
});