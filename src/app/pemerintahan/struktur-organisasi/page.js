"use client"

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const StrukturOrganisasi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const strukturData = [
    { 
      label: 'Badan Permusyawaratan Desa (BPD)', 
      icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8v8 M8 12l4-4 4 4',
      variant: 'font-bold text-red-700'
    },
    { 
      label: 'Kepala Desa', 
      name: 'Tri Yatmoko',
      icon: 'M12 15v3m-6 0h12v-3a6 6 0 00-12 0zm12 0h2.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H6m12 0v1.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 016 16.5V15m12 0v-1.5a2.5 2.5 0 00-2.5-2.5h-7A2.5 2.5 0 004 13.5V15',
      variant: 'font-bold text-green-800'
    },
    { 
      label: 'Sekretaris Desa', 
      name: 'Dwi Handoko',
      icon: 'M8 7h12M8 11h12M3 7h.01M3 11h.01M3 15h.01M8 15h12',
      variant: 'font-semibold text-green-700'
    },
    { 
      label: 'Perangkat Desa',
      icon: 'M3 21h18M3 10h18M3 7l9-4 9 4M3 10l9 4 9-4M3 10l9 4 9-4',
      variant: 'font-semibold text-green-700',
      subStructure: [
        { label: 'Kaur Tata Usaha dan Umum', name: 'Sularto' },
        { label: 'Kaur Keuangan', name: 'Siti Nuryani' },
        { label: 'Kaur Perencanaan', name: 'Muh Dayat' },
        { label: 'Kasi Pemerintahan', name: 'Sutarno' },
        { label: 'Kasi Kesejahteraan', name: 'Agus Susanto' },
        { label: 'Kasi Pelayanan', name: 'Muhamad Ikhsan' }
      ]
    },
    { 
      label: 'Kepala Dusun',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      variant: 'font-semibold text-green-700',
      subStructure: [
        { label: 'Kepala Dusun I', name: 'Sunarto' },
        { label: 'Kepala Dusun II', name: 'Widayadi' },
        { label: 'Kepala Dusun III', name: 'Joko Purnoto' }
      ]
    }
  ];

  const IconSVG = ({ d, className = "w-6 h-6 stroke-current" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );

  return (
    <div className="min-h-screen">
      <Head>
        <title>Struktur Organisasi - Desa Tawangharjo</title>
        <meta 
          name="description" 
          content="Struktur Organisasi Pemerintahan Desa Tawangharjo" 
        />
      </Head>

      <div className="bg-green-600 text-white py-12 text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-3 tracking-tight">Struktur Organisasi</h1>
          <p className="text-green-100 text-lg opacity-90">
            Pemerintah Desa Tawangharjo, Kecamatan Giriwoyo, Kabupaten Wonogiri
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 bg-green-50 border-r border-green-100">
              <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-2 border-green-600 pb-3">
                Susunan Organisasi
              </h2>
              {strukturData.map((section, index) => (
                <div 
                  key={index} 
                  className="mb-6 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="mr-4 text-green-600 group-hover:text-green-800 transition-colors">
                      <IconSVG d={section.icon} />
                    </div>
                    <h3 className={`text-xl ${section.variant}`}>
                      {section.label}
                    </h3>
                  </div>
                  {section.name && (
                    <p className="text-gray-700 pl-10 font-medium">{section.name}</p>
                  )}
                  {section.subStructure && (
                    <ul className="pl-10 mt-3 space-y-2 text-gray-700">
                      {section.subStructure.map((item, subIndex) => (
                        <li 
                          key={subIndex} 
                          className="flex justify-between pb-2 border-b border-green-100 last:border-b-0"
                        >
                          <span className="text-green-800 font-medium">{item.label}</span>
                          <span className="text-gray-600">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center p-8 bg-green-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition-all hover:scale-105" onClick={() => setIsModalOpen(true)}>
                <Image 
                  src="/Struktur_Diagram.jpg" 
                  alt="Diagram Struktur Organisasi" 
                  width={500} 
                  height={400} 
                  className="rounded-xl shadow-md"
                />
                <p className="mt-4 text-green-700 font-semibold">
                  Diagram Struktur Organisasi Desa
                </p>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white text-2xl font-bold">&times;</button>
            <Image src="/Struktur_Diagram.jpg" alt="Diagram Struktur Organisasi" width={1000} height={800} className="rounded-xl shadow-lg" />
          </div>
        </div>
      )}

        <div className="mt-8 text-center">
          <p className="text-green-800 text-sm opacity-80">
            Berdasarkan Peraturan Desa Tawangharjo No 5 Tahun 2022
            Tentang Perubahan Atas Perdes No 3 Tahun 2017
          </p>
        </div>
      </main>
    </div>
  );
};

export default StrukturOrganisasi;