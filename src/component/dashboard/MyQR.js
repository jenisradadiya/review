import React from "react";

const MyQR = () => {
  const handleDownload = () => {
    // Simulate QR download
    const link = document.createElement("a");
    link.href = "/path-to-your-qr-image.jpg"; // Replace with the actual image path
    link.download = "MyQR.png";
    link.click();
  };

  return (
    <div className="min-h-screen lg:-mt-9 flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My QR</h2>

        {/* QR Image */}
        <div
          className="mx-auto mb-6 border border-gray-300 bg-gray-50"
          style={{
            width: "3in",
            height: "4in",
            maxWidth: "100%",
          }}
        >
          <img
            src="/path-to-your-qr-image.jpg" // Replace with the actual QR image path
            alt="QR Code"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Download My QR
        </button>
      </div>
    </div>
  );
};

export default MyQR;
