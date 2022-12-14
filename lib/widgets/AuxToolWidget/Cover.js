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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var reactive_react_1 = require("@formily/reactive-react");
var core_1 = require("@designable/core");
var classnames_1 = __importDefault(require("classnames"));
var CoverRect = function (props) {
    var prefix = hooks_1.usePrefix('aux-cover-rect');
    var rect = hooks_1.useValidNodeOffsetRect(props.node);
    var createCoverStyle = function () {
        var baseStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
        };
        if (rect) {
            baseStyle.transform = "perspective(1px) translate3d(" + rect.x + "px," + rect.y + "px,0)";
            baseStyle.height = rect.height;
            baseStyle.width = rect.width;
        }
        return baseStyle;
    };
    return (react_1.default.createElement("div", { className: classnames_1.default(prefix, {
            dragging: props.dragging,
            dropping: props.dropping,
        }), style: createCoverStyle() }));
};
exports.Cover = reactive_react_1.observer(function () {
    var viewportDragon = hooks_1.useDragon();
    var viewport = hooks_1.useViewport();
    var cursor = hooks_1.useCursor();
    var renderDropCover = function () {
        var _a;
        if (!viewportDragon.closestNode ||
            !((_a = viewportDragon.closestNode) === null || _a === void 0 ? void 0 : _a.allowAppend(viewportDragon.dragNodes)) ||
            viewportDragon.closestDirection !== core_1.ClosestPosition.Inner)
            return null;
        return react_1.default.createElement(CoverRect, { node: viewportDragon.closestNode, dropping: true });
    };
    if (cursor.status !== core_1.CursorStatus.Dragging)
        return null;
    return (react_1.default.createElement(react_1.Fragment, null,
        viewportDragon.dragNodes.map(function (node) {
            if (!node)
                return;
            if (!viewport.findElementById(node.id))
                return;
            return react_1.default.createElement(CoverRect, { key: node.id, node: node, dragging: true });
        }),
        renderDropCover()));
});
exports.Cover.displayName = 'Cover';
