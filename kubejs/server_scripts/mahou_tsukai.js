ServerEvents.recipes(e => {
    e.remove({ input: 'mahoutsukai:hammer' });

    e.remove({ id: 'mahoutsukai:pestle' });
    e.shaped('mahoutsukai:pestle', ['  S', 'NS ', 'NN '], {
        N: 'advancednetherite:netherite_diamond_ingot',
        S: 'minecraft:stick'
    }).id('kubejs:mahoutsukai/pestle');
    e.remove({ id: 'mahoutsukai:mortar' });

    e.shaped('mahoutsukai:mortar', ['N N', ' C '], {
        N: 'advancednetherite:netherite_diamond_ingot',
        C: 'cataclysm:void_core'
    }).id('kubejs:mahoutsukai/mortar');

    e.replaceInput({ id: 'mahoutsukai:spell_cloth' }, 'minecraft:white_wool', 'irons_spellbooks:magic_cloth');
})