import QRCodePage from "./qrcode";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen  p-8 sm:p-20">
     
      <div className="flex flex-col items-center justify-center bg-blue-200 rounded-2xl shadow-lg border border-gray-300 w-[800px] h-[500px]">
       
        <h1 className="text-xl font-bold mb-6 text-center">Generate QR Code</h1>

       
        <main className="flex flex-col items-center justify-center w-[300px] h-[400px] p-6 bg-gray-100 rounded-lg shadow-md">
          
          <QRCodePage />
        </main>

      </div>
    </div>
  );
}

