ServerEvents.recipes(e => {
    //bugged recipes
    let recipeID = [
        'x1',
        'x2',
        'x4'
    ];
    recipeID.forEach(id => {
        e.remove({id: `functionalstorage:oak_drawer_alternate_${id}`}) 
    });
});