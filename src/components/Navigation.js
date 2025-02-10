"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { title: "Beranda", link: "/" },
    { title: "Berita Terbaru", link: "/news" },

    {
      title: "Profil Desa",
      items: [
        { title: "Tentang Kami", link: "/profil/tentang-kami" },
        { title: "Sejarah", link: "/profil/sejarah" },
        { title: "Demografi dan Geografi", link: "/profil/demografi-geografi" },
        { title: "Visi Misi", link: "/profil/visi-misi" },
        { title: "Struktur Organisasi", link: "/profil/struktur" },
        { title: "Perangkat Desa", link: "/profil/perangkat" },
      ],
    },
    {
      title: "Pelayanan",
      items: [
        { title: "Kartu Keluarga", link: "/pelayanan/kartukeluarga" },
        { title: "E-KTP", link: "/pelayanan/e-ktp" },
        { title: "KIA", link: "/pelayanan/kia" },
        { title: "Akte Kelahiran", link: "/pelayanan/aktekelahiran" },
        { title: "Akte Kematian", link: "/pelayanan/aktekematian" },
        { title: "Akte Perceraian", link: "/pelayanan/akteperceraian" },
        { title: "Akte Kematian", link: "/pelayanan/aktekematian" },
        { title: "SKDWNI", link: "/pelayanan/skdwni" },
        { title: "SKPWNI", link: "/pelayanan/skpwni" },
        { title: "Saran & Pengaduan", link: "/pelayanan/saranpengaduan" },
      ],
    },
    {
      title: "Pemerintahan",
      items: [
        { title: "Program Kerja", link: "/pemerintahan/program" },
        { title: "Peraturan Desa", link: "/pemerintahan/peraturan" },
        { title: "Transparansi", link: "/pemerintahan/transparansi" },
      ],
    },
    {
      title: "Informasi Publik",
      items: [
        { title: "Pengumuman", link: "/informasi/pengumuman" },
        { title: "Kegiatan", link: "/informasi/kegiatan" },
        { title: "Galeri", link: "/informasi/galeri" },
      ],
    },
    { title: "TP PKK", link: "/tp-pkk" },
    { title: "Posyandu", link: "/posyandu" },
  ];

  const handleMenuClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <nav className="bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-4">
            <img
              src="Logo_tawangharjo.png"
              alt="Logo Desa"
              className="h-10 w-auto" // Set height and maintain aspect ratio
            />
            <span className="font-semibold text-white">DESA TAWANGHARJO</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <div className="relative group">
                    <button className="px-3 py-2 text-white hover:text-green-200 flex items-center">
                      {item.title}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>

                    {/* Invisible bridge to prevent menu from closing */}
                    <div className="absolute w-full h-2 -bottom-2"></div>

                    {activeDropdown === index && (
                      <div className="absolute left-0 top-full w-48 bg-white border rounded-md shadow-lg z-50">
                        {/* Add a small invisible extension at the top to make it easier to reach */}
                        <div className="absolute w-full h-2 -top-2"></div>
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="px-3 py-2 text-white hover:text-green-200 flex items-center"
                  >
                    {item.title}
                  </Link>
                )}

                {item.items && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navigation;
