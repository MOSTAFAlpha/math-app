import React from 'react';
import { Atom } from 'lucide-react';
import { Link } from 'react-router-dom';

const Physics = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Atom size={40} className="text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Physique</h1>
            <p className="text-slate-400 mb-6">Le module de Physique est en cours de développement.</p>
            <Link to="/" className="px-6 py-2 bg-slate-800 rounded-xl text-sm font-bold text-white border border-slate-700 hover:bg-slate-700">
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default Physics;
