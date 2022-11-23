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
exports.Insertion = reactive_react_1.observer(function () {
    var viewportDragon = hooks_1.useDragon();
    var prefix = hooks_1.usePrefix('aux-insertion');
    var createInsertionStyle = function () {
        var closestDirection = viewportDragon.closestDirection;
        var closestRect = viewportDragon.closestOffsetRect;
        var isInlineLayout = viewportDragon.getClosestLayout() === 'horizontal';
        var baseStyle = {
            position: 'absolute',
            transform: 'perspective(1px) translate3d(0,0,0)',
            top: 0,
            left: 0,
        };
        if (!closestRect)
            return baseStyle;
        if (closestDirection === core_1.ClosestPosition.Before ||
            closestDirection === core_1.ClosestPosition.ForbidBefore) {
            baseStyle.width = 2;
            baseStyle.height = closestRect.height;
            baseStyle.transform = "perspective(1px) translate3d(" + closestRect.x + "px," + closestRect.y + "px,0)";
        }
        else if (closestDirection === core_1.ClosestPosition.After ||
            closestDirection === core_1.ClosestPosition.ForbidAfter) {
            baseStyle.width = 2;
            baseStyle.height = closestRect.height;
            baseStyle.transform = "perspective(1px) translate3d(" + (closestRect.x + closestRect.width - 2) + "px," + closestRect.y + "px,0)";
        }
        else if (closestDirection === core_1.ClosestPosition.InnerAfter ||
            closestDirection === core_1.ClosestPosition.Under ||
            closestDirection === core_1.ClosestPosition.ForbidInnerAfter ||
            closestDirection === core_1.ClosestPosition.ForbidUnder) {
            if (isInlineLayout) {
                baseStyle.width = 2;
                baseStyle.height = closestRect.height;
                baseStyle.transform = "perspective(1px) translate3d(" + (closestRect.x + closestRect.width - 2) + "px," + closestRect.y + "px,0)";
            }
            else {
                baseStyle.width = closestRect.width;
                baseStyle.height = 2;
                baseStyle.transform = "perspective(1px) translate3d(" + closestRect.x + "px," + (closestRect.y + closestRect.height - 2) + "px,0)";
            }
        }
        else if (closestDirection === core_1.ClosestPosition.InnerBefore ||
            closestDirection === core_1.ClosestPosition.Upper ||
            closestDirection === core_1.ClosestPosition.ForbidInnerBefore ||
            closestDirection === core_1.ClosestPosition.ForbidUpper) {
            if (isInlineLayout) {
                baseStyle.width = 2;
                baseStyle.height = closestRect.height;
                baseStyle.transform = "perspective(1px) translate3d(" + closestRect.x + "px," + closestRect.y + "px,0)";
            }
            else {
                baseStyle.width = closestRect.width;
                baseStyle.height = 2;
                baseStyle.transform = "perspective(1px) translate3d(" + closestRect.x + "px," + closestRect.y + "px,0)";
            }
        }
        if (closestDirection.includes('FORBID')) {
            baseStyle.backgroundColor = 'red';
        }
        return baseStyle;
    };
    return react_1.default.createElement("div", { className: prefix, style: createInsertionStyle() });
});
exports.Insertion.displayName = 'Insertion';
