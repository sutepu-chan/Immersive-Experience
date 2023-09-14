ServerEvents.recipes(e => {
    let armors = [
        'aquamirae:three_bolt_helmet',
        'aquamirae:three_bolt_suit',
        'aquamirae:three_bolt_leggings',
        'aquamirae:three_bolt_boots',
    ]
    armors.forEach(armor => {
        e.remove({ output: armor });
    });
    e.shaped('aquamirae:three_bolt_suit', ['L L', 'OKO', 'III'], {
        L: 'minecraft:leather',
        O: 'aquamirae:oxygen_tank',
        K: 'aquamirae:frozen_key',
        I: 'minecraft:iron_block'
    }).id('kubejs:aquamirae/three_bolt_suit');
    e.shaped('aquamirae:three_bolt_leggings', ['IKI', 'L L', 'L L'], {
        L: 'minecraft:leather',
        K: 'aquamirae:frozen_key',
        I: 'minecraft:iron_block'
    }).id('kubejs:aquamirae/three_bolt_leggings');
    e.shaped('aquamirae:three_bolt_boots', ['L L', 'IKI'], {
        L: 'minecraft:leather',
        K: 'aquamirae:frozen_key',
        I: 'minecraft:iron_block'
    }).id('kubejs:aquamirae/three_bolt_boots');

})