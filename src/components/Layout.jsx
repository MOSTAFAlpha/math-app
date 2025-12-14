import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Home, BookOpen, Layers, GitMerge, GraduationCap } from 'lucide-react';
import clsx from 'clsx';

const Layout = ({ children }) => {
    const location = useLocation();

    // Navigation scoped to the Math module
    const navItems = [
        { icon: Home, label: 'Accueil', path: '/math' },
        { icon: Layers, label: 'Solutions', path: '/math/solutions' },
        { icon: BookOpen, label: 'Leçons', path: '/math/lessons' },
        { icon: GitMerge, label: 'Workflow', path: '/math/workflow' },
    ];

    return (
        <div className="flex flex-col min-h-screen relative bg-slate-950">
            {/* Header */}
            <header className="glass-nav fixed top-0 w-full z-20 px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-cyan-500/30">
                        M
                    </div>
                    <div>
                        <span className="font-bold text-lg tracking-tight text-white block leading-none">MathHelper</span>
                        <span className="text-[10px] text-slate-400">2BAC PC</span>
                    </div>
                </div>

                {/* Back to Modules Dashboard */}
                <Link to="/" className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-white/10 transition-colors">
                    <GraduationCap size={18} className="text-purple-300" />
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 pt-20 pb-24 px-4 overflow-y-auto">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="glass-nav fixed bottom-0 w-full z-20 pb-safe border-t border-white/5 bg-slate-900/90 backdrop-blur-xl">
                <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
                    {navItems.map((item) => {
                        // Check if active (handle root /math vs strict equality)
                        const isActive = item.path === '/math'
                            ? location.pathname === '/math'
                            : location.pathname.startsWith(item.path);
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    "flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-300 group",
                                    isActive ? "text-cyan-400" : "text-slate-500 hover:text-slate-300"
                                )}
                            >
                                <div className={clsx(
                                    "p-1.5 rounded-xl transition-all duration-300 relative",
                                    isActive && "bg-cyan-500/10 -translate-y-1"
                                )}>
                                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                    {isActive && (
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                    )}
                                </div>
                                <span className={clsx(
                                    "text-[10px] font-medium transition-opacity duration-300",
                                    isActive ? "opacity-100" : "opacity-0 hidden group-hover:block group-hover:opacity-100"
                                )}>
                                    {item.label}
                                </span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Layout;
