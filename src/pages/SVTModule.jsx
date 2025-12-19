import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import SubjectHome from './SubjectHome';
import ChapterView from './ChapterView';
import { svtChapters } from '../data/svtChapters';

/**
 * SVTModule - SVT subject pages with routing
 */
const SVTModule = () => {
    return (
        <Routes>
            <Route
                index
                element={
                    <SubjectHome
                        title="Sciences de la Vie et de la Terre"
                        description="Programme de 2ème Baccalauréat - SVT"
                        chapters={svtChapters}
                        basePath="/svt"
                        colorClass="svt"
                    />
                }
            />
            <Route path="chapitre/:chapterId" element={<SVTChapterWrapper />} />
        </Routes>
    );
};

const SVTChapterWrapper = () => {
    const { chapterId } = useParams();
    const chapter = svtChapters.find(c => c.id === chapterId);

    return (
        <ChapterView
            chapter={chapter}
            subjectPath="/svt"
            subjectName="SVT"
            subjectColor="svt"
        />
    );
};

export default SVTModule;
