import React from 'react';
import { TooltipProps } from 'antd';
import './styles.less';
export interface IconProviderProps {
    tooltip?: boolean;
}
export interface IShadowSVGProps {
    content?: string;
    width?: number | string;
    height?: number | string;
}
export interface IIconWidgetProps extends React.HTMLAttributes<HTMLElement> {
    tooltip?: React.ReactNode | TooltipProps;
    infer: React.ReactNode | {
        shadow: string;
    };
    size?: number | string;
}
export declare const IconWidget: React.FC<React.PropsWithChildren<IIconWidgetProps>> & {
    Provider?: React.FC<React.PropsWithChildren<IconProviderProps>>;
    ShadowSVG?: React.FC<React.PropsWithChildren<IShadowSVGProps>>;
};
