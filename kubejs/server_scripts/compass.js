ServerEvents.recipes(e => {
    e.remove({ id: 'explorerscompass:explorers_compass' });
    e.shaped('explorerscompass:explorerscompass', ['WEW', 'ECE', 'WEW'], {
        C: 'minecraft:compass',
        E: 'minecraft:end_stone',
        W: 'minecraft:cobweb'
    }).id('kubejs:explorerscompass/explorers_compass');
});