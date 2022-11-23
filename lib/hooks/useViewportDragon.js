"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragon = void 0;
var useOperation_1 = require("./useOperation");
var useDragon = function (workspaceId) {
    var operation = useOperation_1.useOperation(workspaceId);
    return operation === null || operation === void 0 ? void 0 : operation.viewportDragon;
};
exports.useDragon = useDragon;
