import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import SubjectHome from './SubjectHome';
import ChapterView from './ChapterView';
import { physiqueChapters } from '../data/physiqueChapters';

/**
 * PhysiqueModule - Physics-Chemistry subject pages with routing
 */
const PhysiqueModule = () => {
    return (
        <Routes>
            <Route
                index
                element={
                    <SubjectHome
                        title="Physique-Chimie"
                        description="Programme de 2ème Baccalauréat - Sciences Physiques"
                        chapters={physiqueChapters}
                        basePath="/physique-chimie"
                        colorClass="physique"
                    />
                }
            />
            <Route path="chapitre/:chapterId" element={<PhysiqueChapterWrapper />} />
        </Routes>
    );
};

const PhysiqueChapterWrapper = () => {
    const { chapterId } = useParams();
    const chapter = physiqueChapters.find(c => c.id === chapterId);

    return (
        <ChapterView
            chapter={chapter}
            subjectPath="/physique-chimie"
            subjectName="Physique-Chimie"
            subjectColor="physique"
        />
    );
};

export default PhysiqueModule;
