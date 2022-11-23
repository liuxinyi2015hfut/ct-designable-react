import React, { useEffect, useRef } from 'react';
import { useViewport, useDesigner, usePrefix, } from '../../hooks';
import { Insertion } from './Insertion';
import { Selection } from './Selection';
import { FreeSelection } from './FreeSelection';
import { Cover } from './Cover';
import { DashedBox } from './DashedBox';
import './styles.less';
export var AuxToolWidget = function () {
    var engine = useDesigner();
    var viewport = useViewport();
    var prefix = usePrefix('auxtool');
    var ref = useRef();
    useEffect(function () {
        return engine.subscribeWith('viewport:scroll', function () {
            if (viewport.isIframe && ref.current) {
                ref.current.style.transform = "perspective(1px) translate3d(" + -viewport.scrollX + "px," + -viewport.scrollY + "px,0)";
            }
        });
    }, [engine, viewport]);
    if (!viewport)
        return null;
    return (React.createElement("div", { ref: ref, className: prefix },
        React.createElement(Insertion, null),
        React.createElement(DashedBox, null),
        React.createElement(Selection, null),
        React.createElement(Cover, null),
        React.createElement(FreeSelection, null)));
};
AuxToolWidget.displayName = 'AuxToolWidget';
