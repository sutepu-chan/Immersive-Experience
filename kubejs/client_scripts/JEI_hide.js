JEIEvents.hideItems(e => {
    e.hide(global.recipe_disable);
    e.hide('@rftoolsbase');
    e.hide('@ftbquests');
    e.hide('@itemfilters');

    let unifiedItems = [
        'epicpaladins:jade_ore',
        'epicpaladins:jade_block',
        'epicpaladins:jade_gem',
        'epicpaladins:steel_block',
        'epicpaladins:steel_ingot',
        'epicpaladins:steel_nugget',
    ]
    e.hide(unifiedItems);
})