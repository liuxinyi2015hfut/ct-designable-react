"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceContext = exports.TreeNodeContext = exports.DesignerEngineContext = exports.DesignerLayoutContext = exports.DesignerComponentsContext = void 0;
var react_1 = require("react");
exports.DesignerComponentsContext = react_1.createContext({});
exports.DesignerLayoutContext = react_1.createContext(null);
exports.DesignerEngineContext = react_1.createContext(null);
exports.TreeNodeContext = react_1.createContext(null);
exports.WorkspaceContext = react_1.createContext(null);
