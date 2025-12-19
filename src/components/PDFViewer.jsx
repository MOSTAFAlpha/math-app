import React, { useState } from 'react';
import { Download, Printer, Maximize2, Minimize2, FileText } from 'lucide-react';

/**
 * PDFViewer - Reusable PDF viewing component with download and print buttons
 * @param {string} pdfUrl - URL to the PDF file
 * @param {string} title - Optional title for the PDF
 */
const PDFViewer = ({ pdfUrl, title = 'Document PDF' }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePrint = () => {
        const printWindow = window.open(pdfUrl, '_blank');
        if (printWindow) {
            printWindow.addEventListener('load', () => {
                printWindow.print();
            });
        }
    };

    const toggleFullscreen = () => {
        const container = document.querySelector('.pdf-viewer');
        if (!isFullscreen) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    // If no PDF URL is provided
    if (!pdfUrl) {
        return (
            <div className="pdf-viewer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <FileText size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                    <p>Aucun document PDF disponible pour le moment.</p>
                    <p style={{ fontSize: 'var(--font-size-sm)' }}>
                        Le document sera ajouté prochainement.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="pdf-viewer">
            {/* Toolbar */}
            <div className="pdf-toolbar">
                <div className="pdf-toolbar-title">
                    <span>{title}</span>
                </div>
                <div className="pdf-toolbar-actions">
                    <button
                        className="btn btn-secondary"
                        onClick={handleDownload}
                        title="Télécharger le PDF"
                    >
                        <Download size={18} />
                        <span>Télécharger</span>
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={handlePrint}
                        title="Imprimer le PDF"
                    >
                        <Printer size={18} />
                        <span>Imprimer</span>
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={toggleFullscreen}
                        title={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
                    >
                        {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                </div>
            </div>

            {/* PDF Iframe */}
            <iframe
                className="pdf-frame"
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                title={title}
                allow="fullscreen"
            />
        </div>
    );
};

export default PDFViewer;
