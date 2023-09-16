REIEvents.information(e => {
    //text formatting https://minecraft.fandom.com/wiki/Formatting_codes#Formatting_codes

    String.prototype.format = function () {
        const sentence = this.toString();

        const words = sentence.split('_');

        const formattedWords = words.map(word => {
            var firstLetter = word.charAt(0).toUpperCase();
            var restOfWord = word.slice(1).toLowerCase();
            return firstLetter + restOfWord;
        });

        const formattedSentence = formattedWords.join(' ');

        return formattedSentence;
    };
    /*
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
            e.addItem(`nyfsarcheryplus:${material}_arrowhead`,
                `${material}_arrowhead`.format(),
                [
                    `Crafted by a piece of §l${material}§r and a piece of §lflint§r in §lsmithing table§r`
                ])
        } else {
            e.addItem(`nyfsarcheryplus:${material}en_arrowhead`,
                `${material}en_arrowhead`.format(),
                [
                    `Crafted by a piece of §l${material}§r and a piece of §lflint§r in §lsmithing table§r`
                ])
        }
    });
    //#endregion
    */
    //#region car
    e.addItem('car:canola_cake', 'canola_cake'.format(), [
        'A side product obtained from putting Canola into Oil Mill.'
    ]);
    e.addItem('car:canola_oil_bucket', 'canola_oil_bucket'.format(), [
        'Obtained by putting Canol into Oil Mill.'
    ]);
    e.addItem('car:methanol_bucket', 'methanol_bucket'.format(), [
        'Obtained by putting wood logs into Blast Furnace.'
    ]);
    e.addItem('car:canola_methanol_mix_bucket', 'canola_methanol_mix_bucket'.format(), [
        'Obtained by piping Oil and Methanol into Backmix Reactor.'
    ]);
    e.addItem('car:glycerin_bucket', 'glycerin_bucket'.format(), [
        'Obtained by piping Canola Methanol Mix into Split Tank.'
    ]);
    e.addItem('car:bio_diesel_bucket', 'bio_diesel_bucket'.format(), [
        'Obtained by piping Canola Methanol Mix into Split Tank.'
    ]);
    e.addItem('car:canola_seeds', 'canola_seeds'.format(), [
        'Obtained by breaking the grass.'
    ]);
    //#endregion

    e.addItem('touhou_little_maid:film', 'film'.format(), [
        'Dropped upon death of Touhou Maid'
    ]);
    e.addItem('deeperdarker:heart_of_the_deep', 'Heart of the Deep', [
        'Obtain from defeating §sthe Warden'
    ]);
    e.addItem('deeperdarker:warden_carapace', 'Heart of the Deep', [
        'Obtain from defeating §sthe Warden'
    ]);
    e.addItem('endrem:undead_soul', 'undead_soul'.format(), [
        'Obtain from killing a skeleton horse'
    ]);
    e.addItem('obscure_api:astral_dust', 'astral_dust'.format(), [
        'Obtain from §bFrozen Chests'
    ]);
    e.addItem('aquamirae:rune_of_the_storm', 'rune_of_the_storm'.format(), [
        'Obtain from §bFrozen Chests'
    ]);
    e.addItem('aquamirae:dagger_of_greed', 'dagger_of_greed'.format(), [
        'Obtain from §bFrozen Chests'
    ]);
    e.addItem('aquamirae:coral_lance', 'coral_lance'.format(), [
        'Dropped from defeating §dthe Ghost of Captain Cornelia§r with a small chance'
    ]);
    e.addItem('aquamirae:sweet_lance', 'sweet_lance'.format(), [
        'Festical version of Coral Lance'
    ]);

})