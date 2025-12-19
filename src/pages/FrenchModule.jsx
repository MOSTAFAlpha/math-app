import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import SubjectHome from './SubjectHome';
import ChapterView from './ChapterView';
import { frenchChapters } from '../data/frenchChapters';

/**
 * FrenchModule - French subject pages with routing
 */
const FrenchModule = () => {
    return (
        <Routes>
            <Route
                index
                element={
                    <SubjectHome
                        title="Français"
                        description="Langue et Littérature Française - 2ème Baccalauréat"
                        chapters={frenchChapters}
                        basePath="/francais"
                        colorClass="french"
                    />
                }
            />
            <Route path="chapitre/:chapterId" element={<FrenchChapterWrapper />} />
        </Routes>
    );
};

const FrenchChapterWrapper = () => {
    const { chapterId } = useParams();
    const chapter = frenchChapters.find(c => c.id === chapterId);

    return (
        <ChapterView
            chapter={chapter}
            subjectPath="/francais"
            subjectName="Français"
            subjectColor="french"
        />
    );
};

export default FrenchModule;
