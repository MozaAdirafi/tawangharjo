"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { BookOpen, Feather, Star } from 'lucide-react';

export default function Sejarah() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Head>
        <title>Sejarah Desa Tawangharjo</title>
        <meta name="description" content="Sejarah dan Makna Nama Desa Tawangharjo" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
            Sejarah Desa Tawangharjo
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Perjalanan Menuju Harapan Tinggi, Keindahan, dan Kemuliaan
          </p>
        </div>
        
        {/* Background Design Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-500 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div className="flex items-center space-x-4 mb-4">
              <BookOpen className="text-green-600 w-10 h-10" />
              <h2 className="text-2xl font-bold text-green-800">Makna Nama Tawangharjo</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <span className="font-bold text-green-700">Tawang</span> berarti langit, melambangkan cakrawala luas 
                yang tak terbatas – sebuah metafora bagi potensi dan mimpi yang tak terbendung.
              </p>
              
              <p className="leading-relaxed">
                <span className="font-bold text-green-700">Harjo</span> membawa makna selamat, untung, baik, bagus, 
                indah, dan mulia – sebuah harapan tinggi akan masa depan gemilang.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-4 italic">
                <Feather className="inline-block mr-2 text-green-600" />
                Nama ini lebih dari sekadar kombinasi kata. Ia adalah sebuah filosofi, 
                sebuah janji akan potensi luar biasa yang terkandung dalam setiap derap 
                langkah masyarakat Tawangharjo.
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-green-700">
              <Star className="w-6 h-6" />
              <p className="font-semibold">
                Harapan untuk menjadi desa yang lebih unggul dan bermartabat
              </p>
            </div>
          </div>

          {/* Image Placeholder Section */}
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/foto-desa.jpg" 
                alt="Pemandangan Desa Tawangharjo" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-green-50">
                <p className="text-center text-green-800 font-medium">
                  Panorama Alam Desa Tawangharjo
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Sejarah Desa" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-green-50">
                <p className="text-center text-green-800 font-medium">
                  Jejak Sejarah Tawangharjo
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}