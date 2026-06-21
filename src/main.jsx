import React from 'react';
import { createRoot } from 'react-dom/client';
import Routing from './Routing/Routing';

createRoot(document.getElementById('root')).render(
    <div>
        <Routing/>
    </div>
);