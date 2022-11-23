"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutlineDragon = void 0;
var useOperation_1 = require("./useOperation");
var useOutlineDragon = function (workspaceId) {
    var operation = useOperation_1.useOperation(workspaceId);
    return operation === null || operation === void 0 ? void 0 : operation.outlineDragon;
};
exports.useOutlineDragon = useOutlineDragon;
