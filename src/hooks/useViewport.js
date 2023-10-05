import React from 'react'
import { useContext } from 'react';
import { viewportContext } from '../context/ViewportProvider'

const useViewport = () => {

    const { width } = useContext(viewportContext);
    return { width }
}

export default useViewport;