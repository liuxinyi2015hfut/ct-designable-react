"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreen = void 0;
var useDesigner_1 = require("./useDesigner");
var useScreen = function () {
    return useDesigner_1.useDesigner().screen;
};
exports.useScreen = useScreen;
