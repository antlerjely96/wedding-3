'use client';
import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <audio ref={audioRef} src="/music/wedding-song.mp3" loop />
            <button onClick={togglePlay} className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-white transition-all ${isPlaying ? 'bg-wedding-primary animate-[spin_3s_linear_infinite]' : 'bg-gray-400'}`}>
                {isPlaying ? <Music size={20} className="text-white" /> : <Pause size={20} className="text-white" />}
            </button>
        </div>
    );
}