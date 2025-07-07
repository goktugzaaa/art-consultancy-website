import styles from "@styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent text-black w-[95%] mx-auto border-t-2 border-black relative">
      <div className="flex flex-col sm:flex-row justify-between items-center px-10 sm:px-16 w-full mt-[-10px]">
        
        {/* Bize Ulaşın */}
        <div>
          <nav>
            <Link
              href="/contact"
              className="text-lg sm:text-2xl font-semibold hover:text-gray-600 transition"
            >
              Bize Ulaşın
            </Link>
          </nav>
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="flex flex-wrap justify-center sm:justify-start space-x-6 sm:space-x-12">
          <a
            href="https://www.instagram.com/szartservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-xl hover:text-[rgb(24,195,24)] transition"
          >
            Instagram
          </a>
          <a
            href="https://x.com/szartservices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-xl hover:text-[rgb(24,195,24)] transition"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/szartservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-xl hover:text-[rgb(24,195,24)] transition"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Sağ tarafına %50 uzunluğunda bir border eklemek için */}
      <div className="absolute top-0 right-0 h-[50%] sm:h-[60%] w-[2px] bg-black"></div>
    </footer>
  );
}

  
  
  
  