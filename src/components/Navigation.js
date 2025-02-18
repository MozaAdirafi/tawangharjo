"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, LogIn, LogOut, User } from "lucide-react";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const menuItems = [
    { title: "Beranda", link: "/" },
    { title: "Berita Terbaru", link: "/news" },
    {
      title: "Profil Desa",
      items: [
        { title: "Tentang Kami", link: "/profil/tentang-kami" },
        { title: "Sejarah", link: "/profil/sejarah" },
        { title: "Infografis Desa", link: "/profil/infografis-desa" },
        { title: "Visi Misi", link: "/profil/visi-misi" },
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
        { title: "SKDWNI", link: "/pelayanan/skdwni" },
        { title: "SKPWNI", link: "/pelayanan/skpwni" },
        { title: "Saran & Pengaduan", link: "/pelayanan/saranpengaduan" },
      ],
    },
    {
      title: "Pemerintahan",
      items: [
        { title: "Struktur Organisasi", link: "/pemerintahan/struktur-organisasi" },
      ],
    },
    { title: "BPD", link: "/BPD" },
    { title: "RT/RW", link: "/RT-RW" },
    { title: "LPMD", link: "/lpmd" },
    { title: "TP PKK", link: "/tp-pkk" },
  ];

  // Handle Login Navigation
  const handleLogin = () => {
    router.push("/admin/login");
  };

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    setIsMobileMenuOpen(false);
    router.push("/");
  };

  return (
    <nav className="bg-green-700 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-4">
            <img
              src="/Logo_tawangharjo.png"
              alt="Logo Desa"
              className="h-10 w-auto"
            />
            <span className="font-semibold text-white">DESA TAWANGHARJO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
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
                    {activeDropdown === index && (
                      <div className="absolute left-0 top-full w-48 bg-white border rounded-md shadow-lg z-50">
                        <div className="absolute w-full h-2 -top-2"></div>
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition-colors duration-150"
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
                    className="px-3 py-2 text-white hover:text-green-200 transition-colors duration-150"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Admin Navigation - Only for logged-in users */}
            {user && (
              <Link
                href="/admin/news"
                className="px-3 py-2 text-white hover:text-green-200 transition-colors duration-150"
              >
                Kelola Berita
              </Link>
            )}

            {/* Login/Logout Button */}
            {user ? (
              <div className="flex items-center space-x-2 ml-4">
                <User className="h-5 w-5" />
                <span className="text-sm">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="ml-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center"
              >
                <LogIn className="h-4 w-4 mr-2" /> Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-green-600 transition-colors duration-150"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-green-700 z-50 border-t border-green-600">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.items ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === index ? null : index)
                      }
                      className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-green-600 rounded-md transition-colors duration-150"
                    >
                      {item.title}
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <div className="bg-green-600 rounded-md mt-1 mb-2">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="block px-8 py-2 text-sm hover:bg-green-500 transition-colors duration-150"
                            onClick={() => setIsMobileMenuOpen(false)}
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
                    className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile - Admin Navigation */}
            {user && (
              <Link
                href="/admin/news"
                className="block px-4 py-2 hover:bg-green-600 rounded-md transition-colors duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kelola Berita
              </Link>
            )}

            {/* Mobile - Login/Logout */}
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md flex items-center justify-center"
              >
                <LogOut className="h-4 w-4 mr-2" /> Logout ({user.email})
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center justify-center"
              >
                <LogIn className="h-4 w-4 mr-2" /> Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
