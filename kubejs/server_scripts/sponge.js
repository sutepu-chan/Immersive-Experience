ServerEvents.recipes(e => {
    e.remove({ id: 'permanentsponges:aqueous_sponge' });
    e.shaped('permanentsponges:aqueous_sponge', [' D ', 'DSD', ' D '], {
        D: 'minecraft:diamond',
        S: 'minecraft:sponge'
    }).id('kubejs:permanentsponges/aqueous_sponge');

    e.remove({ id: 'permanentsponges:magmatic_sponge' });
    e.shaped('permanentsponges:magmatic_sponge', [' D ', 'DSD', ' D '], {
        D: 'minecraft:netherite_ingot',
        S: 'minecraft:sponge'
    }).id('kubejs:permanentsponges/magmatic_sponge');
});