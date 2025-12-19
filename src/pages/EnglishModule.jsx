import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import SubjectHome from './SubjectHome';
import ChapterView from './ChapterView';
import { englishChapters } from '../data/englishChapters';

/**
 * EnglishModule - English subject pages with routing
 */
const EnglishModule = () => {
    return (
        <Routes>
            <Route
                index
                element={
                    <SubjectHome
                        title="English"
                        description="English Language Skills for 2ème Baccalauréat"
                        chapters={englishChapters}
                        basePath="/english"
                        colorClass="english"
                    />
                }
            />
            <Route path="chapitre/:chapterId" element={<EnglishChapterWrapper />} />
        </Routes>
    );
};

const EnglishChapterWrapper = () => {
    const { chapterId } = useParams();
    const chapter = englishChapters.find(c => c.id === chapterId);

    return (
        <ChapterView
            chapter={chapter}
            subjectPath="/english"
            subjectName="English"
            subjectColor="english"
        />
    );
};

export default EnglishModule;
