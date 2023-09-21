REIEvents.hide('item', e => {
    e.hide(global.recipe_disable);
    e.hide('@ftbquests');
    e.hide('@itemfilters');
    e.hide('@structure_gel');
    e.hide('@libraryferret');
    let unifiedItems = [
        'epicpaladins:jade_ore',
        'epicpaladins:jade_block',
        'epicpaladins:jade_gem',
        'epicpaladins:steel_block',
        'epicpaladins:steel_ingot',
        'epicpaladins:steel_nugget',
        'friendsandfoes:illusioner_spawn_egg',
        'majruszsdifficulty:illusioner_spawn_egg'
    ]
    e.hide(unifiedItems);
})