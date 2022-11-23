"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelection = void 0;
var useOperation_1 = require("./useOperation");
var useSelection = function (workspaceId) {
    var operation = useOperation_1.useOperation(workspaceId);
    return operation === null || operation === void 0 ? void 0 : operation.selection;
};
exports.useSelection = useSelection;
