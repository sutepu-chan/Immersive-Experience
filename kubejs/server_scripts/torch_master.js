ServerEvents.recipes(e => {
    e.remove({ id: 'torchmaster:megatorch' });
    e.shaped('torchmaster:megatorch', ['TTT', 'DRD', 'NON'], {
        T: 'aether:ambrosium_torch',
        D: 'mahoutsukai:powdered_diamond',
        N: 'advancednetherite:netherite_gold_ingot',
        R: 'simplyswords:runic_tablet',
        O: 'irons_spellbooks:protection_upgrade_orb'
    }).id('kubejs:torchmaster/megatorch');

    e.remove({ id: 'torchmaster:frozen_pearl' });
    e.shaped('torchmaster:frozen_pearl', [' I ', 'IEI', ' I '], {
        E: '#kubejs:endrem',
        I: 'frosted_friends:packed_ice_cubes'
    }).id('kubejs:torchmaster/frozen_pearl');

    e.remove({ id: 'torchmaster:feral_flare_lantern' });
    e.shaped('torchmaster:feral_flare_lantern', ['GDG', 'ILI', 'GGG'], {
        G: '#forge:glass',
        I: 'minecraft:glow_ink_sac',
        L: 'minecraft:jack_o_lantern',
        D: '#forge:dusts/glowstone'
    }).id('kubejs:torchmaster/feral_flare_lantern');
});