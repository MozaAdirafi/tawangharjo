"use client";

import React, { useState } from "react";
import { User, CheckCircle, FileText, Clock, File } from "lucide-react";

export default function TPPKK() {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = {
    profile: {
      title: "Profil TP PKK",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">
            Tim Penggerak Pemberdayaan dan Kesejahteraan Keluarga (TP PKK) Desa
            Tawangharjo adalah organisasi kemasyarakatan yang dibentuk
            berdasarkan Keputusan Kepala Desa Nomor 11 Tahun 2020, dengan fokus
            pada pemberdayaan keluarga dan peningkatan kesejahteraan masyarakat
            di tingkat desa.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Visi
              </h3>
              <p className="text-gray-600">
                Mewujudkan Pemberdayaan dan Kesejahteraan Keluarga yang
                Berkelanjutan di Desa Tawangharjo
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">
                Misi
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mendukung Gerakan Pemberdayaan Masyarakat Desa</li>
                <li>
                  • Meningkatkan Kualitas Hidup dan Kesejahteraan Keluarga
                </li>
                <li>• Mengembangkan Program Pembinaan Berkelanjutan</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    struktur: {
      title: "Struktur Organisasi",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Susunan Pengurus TP PKK Desa Tawangharjo
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="p-3 text-left">Nama</th>
                  <th className="p-3 text-left">Kedudukan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Dwi Ana", position: "Ketua" },
                  { name: "Suparsi", position: "Wakil Ketua" },
                  { name: "Dwi Handoko", position: "Sekretaris" },
                  { name: "Dwi Lestari", position: "Sekretaris II" },
                  { name: "Damar Wagiyanti", position: "Wakil Sekretaris" },
                  { name: "Haryani", position: "Bendahara" },
                  { name: "Indarsih", position: "Wakil Bendahara" },
                  { name: "Yusmiati", position: "Ketua Pokja I" },
                  { name: "Supartini", position: "Wakil Ketua Pokja I" },
                  { name: "Rita Wahyuningsih", position: "Sekretaris" },
                  { name: "Wanti", position: "Bendahara" },
                  { name: "Yayah Rodiyah", position: "Ketua Pokja II" },
                  { name: "Ardiningsih", position: "Wakil Ketua Pokja II" },
                  { name: "Erna Maryanti", position: "Sekretaris" },
                  { name: "Suyanti", position: "Bendahara" },
                  { name: "Dwi Priyani", position: "Ketua Pokja III" },
                  { name: "Ika Lestari", position: "Wakil Ketua Pokja III" },
                  { name: "Sulistyaningsih", position: "Sekretaris" },
                  { name: "Hartatik", position: "Bendahara" },
                  { name: "Tumini", position: "Ketua Pokja IV" },
                  { name: "Jeni", position: "Wakil Ketua Pokja IV" },
                  { name: "Eka Susanti", position: "Sekretaris" },
                  { name: "Nurhayati", position: "Bendahara" },
                ].map((member, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-green-50 transition"
                  >
                    <td className="p-3">{member.name}</td>
                    <td className="p-3">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    suratKeputusan: {
      title: "Surat Keputusan",
      content: (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-6">
            <File className="h-8 w-8 text-red-600 mr-4" />
            <h3 className="text-2xl font-bold text-green-700">
              Keputusan Kepala Desa Tawangharjo
            </h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 mb-4">
              Dokumen resmi penetapan pengurus Tim Penggerak Pemberdayaan dan
              Kesejahteraan Keluarga (TP PKK) Desa Tawangharjo, yang ditetapkan
              berdasarkan ketentuan peraturan perundang-undangan.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">Nomor: 11 Tahun 2020</span>
              <span className="text-gray-500">Masa Bakti: 2020-2024</span>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="SK_TP_PKK_Tawangharjo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <File className="mr-2" />
              Unduh Surat Keputusan
            </a>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tim Penggerak PKK
          </h1>
          <p className="text-xl text-center text-green-100">
            Pemberdayaan dan Kesejahteraan Keluarga Desa Tawangharjo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === key
                    ? "bg-green-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {sections[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            {sections[activeSection].title}
          </h2>
          {sections[activeSection].content}
        </div>
      </main>
    </div>
  );
}
