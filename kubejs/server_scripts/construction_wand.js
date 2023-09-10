ServerEvents.recipes(e => {
    e.remove({id: 'constructionwand:iron_wand'});
    e.shaped('constructionwand:iron_wand', ['  I', ' W ', 'S  '], {
        I: '#forge:ingots/iron',
        S: '#forge:rods/wooden',
        W: 'constructionwand:stone_wand'
    }).id('kubejs:constructionwand/iron_wand');

    e.remove({id: 'constructionwand:diamond_wand'});
    e.shaped('constructionwand:diamond_wand', ['  I', ' W ', 'S  '], {
        I: '#forge:gems/diamond',
        S: '#forge:rods/wooden',
        W: 'constructionwand:iron_wand'
    }).id('kubejs:constructionwand/diamond_wand');

    e.remove({id: 'constructionwand:infinity_wand'});
    e.shaped('constructionwand:infinity_wand', ['  I', ' W ', 'S  '], {
        I: '#forge:gems/diamond',
        S: '#forge:rods/wooden',
        W: 'constructionwand:diamond_wand'
    }).id('kubejs:constructionwand/infinity_wand');
});