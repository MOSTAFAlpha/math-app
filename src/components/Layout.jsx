import React from 'react';
import { NavLink, useLocation, Link, Outlet } from 'react-router-dom';
import { Home, BookOpen, Layers, GitMerge, GraduationCap, ChevronRight, Folder } from 'lucide-react';

const Layout = ({ children }) => {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Accueil', path: '/math' },
        { icon: Layers, label: 'Exercices', path: '/math/solutions' },
        { icon: BookOpen, label: 'Cours', path: '/math/lessons' },
        { icon: GitMerge, label: 'Méthodes', path: '/math/workflow' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header - Green AlloSchool style */}
            <header className="bg-emerald-600 text-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-14">
                        <div className="flex items-center gap-3">
                            <GraduationCap size={28} />
                            <span className="text-xl font-bold">MaClasse</span>
                        </div>
                        <nav className="hidden sm:flex items-center gap-6 text-sm">
                            <Link to="/" className="flex items-center gap-1 hover:text-emerald-200">
                                <Folder size={16} /> Toutes les matières
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-emerald-600">🏠 Accueil</Link>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium">Mathématiques</span>
                    </div>
                </div>
            </div>

            {/* Sub Navigation */}
            <div className="bg-white border-b shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex gap-1 overflow-x-auto">
                        {navItems.map((item) => {
                            const isActive = item.path === '/math'
                                ? location.pathname === '/math'
                                : location.pathname.startsWith(item.path);
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        flex items-center gap-2 px-4 py-3 text-sm font-medium
                                        border-b-2 transition-colors whitespace-nowrap
                                        ${isActive
                                            ? 'text-emerald-600 border-emerald-600'
                                            : 'text-gray-600 border-transparent hover:text-emerald-600 hover:border-emerald-300'
                                        }
                                    `}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
                {children}
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-400 mt-auto">
                <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">
                    © 2024 MaClasse • Ressources éducatives pour le Baccalauréat Marocain
                </div>
            </footer>
        </div>
    );
};

export default Layout;
