import React from 'react';
import { TreeNode } from '@designable/core';
export interface ISelectionBoxProps {
    node: TreeNode;
    showHelpers: boolean;
}
export declare const SelectionBox: React.FC<React.PropsWithChildren<ISelectionBoxProps>>;
export declare const Selection: React.MemoExoticComponent<import("@formily/reactive-react").ReactFC<unknown>>;
