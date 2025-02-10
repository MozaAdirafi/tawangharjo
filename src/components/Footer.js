import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
  LinkIcon,
  Youtube,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Desa Tawangharjo</h3>
            <p className="text-gray-400">
              Dusun Pangkah RT.001/RW.001
              <br />
              Kecamatan Giriwoyo, Kabupaten Wonogiri
              <br />
              Provinsi Jawa Tengah
              <br />
              Kode Pos 57673
            </p>
          </div>

{/* Contact Section */}
<div>
  <h3 className="text-xl font-semibold mb-4 text-white">Tautan</h3>
  <div className="text-gray-400 space-y-3">
    <div className="flex items-center">
      <LinkIcon className="h-4 w-4 mr-2 text-blue-400" />
      <a 
        href="/news" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline"
      >
        Berita Baru
      </a>
    </div>
    <div className="flex items-center">
      <LinkIcon className="h-4 w-4 mr-2 text-blue-400" />
      <a 
        href="https://kec.giriwoyo.wonogirikab.go.id/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline"
      >
        Kecamatan Giriwoyo
      </a>
    </div>
    <div className="flex items-center">
      <LinkIcon className="h-4 w-4 mr-2 text-blue-400" />
      <a 
        href="https://wonogirikab.go.id/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline"
      >
        Kabupaten Wonogiri
      </a>
    </div>
  </div>
</div>


          {/* Maps Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Lokasi Kami</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7902.007756684284!2d110.89541002105656!3d-7.998535099023244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bcd55686286b5%3A0xeec4a8320a8b560!2sKantor%20Desa%20Tawangharjo!5e0!3m2!1sen!2sus!4v1739118551294!5m2!1sen!2sus"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Desa Tawangharjo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/people/Tawangharjo-Desaku/61558780605717/?mibextid=qi2Omg&rdid=SMxo88WKLBHKOcDL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F2wCL7DG6pZGLxUAw%2F%3Fmibextid%3Dqi2Omg"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/desatawangharjo?igsh=MWlnMHlhajFycm93eA%3D%3D"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@tawangharjodesaku5174"
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://web.whatsapp.com/send?phone=+6282136706087"
                className="text-gray-400 hover:text-white"
              >
                <PhoneCall className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
