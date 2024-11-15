import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// ... imports existants ...

const AuthModal = ({ isOpen, onClose, children, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black z-[1100]"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed left-4 right-4 top-[10vh] md:left-1/2 md:top-[10vh] md:w-full md:max-w-md md:-translate-x-1/2 bg-white rounded-2xl shadow-xl z-[1200] overflow-hidden max-h-[80vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-3 sm:px-6 sm:py-4">
                            <button
                                onClick={onClose}
                                className="absolute right-2 top-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5 text-gray-500" />
                            </button>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;