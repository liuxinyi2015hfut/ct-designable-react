import React from 'react';
import { IconWidget } from '../IconWidget';
import { useOperation, usePrefix } from '../../hooks';
import { Button } from 'antd';
export var Delete = function (_a) {
    var node = _a.node, style = _a.style;
    var operation = useOperation();
    var prefix = usePrefix('aux-copy');
    if (node === node.root)
        return null;
    return (React.createElement(Button, { className: prefix, style: style, type: "primary", onClick: function () {
            operation.removeNodes([node]);
        } },
        React.createElement(IconWidget, { infer: "Remove" })));
};
Delete.displayName = 'Delete';
