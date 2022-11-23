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
import { usePrefix } from '../../hooks';
import cls from 'classnames';
export var ResizeHandleType;
(function (ResizeHandleType) {
    ResizeHandleType["Resize"] = "RESIZE";
    ResizeHandleType["ResizeWidth"] = "RESIZE_WIDTH";
    ResizeHandleType["ResizeHeight"] = "RESIZE_HEIGHT";
})(ResizeHandleType || (ResizeHandleType = {}));
export var ResizeHandle = function (props) {
    var _a;
    var prefix = usePrefix('resize-handle');
    return (React.createElement("div", __assign({}, props, { "data-designer-resize-handle": props.type, className: cls(prefix, (_a = {},
            _a[prefix + "-" + props.type] = !!props.type,
            _a)) }), props.children));
};
