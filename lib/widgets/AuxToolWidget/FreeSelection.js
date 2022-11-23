"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeSelection = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../hooks");
var reactive_react_1 = require("@formily/reactive-react");
var core_1 = require("@designable/core");
var shared_1 = require("@designable/shared");
var classnames_1 = __importDefault(require("classnames"));
exports.FreeSelection = reactive_react_1.observer(function () {
    var cursor = hooks_1.useCursor();
    var viewport = hooks_1.useViewport();
    var prefix = hooks_1.usePrefix('aux-free-selection');
    var createSelectionStyle = function () {
        var startDragPoint = viewport.getOffsetPoint({
            x: cursor.dragStartPosition.topClientX,
            y: cursor.dragStartPosition.topClientY,
        });
        var currentPoint = viewport.getOffsetPoint({
            x: cursor.position.topClientX,
            y: cursor.position.topClientY,
        });
        var rect = shared_1.calcRectByStartEndPoint(startDragPoint, currentPoint, viewport.scrollX - cursor.dragStartScrollOffset.scrollX, viewport.scrollY - cursor.dragStartScrollOffset.scrollY);
        var baseStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.2,
            borderWidth: 1,
            borderStyle: 'solid',
            transform: "perspective(1px) translate3d(" + rect.x + "px," + rect.y + "px,0)",
            height: rect.height,
            width: rect.width,
            pointerEvents: 'none',
            boxSizing: 'border-box',
            zIndex: 1,
        };
        return baseStyle;
    };
    if (cursor.status !== core_1.CursorStatus.Dragging ||
        cursor.type !== core_1.CursorType.Selection)
        return null;
    return react_1.default.createElement("div", { className: classnames_1.default(prefix), style: createSelectionStyle() });
});
