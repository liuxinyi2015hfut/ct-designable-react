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
exports.AuxToolWidget = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var Insertion_1 = require("./Insertion");
var Selection_1 = require("./Selection");
var FreeSelection_1 = require("./FreeSelection");
var Cover_1 = require("./Cover");
var DashedBox_1 = require("./DashedBox");
require("./styles.less");
var AuxToolWidget = function () {
    var engine = hooks_1.useDesigner();
    var viewport = hooks_1.useViewport();
    var prefix = hooks_1.usePrefix('auxtool');
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        return engine.subscribeWith('viewport:scroll', function () {
            if (viewport.isIframe && ref.current) {
                ref.current.style.transform = "perspective(1px) translate3d(" + -viewport.scrollX + "px," + -viewport.scrollY + "px,0)";
            }
        });
    }, [engine, viewport]);
    if (!viewport)
        return null;
    return (react_1.default.createElement("div", { ref: ref, className: prefix },
        react_1.default.createElement(Insertion_1.Insertion, null),
        react_1.default.createElement(DashedBox_1.DashedBox, null),
        react_1.default.createElement(Selection_1.Selection, null),
        react_1.default.createElement(Cover_1.Cover, null),
        react_1.default.createElement(FreeSelection_1.FreeSelection, null)));
};
exports.AuxToolWidget = AuxToolWidget;
exports.AuxToolWidget.displayName = 'AuxToolWidget';
