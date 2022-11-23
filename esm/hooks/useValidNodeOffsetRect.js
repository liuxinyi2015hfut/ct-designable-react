var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useState, useEffect, useRef, useCallback } from 'react';
import { CursorStatus, ScreenStatus } from '@designable/core';
import { requestIdle, cancelIdle } from '@designable/shared';
import { ResizeObserver } from '@juggle/resize-observer';
import { useViewport } from './useViewport';
import { useDesigner } from './useDesigner';
var isEqualRect = function (rect1, rect2) {
    return ((rect1 === null || rect1 === void 0 ? void 0 : rect1.x) === (rect2 === null || rect2 === void 0 ? void 0 : rect2.x) &&
        (rect1 === null || rect1 === void 0 ? void 0 : rect1.y) === (rect2 === null || rect2 === void 0 ? void 0 : rect2.y) &&
        (rect1 === null || rect1 === void 0 ? void 0 : rect1.width) === (rect2 === null || rect2 === void 0 ? void 0 : rect2.width) &&
        (rect1 === null || rect1 === void 0 ? void 0 : rect1.height) === (rect2 === null || rect2 === void 0 ? void 0 : rect2.height));
};
export var useValidNodeOffsetRect = function (node) {
    var engine = useDesigner();
    var viewport = useViewport();
    var _a = __read(useState(null), 2), forceUpdate = _a[1];
    var rectRef = useRef(viewport.getValidNodeOffsetRect(node));
    var idleTaskRef = useRef(null);
    var unmountRef = useRef(false);
    var observerRef = useRef(null);
    var element = viewport.findElementById(node === null || node === void 0 ? void 0 : node.id);
    var compute = useCallback(function () {
        if (unmountRef.current)
            return;
        if (engine.cursor.status !== CursorStatus.Normal &&
            engine.screen.status === ScreenStatus.Normal)
            return;
        var nextRect = viewport.getValidNodeOffsetRect(node);
        if (!isEqualRect(rectRef.current, nextRect) && nextRect) {
            rectRef.current = nextRect;
            forceUpdate(nextRect);
        }
    }, [viewport, node]);
    useEffect(function () {
        if (!element || !element.isConnected)
            return;
        if (observerRef.current) {
            observerRef.current.disconnect();
        }
        observerRef.current = new ResizeObserver(function () {
            compute();
        });
        observerRef.current.observe(element);
        return function () {
            observerRef.current.disconnect();
        };
    }, [element, viewport]);
    useEffect(function () {
        unmountRef.current = false;
        var requestIdleTask = function () {
            cancelIdle(idleTaskRef.current);
            idleTaskRef.current = requestIdle(function () {
                compute();
                requestIdleTask();
            });
        };
        requestIdleTask();
        return function () {
            unmountRef.current = true;
            cancelIdle(idleTaskRef.current);
        };
    }, [node]);
    return rectRef.current;
};
