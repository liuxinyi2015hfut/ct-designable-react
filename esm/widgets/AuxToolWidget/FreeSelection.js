import React from 'react';
import { useCursor, usePrefix, useViewport } from '../../hooks';
import { observer } from '@formily/reactive-react';
import { CursorStatus, CursorType } from '@designable/core';
import { calcRectByStartEndPoint } from '@designable/shared';
import cls from 'classnames';
export var FreeSelection = observer(function () {
    var cursor = useCursor();
    var viewport = useViewport();
    var prefix = usePrefix('aux-free-selection');
    var createSelectionStyle = function () {
        var startDragPoint = viewport.getOffsetPoint({
            x: cursor.dragStartPosition.topClientX,
            y: cursor.dragStartPosition.topClientY,
        });
        var currentPoint = viewport.getOffsetPoint({
            x: cursor.position.topClientX,
            y: cursor.position.topClientY,
        });
        var rect = calcRectByStartEndPoint(startDragPoint, currentPoint, viewport.scrollX - cursor.dragStartScrollOffset.scrollX, viewport.scrollY - cursor.dragStartScrollOffset.scrollY);
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
    if (cursor.status !== CursorStatus.Dragging ||
        cursor.type !== CursorType.Selection)
        return null;
    return React.createElement("div", { className: cls(prefix), style: createSelectionStyle() });
});
