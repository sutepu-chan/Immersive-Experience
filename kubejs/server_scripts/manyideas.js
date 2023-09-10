ServerEvents.recipes(e => {
    let recipeID = [
        'manyideas_core:block/table_saws/table_saw_iron___crafting',
        'manyideas_core:block/table_saws/table_saw_diamond___crafting',
        'manyideas_core:block/table_saws/table_saw_diamond_from_stone___crafting'
    ]
    recipeID.forEach(r => {
        e.remove({id: r});
    });
});