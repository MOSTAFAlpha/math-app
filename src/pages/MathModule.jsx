import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import SubjectHome from './SubjectHome';
import ChapterView from './ChapterView';
import { mathChapters } from '../data/mathChapters';

/**
 * MathModule - Math subject pages with routing
 */
const MathModule = () => {
    return (
        <Routes>
            <Route
                index
                element={
                    <SubjectHome
                        title="Mathématiques"
                        description="Programme de 2ème Baccalauréat - Sciences Mathématiques"
                        chapters={mathChapters}
                        basePath="/math"
                        colorClass=""
                    />
                }
            />
            <Route path="chapitre/:chapterId" element={<MathChapterWrapper />} />
        </Routes>
    );
};

const MathChapterWrapper = () => {
    const { chapterId } = useParams();
    const chapter = mathChapters.find(c => c.id === chapterId);

    return (
        <ChapterView
            chapter={chapter}
            subjectPath="/math"
            subjectName="Mathématiques"
            subjectColor=""
        />
    );
};

export default MathModule;
