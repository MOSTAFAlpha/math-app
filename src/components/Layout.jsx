import React from 'react';
import { NavLink, useLocation, Link, Outlet } from 'react-router-dom';
import { Home, BookOpen, Layers, GitMerge, GraduationCap, ArrowLeft } from 'lucide-react';

const Layout = ({ children }) => {
    const location = useLocation();

    const navItems = [
        { icon: Home, label: 'Accueil', path: '/math' },
        { icon: Layers, label: 'Exercices', path: '/math/solutions' },
        { icon: BookOpen, label: 'Cours', path: '/math/lessons' },
        { icon: GitMerge, label: 'Méthodes', path: '/math/workflow' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                        >
                            <ArrowLeft size={18} className="text-gray-600" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <GraduationCap size={18} className="text-white" />
                            </div>
                            <span className="font-semibold text-gray-900">Mathématiques</span>
                        </div>
                    </div>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                        2BAC PC
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
                {children}
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="bg-white border-t border-gray-200 sticky bottom-0 z-50">
                <div className="max-w-4xl mx-auto flex">
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
                                    flex-1 flex flex-col items-center justify-center py-3 gap-1
                                    transition-colors duration-200
                                    ${isActive
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }
                                `}
                            >
                                <Icon size={20} />
                                <span className="text-[11px] font-medium">{item.label}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Layout;
