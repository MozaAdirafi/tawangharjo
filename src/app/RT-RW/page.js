"use client";

import React, { useState } from 'react';
import { File } from 'lucide-react';

export default function RTRW() {
  const [activeDusun, setActiveDusun] = useState("Pangkah");

  const dusunData = {
    "Pangkah": {
      rw: {
        nomor: "01",
        ketua: "Slamet",
        sekretaris: "Taryono",
        bendahara: "Sularno"
      },
      rt: [
        {
          rt: "01",
          rw: "01",
          ketua: "Rudiyanto",
          sekretaris: "Slamet",
          bendahara: "Sukidi Hadi Siswoyo"
        },
        {
          rt: "02",
          rw: "01",
          ketua: "Srianto",
          sekretaris: "Suyadi",
          bendahara: "Andrian Rejeki Novianto"
        }
      ]
    },
    "Jatiharjo": {
      rw: {
        nomor: "02",
        ketua: "Sulardi",
        sekretaris: "Antonius Harso",
        bendahara: "Sularno"
      },
      rt: [
        {
          rt: "01",
          rw: "02",
          ketua: "Marzuki",
          sekretaris: "Sutini",
          bendahara: "Wiji Astuti"
        },
        {
          rt: "02",
          rw: "02",
          ketua: "Suharno",
          sekretaris: "Sukarni",
          bendahara: "Susianti"
        }
      ]
    },
    "Pestho": {
      rw: {
        nomor: "03",
        ketua: "Agustinus Warsito",
        sekretaris: "Suratman",
        bendahara: "Maryadi"
      },
      rt: [
        {
          rt: "01",
          rw: "03",
          ketua: "Valentinus Suratman",
          sekretaris: "Dwi Priyani",
          bendahara: "Endah Trisnawati"
        }
      ]
    },
    "Wonokriyo": {
      rw: {
        nomor: "04",
        ketua: "Sunarno",
        sekretaris: "Eko Suwarno",
        bendahara: "Kasmin"
      },
      rt: [
        {
          rt: "01",
          rw: "04",
          ketua: "Suyono",
          sekretaris: "Nita",
          bendahara: "Sukarmi"
        },
        {
          rt: "02",
          rw: "04",
          ketua: "Supriyanto",
          sekretaris: "Sri Wahyuni",
          bendahara: "Sartini"
        }
      ]
    },
    "Dringo": {
      rw: {
        nomor: "05",
        ketua: "Heribertus Sutrisno",
        sekretaris: "Ivan Herli Saputra",
        bendahara: "Sarjo"
      },
      rt: [
        {
          rt: "01",
          rw: "05",
          ketua: "Waluoyo",
          sekretaris: "Heri Sutrisno",
          bendahara: "Sartini"
        },
        {
          rt: "02",
          rw: "05",
          ketua: "Priyatmoko",
          sekretaris: "Joko Susilo",
          bendahara: "Sukardi"
        }
      ]
    },
    "Tawangharjo": {
      rw: {
        nomor: "06",
        ketua: "Tardi",
        sekretaris: "Musim",
        bendahara: "Sutaryo"
      },
      rt: [
        {
          rt: "01",
          rw: "06",
          ketua: "Fransiscus Asisi Gunawan",
          sekretaris: "Jeni",
          bendahara: "Indarsih"
        },
        {
          rt: "02",
          rw: "06",
          ketua: "Sugeng Riyanto",
          sekretaris: "Wuryanti",
          bendahara: "Th. Sutarti"
        }
      ]
    },
    "Ngrakung Wetan": {
      rw: {
        nomor: "07",
        ketua: "Wahyudi",
        sekretaris: "Winaryo",
        bendahara: "Heri Setiyawan"
      },
      rt: [
        {
          rt: "01",
          rw: "07",
          ketua: "Muntarin",
          sekretaris: "Wahyudi",
          bendahara: "Ari Susanto"
        },
        {
          rt: "02",
          rw: "07",
          ketua: "Winaryo",
          sekretaris: "Widodo",
          bendahara: "Rohani"
        }
      ]
    },
    "Ngrakung Kulon": {
      rw: {
        nomor: "08",
        ketua: "Marwanto",
        sekretaris: "Karno",
        bendahara: "Agus Nugroho"
      },
      rt: [
        {
          rt: "01",
          rw: "08",
          ketua: "Sutaryo",
          sekretaris: "Marwanto",
          bendahara: "Suyanti"
        },
        {
          rt: "02",
          rw: "08",
          ketua: "Hariyadi",
          sekretaris: "Sarbini",
          bendahara: "Supriyadi"
        }
      ]
    },
    "Mojosawit": {
      rw: {
        nomor: "09",
        ketua: "Surato",
        sekretaris: "Sugimin",
        bendahara: "Triyanto"
      },
      rt: [
        {
          rt: "01",
          rw: "09",
          ketua: "Joko Purnomo",
          sekretaris: "Triyanto",
          bendahara: "Sutoto"
        },
        {
          rt: "02",
          rw: "09",
          ketua: "Giarno",
          sekretaris: "Winarno",
          bendahara: "Sukidi"
        }
      ]
    },
    "Ngluweng": {
      rw: {
        nomor: "10",
        ketua: "Karmin",
        sekretaris: "Tarmin",
        bendahara: "Mardi"
      },
      rt: [
        {
          rt: "01",
          rw: "10",
          ketua: "Stephanus Dwi Basuki",
          sekretaris: "Tumini",
          bendahara: "Ponikem"
        },
        {
          rt: "02",
          rw: "10",
          ketua: "Pujianto",
          sekretaris: "Rohmatun",
          bendahara: "Tumini"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Rukun Tetangga & Rukun Warga
          </h1>
          <p className="text-xl text-center text-green-100">
            Desa Tawangharjo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dusun Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex flex-wrap justify-center gap-1">
            {Object.keys(dusunData).map((dusun) => (
              <button
                key={dusun}
                onClick={() => setActiveDusun(dusun)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDusun === dusun
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {dusun}
              </button>
            ))}
          </div>
        </div>

        {/* RW Card */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              RW {dusunData[activeDusun].rw.nomor}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-28 text-gray-600">Ketua</span>
                <span className="text-gray-800 font-medium">: {dusunData[activeDusun].rw.ketua}</span>
              </div>
              <div className="flex items-center">
                <span className="w-28 text-gray-600">Sekretaris</span>
                <span className="text-gray-800 font-medium">: {dusunData[activeDusun].rw.sekretaris}</span>
              </div>
              <div className="flex items-center">
                <span className="w-28 text-gray-600">Bendahara</span>
                <span className="text-gray-800 font-medium">: {dusunData[activeDusun].rw.bendahara}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RT Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {dusunData[activeDusun].rt.map((data, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                RT {data.rt}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-28 text-gray-600">Ketua</span>
                  <span className="text-gray-800 font-medium">: {data.ketua}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 text-gray-600">Sekretaris</span>
                  <span className="text-gray-800 font-medium">: {data.sekretaris}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-28 text-gray-600">Bendahara</span>
                  <span className="text-gray-800 font-medium">: {data.bendahara}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Document Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <File className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">SK Keterangan RT</h3>
            </div>
            <p className="text-gray-600 mb-4">
                Surat Keterangan Penetapan Pengurus Rukun Tetangga (RT) Desa Tawangharjo 
                Kecamatan Giriwoyo Kabupaten Wonogiri Masa Bhakti 2024-2028
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>Nomor: 11 tahun 2024</span>
            </div>
            <a
              href="SK_KETUA_RT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <File className="h-5 w-5 mr-2" />
              Unduh Surat Keterangan RT
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <File className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Surat Keterangan RW</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Surat Keterangan Penetapan Pengurus Rukun Warga (RW) Desa Tawangharjo 
                Kecamatan Giriwoyo Kabupaten Wonogiri Masa Bhakti 2024-2028
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>Nomor: 12 tahun 2024</span>
            </div>
            <a
              href="SK_KETUA_RW.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <File className="h-5 w-5 mr-2" />
              Unduh Surat Keterangan RW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}