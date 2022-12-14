"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
var react_1 = __importDefault(require("react"));
var IconWidget_1 = require("../IconWidget");
var hooks_1 = require("../../hooks");
var antd_1 = require("antd");
var Delete = function (_a) {
    var node = _a.node, style = _a.style;
    var operation = hooks_1.useOperation();
    var prefix = hooks_1.usePrefix('aux-copy');
    if (node === node.root)
        return null;
    return (react_1.default.createElement(antd_1.Button, { className: prefix, style: style, type: "primary", onClick: function () {
            operation.removeNodes([node]);
        } },
        react_1.default.createElement(IconWidget_1.IconWidget, { infer: "Remove" })));
};
exports.Delete = Delete;
exports.Delete.displayName = 'Delete';
