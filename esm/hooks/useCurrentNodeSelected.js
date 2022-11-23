import { useCurrentNode } from './useCurrentNode';
import { useSelected } from './useSelected';
export var useCurrentNodeSelected = function () {
    var node = useCurrentNode();
    var selected = useSelected();
    return selected.length === 1 && node.id === selected[0];
};
