"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insertion = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../hooks");
var core_1 = require("@designable/core");
var reactive_react_1 = require("@formily/reactive-react");
exports.Insertion = reactive_react_1.observer(function (_a) {
    var workspaceId = _a.workspaceId;
    var outlineDragon = hooks_1.useOutlineDragon(workspaceId);
    var prefix = hooks_1.usePrefix('outline-tree-insertion');
    var createInsertionStyle = function () {
        var closestDirection = outlineDragon.closestDirection;
        var closestRect = outlineDragon.closestOffsetRect;
        var baseStyle = {
            position: 'absolute',
            transform: 'perspective(1px) translate3d(0,0,0)',
            top: 0,
            left: 0,
        };
        if (!closestRect)
            return baseStyle;
        if (closestDirection === core_1.ClosestPosition.After ||
            closestDirection === core_1.ClosestPosition.InnerAfter ||
            closestDirection === core_1.ClosestPosition.Under ||
            closestDirection === core_1.ClosestPosition.ForbidAfter ||
            closestDirection === core_1.ClosestPosition.ForbidInnerAfter ||
            closestDirection === core_1.ClosestPosition.ForbidUnder) {
            baseStyle.width = closestRect.width;
            baseStyle.height = 2;
            baseStyle.transform = "perspective(1px) translate3d(" + closestRect.x + "px," + (closestRect.y + closestRect.height - 2) + "px,0)";
        }
        else if (closestDirection === core_1.ClosestPosition.Before ||
            closestDirection === core_1.ClosestPosition.InnerBefore ||
            closestDirection === core_1.ClosestPosition.Upper ||
            closestDirection === core_1.ClosestPosition.ForbidBefore ||
            closestDirection === core_1.ClosestPosition.ForbidInnerBefore ||
            closestDirection === core_1.ClosestPosition.ForbidUpper) {
            baseStyle.width = closestRect.width;
            baseStyle.height = 2;
            baseStyle.transform = "perspective(1px) translate3d(" + closestRect.x + "px," + closestRect.y + "px,0)";
        }
        if (closestDirection.includes('FORBID')) {
            baseStyle.backgroundColor = 'red';
        }
        else {
            baseStyle.backgroundColor = '';
        }
        return baseStyle;
    };
    if (!(outlineDragon === null || outlineDragon === void 0 ? void 0 : outlineDragon.closestNode))
        return null;
    return react_1.default.createElement("div", { className: prefix, style: createInsertionStyle() });
});
exports.Insertion.displayName = 'Insertion';
