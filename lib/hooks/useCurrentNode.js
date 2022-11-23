"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrentNode = void 0;
var useSelected_1 = require("./useSelected");
var useTree_1 = require("./useTree");
var useCurrentNode = function (workspaceId) {
    var _a;
    var selected = useSelected_1.useSelected(workspaceId);
    var tree = useTree_1.useTree(workspaceId);
    return (_a = tree === null || tree === void 0 ? void 0 : tree.findById) === null || _a === void 0 ? void 0 : _a.call(tree, selected[0]);
};
exports.useCurrentNode = useCurrentNode;
