"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GhostWidget = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var core_1 = require("@designable/core");
var reactive_1 = require("@formily/reactive");
var reactive_react_1 = require("@formily/reactive-react");
var NodeTitleWidget_1 = require("../NodeTitleWidget");
require("./styles.less");
exports.GhostWidget = reactive_react_1.observer(function () {
    var designer = hooks_1.useDesigner();
    var cursor = hooks_1.useCursor();
    var ref = react_1.useRef();
    var prefix = hooks_1.usePrefix('ghost');
    var draggingNodes = designer.findDraggingNodes();
    var firstNode = draggingNodes[0];
    react_1.useEffect(function () {
        return reactive_1.autorun(function () {
            var _a, _b;
            var transform = "perspective(1px) translate3d(" + (((_a = cursor.position) === null || _a === void 0 ? void 0 : _a.topClientX) - 18) + "px," + (((_b = cursor.position) === null || _b === void 0 ? void 0 : _b.topClientY) - 12) + "px,0) scale(0.8)";
            if (!ref.current)
                return;
            ref.current.style.transform = transform;
        });
    }, [designer, cursor]);
    var renderNodes = function () {
        return (react_1.default.createElement("span", { style: {
                whiteSpace: 'nowrap',
            } },
            react_1.default.createElement(NodeTitleWidget_1.NodeTitleWidget, { node: firstNode }),
            draggingNodes.length > 1 ? '...' : ''));
    };
    if (!firstNode)
        return null;
    return cursor.status === core_1.CursorStatus.Dragging ? (react_1.default.createElement("div", { ref: ref, className: prefix }, renderNodes())) : null;
});
exports.GhostWidget.displayName = 'GhostWidget';
