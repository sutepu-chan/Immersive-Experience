JEIEvents.information(e => {
    //text formatting https://minecraft.fandom.com/wiki/Formatting_codes#Formatting_codes

    //#region archery plus
    const arrowheads = [
        'stone',
        'iron',
        'gold',
        'diamond',
        'netherite'
    ];
    arrowheads.forEach(material => {
        if (material != 'gold') {
            e.addItem(`nyfsarcheryplus:${material}_arrowhead`, [
                `Crafted by a piece of §l${material}§r and a piece of §lflint§r in §lsmithing table§r`
            ])
        } else {
            e.addItem(`nyfsarcheryplus:${material}en_arrowhead`, [
                `Crafted by a piece of §l${material}§r and a piece of §lflint§r in §lsmithing table§r`
            ])
        }
    });
    //#endregion

    //#region car
    e.addItem('car:canola_cake', [
        'A side product obtained from putting Canola into Oil Mill.'
    ]);
    e.addItem('car:canola_oil_bucket', [
        'Obtained by putting Canol into Oil Mill.'
    ]);
    e.addItem('car:methanol_bucket', [
        'Obtained by putting wood logs into Blast Furnace.'
    ]);
    e.addItem('car:canola_methanol_mix_bucket', [
        'Obtained by piping Oil and Methanol into Backmix Reactor.'
    ]);
    e.addItem('car:glycerin_bucket', [
        'Obtained by piping Canola Methanol Mix into Split Tank.'
    ]);
    e.addItem('car:bio_diesel_bucket', [
        'Obtained by piping Canola Methanol Mix into Split Tank.'
    ]);
    e.addItem('car:canola_seeds', [
        'Obtained by breaking the grass.'
    ]);
    //#endregion

    e.addItem('touhou_little_maid:film', [
        'Dropped upon death of Touhou Maid'
    ]);

})