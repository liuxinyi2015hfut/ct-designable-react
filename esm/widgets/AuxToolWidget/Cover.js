import React, { Fragment } from 'react';
import { useViewport, useDragon, useCursor, useValidNodeOffsetRect, usePrefix, } from '../../hooks';
import { observer } from '@formily/reactive-react';
import { CursorStatus, ClosestPosition } from '@designable/core';
import cls from 'classnames';
var CoverRect = function (props) {
    var prefix = usePrefix('aux-cover-rect');
    var rect = useValidNodeOffsetRect(props.node);
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
    return (React.createElement("div", { className: cls(prefix, {
            dragging: props.dragging,
            dropping: props.dropping,
        }), style: createCoverStyle() }));
};
export var Cover = observer(function () {
    var viewportDragon = useDragon();
    var viewport = useViewport();
    var cursor = useCursor();
    var renderDropCover = function () {
        var _a;
        if (!viewportDragon.closestNode ||
            !((_a = viewportDragon.closestNode) === null || _a === void 0 ? void 0 : _a.allowAppend(viewportDragon.dragNodes)) ||
            viewportDragon.closestDirection !== ClosestPosition.Inner)
            return null;
        return React.createElement(CoverRect, { node: viewportDragon.closestNode, dropping: true });
    };
    if (cursor.status !== CursorStatus.Dragging)
        return null;
    return (React.createElement(Fragment, null,
        viewportDragon.dragNodes.map(function (node) {
            if (!node)
                return;
            if (!viewport.findElementById(node.id))
                return;
            return React.createElement(CoverRect, { key: node.id, node: node, dragging: true });
        }),
        renderDropCover()));
});
Cover.displayName = 'Cover';
