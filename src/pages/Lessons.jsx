import React from 'react';
import Latex from 'react-latex-next';
import { Book } from 'lucide-react';

const Lessons = () => {
    return (
        <div className="animate-enter pb-24">
            <div className="px-4 mb-6">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
                    Lessons
                </h1>
                <p className="text-xs text-slate-400">Key concepts for this homework.</p>
            </div>

            <div className="px-4 space-y-6">

                {/* Lesson 1 */}
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                    <h2 className="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                        <Book size={18} /> Suites Numériques
                    </h2>
                    <div className="space-y-3 text-sm text-slate-300">
                        <div>
                            <strong className="text-white block mb-1">1. Récurrence</strong>
                            <p>
                                <Latex>{`Pour montrer $P(n)$ est vraie $\\forall n$:`}</Latex>
                            </p>
                            <ul className="list-disc pl-4 mt-1 text-slate-400 space-y-1">
                                <li>
                                    <strong className="text-blue-400">Init:</strong>{' '}
                                    <Latex>{`Vérifier pour $n=0$.`}</Latex>
                                </li>
                                <li>
                                    <strong className="text-blue-400">Hérédité:</strong>{' '}
                                    <Latex>{`Supposer $P(n)$, montrer $P(n+1)$.`}</Latex>
                                </li>
                            </ul>
                        </div>
                        <div className="h-px bg-white/10 my-2"></div>
                        <div>
                            <strong className="text-white block mb-1">2. Convergence</strong>
                            <p>
                                Théorème: Toute suite <strong className="text-green-400">décroissante et minorée</strong> (ou croissante et majorée) est convergente.
                            </p>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">3. Suite Arithmétique</strong>
                            <p>
                                <Latex>{`$v_{n+1} - v_n = r$. Terme général: $v_n = v_0 + nr$.`}</Latex>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lesson 2 */}
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                    <h2 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                        <Book size={18} /> Primitives
                    </h2>
                    <div className="space-y-3 text-sm text-slate-300">
                        <div>
                            <strong className="text-white block mb-1">Formules Usuelles</strong>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-white/5 p-2 rounded border border-white/5">
                                    <div className="text-slate-500">
                                        <Latex>{`Fonction $u'u^n$`}</Latex>
                                    </div>
                                    <div className="text-purple-300">
                                        <Latex>{`$\\frac{u^{n+1}}{n+1}$`}</Latex>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-2 rounded border border-white/5">
                                    <div className="text-slate-500">
                                        <Latex>{`Fonction $\\frac{u'}{\\sqrt{u}}$`}</Latex>
                                    </div>
                                    <div className="text-purple-300">
                                        <Latex>{`$2\\sqrt{u}$`}</Latex>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-2 rounded border border-white/5">
                                    <div className="text-slate-500">
                                        <Latex>{`Fonction $\\frac{u'}{u^n}$`}</Latex>
                                    </div>
                                    <div className="text-purple-300">
                                        <Latex>{`$\\frac{-1}{(n-1)u^{n-1}}$`}</Latex>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">Linéarisation</strong>
                            <p>
                                <Latex>{`Pour $\\sin^3 x$, utiliser $\\sin^2 x = 1 - \\cos^2 x$.`}</Latex>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lesson 3 */}
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
                    <h2 className="text-lg font-bold text-pink-300 mb-3 flex items-center gap-2">
                        <Book size={18} /> Étude de Fonctions
                    </h2>
                    <div className="space-y-3 text-sm text-slate-300">
                        <div>
                            <strong className="text-white block mb-1">1. Asymptotes</strong>
                            <ul className="list-disc pl-4 text-slate-400 space-y-1">
                                <li><Latex>{`$\\lim_{x \\to a} f(x) = \\infty \\implies$ Verticale $x=a$.`}</Latex></li>
                                <li><Latex>{`$\\lim_{x \\to \\infty} f(x) = b \\implies$ Horizontale $y=b$.`}</Latex></li>
                                <li><Latex>{`$\\lim_{x \\to \\infty} f(x)/x = 0 \\implies$ Branche parabolique $(Ox)$.`}</Latex></li>
                            </ul>
                        </div>
                        <div>
                            <strong className="text-white block mb-1">2. Théorème de la Bijection</strong>
                            <p>
                                Si <Latex>{`$f$`}</Latex> est <strong className="text-green-400">continue</strong> et <strong className="text-green-400">strictement monotone</strong> sur <Latex>{`$I$`}</Latex>, elle admet une réciproque sur <Latex>{`$J = f(I)$`}</Latex>.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Lessons;
