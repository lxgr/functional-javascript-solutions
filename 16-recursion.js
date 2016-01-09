function getDependencies(tree) {
   var list = [];
   if (tree && tree.dependencies) getDepsInt(tree.dependencies, list);
   return list.sort();
}

function getDepsInt(root, list) {
    Object.keys(root).forEach(function(key) {
        var val = root[key]
        var versname = key + "@" + val.version;
        if(list.indexOf(versname) < 0) list.push(versname);
        if(val.dependencies) getDepsInt(val.dependencies, list);
    })
}

module.exports = getDependencies
