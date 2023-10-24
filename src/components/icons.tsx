import React from 'react'
import * as icons from 'react-bootstrap-icons';
import { IconProps } from 'react-bootstrap-icons';

interface Props extends IconProps {
    iconName: keyof typeof icons;
}

const Icon = ({iconName, ...props} : Props) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
}

export default Icon 

// import * as icons from 'react-bootstrap-icons';
// import { IconProps } from 'react-bootstrap-icons';

// interface Props extends IconProps {
//     iconName: keyof typeof icons;
// }

// export const Icon = ({ iconName, ...props }: Props) => {
//     const BootstrapIcon = icons[iconName];
//     return <BootstrapIcon {...props} />;
// }