import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Number from './Components/Login/Number'
return (
    <Routes>
    <Route path="/" element={<Number />} />
    </Routes>
);
export default Layout;
