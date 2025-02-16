"use client";
import React from 'react';
import Head from 'next/head';
import { BookOpen, Feather, Star } from 'lucide-react';

export default function Sejarah() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Sejarah Desa Tawangharjo</title>
        <meta name="description" content="Sejarah dan Makna Nama Desa Tawangharjo" />
      </Head>

      {/* Hero Section with improved gradient */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-24">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Sejarah Desa Tawangharjo
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Perjalanan Menuju Harapan Tinggi, Keindahan, dan Kemuliaan
          </p>
        </div>
        
        {/* Enhanced background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
        </div>
      </section>

      {/* Main Content - Centered */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-8 space-y-8 border border-gray-100">
            {/* Header with icon */}
            <div className="flex items-center space-x-4 border-b border-gray-100 pb-6">
              <div className="bg-green-50 p-3 rounded-xl">
                <BookOpen className="text-green-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-green-800">
                Makna Nama Tawangharjo
              </h2>
            </div>
            
            {/* Content with improved spacing and typography */}
            <div className="space-y-6 text-gray-700">
              <div className="p-6 bg-green-50 rounded-xl">
                <p className="leading-relaxed mb-4">
                  <span className="font-bold text-green-700">Tawang</span> berarti langit, 
                  melambangkan cakrawala luas yang tak terbatas – sebuah metafora bagi 
                  potensi dan mimpi yang tak terbendung.
                </p>
                
                <p className="leading-relaxed">
                  <span className="font-bold text-green-700">Harjo</span> membawa makna 
                  selamat, untung, baik, bagus, indah, dan mulia – sebuah harapan tinggi 
                  akan masa depan gemilang.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-600">
                <div className="flex items-start space-x-4">
                  <Feather className="text-green-600 w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="italic text-gray-600">
                    Nama ini lebih dari sekadar kombinasi kata. Ia adalah sebuah filosofi, 
                    sebuah janji akan potensi luar biasa yang terkandung dalam setiap derap 
                    langkah masyarakat Tawangharjo.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Footer section with aspiration */}
            <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-xl mt-6">
              <Star className="w-6 h-6 text-green-600" />
              <p className="font-medium text-green-800">
                Harapan untuk menjadi desa yang lebih unggul dan bermartabat
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}