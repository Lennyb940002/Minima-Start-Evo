import React, { useState, useEffect } from 'react';
import { Product, ProductModalProps } from './types';

export function ProductModal({ isOpen, onClose, onSubmit, initialData }: ProductModalProps) {
    const [productData, setProductData] = useState<Partial<Product>>(initialData || {
        status: 'draft',
        tags: [],
        purchaseValue: '',
        salePrice: '',
        unit: ''
    });

    useEffect(() => {
        if (initialData) setProductData(initialData);
    }, [initialData]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-white/10">
                <h2 className="text-3xl font-semibold text-white mb-6">
                    {initialData ? 'Modifier Produit' : 'Créer Produit'}
                </h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nom du Produit"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
                        value={productData.name || ''}
                        onChange={(e) => setProductData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                    <input
                        type="number"
                        placeholder="Valeur d'Achat"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
                        value={productData.purchaseValue || ''}
                        onChange={(e) => setProductData((prev) => ({ ...prev, purchaseValue: e.target.value }))}
                    />
                    <input
                        type="number"
                        placeholder="Prix de Vente"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
                        value={productData.salePrice || ''}
                        onChange={(e) => setProductData((prev) => ({ ...prev, salePrice: e.target.value }))}
                    />
                    <input
                        type="text"
                        placeholder="Unité (ex : pièce, kg, litre)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
                        value={productData.unit || ''}
                        onChange={(e) => setProductData((prev) => ({ ...prev, unit: e.target.value }))}
                    />
                    <select
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white"
                        value={productData.status || 'draft'}
                        onChange={(e) => setProductData((prev) => ({ ...prev, status: e.target.value as Product['status'] }))}
                    >
                        <option className='text-black' value="draft">Brouillon</option>
                        <option className='text-black' value="in-progress">En Cours</option>
                        <option className='text-black' value="validated">Validé</option>
                        <option className='text-black' value="rejected">Rejeté</option>
                    </select>
                    <div className="flex space-x-4">
                        <button
                            className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition"
                            onClick={onClose}
                        >
                            Annuler
                        </button>
                        <button
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                            onClick={() => {
                                if (productData.name && productData.purchaseValue && productData.salePrice && productData.unit) {
                                    onSubmit({
                                        id: initialData?.id || Date.now(),
                                        totalScore: 0,
                                        tags: productData.tags || [],
                                        ...productData,
                                    } as Product);
                                    onClose();
                                } else {
                                    alert('Veuillez remplir tous les champs obligatoires.');
                                }
                            }}
                        >
                            {initialData ? 'Sauvegarder' : 'Créer'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
