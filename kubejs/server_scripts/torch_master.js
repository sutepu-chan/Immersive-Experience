ServerEvents.recipes(e => {
    e.remove({id: 'torchmaster:megatorch'});
    e.shaped('torchmaster:megatorch', ['TTT', 'DRD', 'NON'], {
        T: 'aether:ambrosium_torch',
        D: 'mahoutsukai:powdered_diamond',
        N: 'advancednetherite:netherite_gold_ingot',
        R: 'simplyswords:runic_tablet',
        O: 'irons_spellbooks:protection_upgrade_orb'
    }).id('kubejs:torchmaster/megatorch');
});