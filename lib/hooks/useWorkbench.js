"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWorkbench = void 0;
var useDesigner_1 = require("./useDesigner");
var useWorkbench = function () {
    var designer = useDesigner_1.useDesigner();
    return designer.workbench;
};
exports.useWorkbench = useWorkbench;
