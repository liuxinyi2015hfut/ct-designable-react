var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import cls from 'classnames';
import { useDesigner, usePrefix } from '../../hooks';
export var ResizeHandler = function (props) {
    var designer = useDesigner();
    var prefix = usePrefix('aux-node-resize-handler');
    var createHandler = function (value) {
        var _a;
        return _a = {},
            _a[designer.props.nodeResizeHandlerAttrName] = value,
            _a.className = cls(prefix, value),
            _a;
    };
    var allowResize = props.node.allowResize();
    if (!allowResize)
        return null;
    var allowX = allowResize.includes('x');
    var allowY = allowResize.includes('y');
    return (React.createElement(React.Fragment, null,
        allowX && React.createElement("div", __assign({}, createHandler('x-start'))),
        allowX && React.createElement("div", __assign({}, createHandler('x-end'))),
        allowY && React.createElement("div", __assign({}, createHandler('y-start'))),
        allowY && React.createElement("div", __assign({}, createHandler('y-end')))));
};
