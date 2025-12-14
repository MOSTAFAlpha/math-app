import React from 'react';
import { Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const English = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <Languages size={40} className="text-orange-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">English</h1>
            <p className="text-slate-400 mb-6">The English module is coming soon.</p>
            <Link to="/" className="px-6 py-2 bg-slate-800 rounded-xl text-sm font-bold text-white border border-slate-700 hover:bg-slate-700">
                Go Home
            </Link>
        </div>
    );
};

export default English;
