import  { useRef, useState } from 'react';

function WebcamApp() {
  const videoRef = useRef(null); // Reference for the video element
  const [isStreaming, setIsStreaming] = useState(false); // State to track streaming status

  const startWebcam = async () => {
    try {
      // Request access to the user's webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream; // Assign the stream to the video element
        videoRef.current.play(); // Start playing the video
        setIsStreaming(true); // Set streaming state to true
      }
    } catch (error) {
      console.error('Error accessing the webcam:', error);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      // Stop all tracks in the media stream
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null; // Remove the video source
      setIsStreaming(false); // Set streaming state to false
    }
  };

  return (
    <>
        <div style={{ textAlign: 'center',color:'black' }}>

        <h1>Webcam App</h1>
        <video ref={videoRef} style={{ width: '80%', maxWidth: '600px', marginBottom: '20px' }} />
        <div>
            {!isStreaming ? (
            <button onClick={startWebcam} style={{ padding: '10px 20px', margin: '10px' }}>
                Start Webcam
            </button>
            ) : (
            <button onClick={stopWebcam} style={{ padding: '10px 20px', margin: '10px' }}>
                Stop Webcam
            </button>
            )}
        </div>
        </div>
    </>
  );
}

export default WebcamApp;
