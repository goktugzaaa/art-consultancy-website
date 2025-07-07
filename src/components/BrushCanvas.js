"use client"; // Eğer Next.js App Router kullanıyorsan gerekli

import { useEffect, useRef, useState } from "react";

export default function BrushCanvas() {
  const canvasRef = useRef(null);
  const [brushLoaded, setBrushLoaded] = useState(false);
  const brushImage = new Image();
  
  brushImage.src = "/brush.png"; // Public klasöründeki fırça resmi
  brushImage.onload = () => setBrushLoaded(true);
  brushImage.onerror = () => console.error("Fırça resmi yüklenemedi!");

  useEffect(() => {
    if (!brushLoaded) return; // Eğer resim yüklenmediyse çalıştırma

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lastX = Math.random() * canvas.width;
    let lastY = Math.random() * canvas.height;

    const drawRandomBrushStroke = () => {
      const size = Math.random() * 50 + 30; // Fırça boyutu değişkenliği
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      ctx.globalAlpha = Math.random() * 0.5 + 0.5; // Hafif saydamlık efekti
      ctx.drawImage(brushImage, x, y, size, size);
      
      lastX = x;
      lastY = y;

      setTimeout(drawRandomBrushStroke, 0.001); // 500ms'de bir yeni fırça izi bırak
    };

    drawRandomBrushStroke(); // Başlat

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas'ı temizle
    };
  }, [brushLoaded]);

  return (
    <canvas
      ref={canvasRef}
      className="brush-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Kullanıcının etkileşimini engelle
        zIndex: -1, // Arkada kalmasını sağla
      }}
    />
  );
}
