import React from 'react';


export const VisibilityContext = React.createContext({
    visible: false,
    setVisible: (value: ((prevState: boolean) => boolean) | boolean) => {},
});

