import React from 'react';
export interface IWorkspaceItemProps {
    style?: React.CSSProperties;
    flexable?: boolean;
}
export declare const WorkspacePanel: React.FC<React.PropsWithChildren<unknown>> & {
    Item?: React.FC<React.PropsWithChildren<IWorkspaceItemProps>>;
};
