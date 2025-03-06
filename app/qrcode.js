'use client';
import { useState,useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
export default function QRCodePage(){
   const qrRef = useRef(null);
    const [text,setText] = useState("https://www.example.com");
    const downloadQRCode = () => { 
    if(qrRef.current){
        const canvas = qrRef.current.querySelector('canvas');
        if(canvas){
            const url= canvas.toDataURL('image/png');
            const a=document.createElement('a');
            a.href=url;
            a.download='qrcode.png';
            a.click();
        }else{
            console.error('Canvas not found');
        }
    }
}

    return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
       
        <input type='text'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Enter URL or Text"
        className="p-2 border rounded w-full max-w-md mb-4" />
        <div ref={qrRef}>
        <QRCodeCanvas value={text} size={150}  bgColor="#3B82F6"  
  fgColor="#ffffff"  style={{ padding: "10px", borderRadius: "8px" }} />

        </div>
        
        <button
        onClick={downloadQRCode} className="mt-4 p-2 bg-blue-500 text-white rounded">
            Download QR Code
        </button>
    </div>
)

}