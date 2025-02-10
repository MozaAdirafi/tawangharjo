"use client"
import React, { useState } from 'react';
import { 
  MapPin, 
  Layers, 
  Droplet, 
  Leaf, 
  ArrowRight,
  ArrowLeft, 
  ArrowDown,
  ArrowUp,
  Mountain, 
  Sun 
} from 'lucide-react';

const TawangharjoInfografis = () => {
  const [activeSection, setActiveSection] = useState('geografis');

  const sections = {
    geografis: {
      title: 'Geografis Desa',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-green-200 p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="w-10 h-10 text-green-700" />
              <h3 className="text-2xl font-bold text-green-800">Lokasi Administratif</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2 text-green-900">Wilayah Administratif:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Kecamatan: Giriwoyo</li>
                  <li>Kabupaten: Wonogiri</li>
                  <li>Jarak dari Kota Kabupaten: 30 km</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-green-900">Luas Wilayah:</p>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <span className="text-4xl font-extrabold text-green-800">542.89</span>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">Hektar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-blue-200 p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Mountain className="w-10 h-10 text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-800">Batas Wilayah</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2 text-blue-900">Perbatasan:</p>
                <ul className="space-y-3">
                  <li className="flex items-center bg-blue-50 p-2 rounded-md">
                    <ArrowUp className="mr-3 text-blue-500 w-6 h-6" /> 
                    <span className="text-gray-700">Utara: Desa Glesungrejo</span>
                  </li>
                  <li className="flex items-center bg-blue-50 p-2 rounded-md">
                    <ArrowRight className="mr-3 text-blue-500 w-6 h-6" /> 
                    <span className="text-gray-700">Timur: Desa Sendangagung</span>
                  </li>
                  <li className="flex items-center bg-blue-50 p-2 rounded-md">
                    <ArrowDown className="mr-3 text-blue-500 w-6 h-6" /> 
                    <span className="text-gray-700">Selatan: Desa Sirnoboyo</span>
                  </li>
                  <li className="flex items-center bg-blue-50 p-2 rounded-md">
                    <ArrowLeft className="mr-3 text-blue-500 w-6 h-6" /> 
                    <span className="text-gray-700">Barat: Desa Minggarharjo</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-blue-900">Koordinat Astronomis:</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-blue-800">-8.000240</span>
                      <p className="text-sm text-gray-600">Lintang Selatan</p>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-blue-800">110.892245</span>
                      <p className="text-sm text-gray-600">Bujur Timur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    pertanian: {
      title: 'Potensi Pertanian',
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-amber-200 p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Droplet className="w-10 h-10 text-amber-700" />
              <h3 className="text-2xl font-bold text-amber-800">Sumber Daya Lahan</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2 text-amber-900">Jenis Lahan:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Sawah Tadah Hujan</li>
                  <li>Tanah Kering/Tegalan</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-amber-900">Potensi Panen:</p>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <span className="text-4xl font-extrabold text-amber-800">2-3</span>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">Kali Panen per Tahun</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-green-200 p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Leaf className="w-10 h-10 text-green-700" />
              <h3 className="text-2xl font-bold text-green-800">Hasil Utama</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2 text-green-900">Tanaman Utama:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Padi</li>
                  <li>Tanaman Palawija</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-green-900">Inovasi Pertanian:</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Sun className="text-yellow-500 w-6 h-6" />
                    <span className="text-gray-700">Sumur Pantek untuk Optimasi Air</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-12 animate-pulse">
          Infografis Desa Tawangharjo
        </h1>

        {/* Section Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white shadow-md rounded-full p-2 flex space-x-2">
            <button
              onClick={() => setActiveSection('geografis')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out ${
                activeSection === 'geografis' 
                  ? 'bg-green-600 text-white scale-105' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Geografis
            </button>
            <button
              onClick={() => setActiveSection('pertanian')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ease-in-out ${
                activeSection === 'pertanian' 
                  ? 'bg-green-600 text-white scale-105' 
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Pertanian
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full">
          <div className="bg-white border border-green-200 rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <div className="flex items-center space-x-4">
                <Layers className="w-10 h-10" />
                <h2 className="text-xl font-bold">{sections[activeSection].title}</h2>
              </div>
            </div>
            <div className="p-8">
              {sections[activeSection].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TawangharjoInfografis;