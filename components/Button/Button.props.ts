import {  ReactNode } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}