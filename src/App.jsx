import React from 'react'
import { BrowseRouter, Routes, Route } from 'react-router-dom';
import GetAllCharacters from './components/GetAllCharacters';
import GetCharacterDescription from './components/GetCharacterDescription';

const App = () => {
    return (
        <>
            <div className='main-container'>
                <BrowseRouter>
                    <Routes>
                        <Route path='/' element={<GetAllCharacters />}>

                        </Route>
                        <Route path='/character/:id' element={<GetCharacterDescription />}>

                        </Route>
                    </Routes>
                </BrowseRouter>
            </div>
        </>
    );
};

export default App