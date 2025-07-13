/** biome-ignore-all lint/suspicious/noConsole: <asdsdasadasd> */

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

export default function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop();
    }
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Seu navegador não suporta gravação');
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    const recorder = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    });

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        console.log(event.data);
      }
    };

    recorder.onstart = () => {
      console.log('Gravação iniciada');
    };

    recorder.onstop = () => {
      console.log('Gravação encerrada/pausada');
    };
    recorder.start();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Audio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  );
}
