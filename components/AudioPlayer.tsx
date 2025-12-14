'use client';

import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { SiApplemusic, SiSpotify, SiYoutube } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

interface AudioPlayerProps {
    src: string;
    title?: string;
    showLinks?: boolean;
    spotifyUrl?: string;
    youtubeUrl?: string;
    appleMusicUrl?: string;
}

export default function AudioPlayer({
    src,
    title = '',
    showLinks = false,
    spotifyUrl = 'https://open.spotify.com/intl-es/track/3dpfkFjhgLy1YUYqsJyZca',
    youtubeUrl = 'https://www.youtube.com/watch?v=ZVOvuItRNvs',
    appleMusicUrl = 'https://music.apple.com/es/album/como-te-pido/1718941267?i=1718941268',
}: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // 0 → 1
    const [currentTime, setCurrentTime] = useState(0); // segundos reales
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onTime = () => {
            if (!audio.duration) return;
            setCurrentTime(audio.currentTime);
            setProgress(audio.currentTime / audio.duration);
        };
        const onMeta = () => setDuration(audio.duration || 0);

        audio.addEventListener('play', onPlay);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('timeupdate', onTime);
        audio.addEventListener('loadedmetadata', onMeta);

        return () => {
            audio.removeEventListener('play', onPlay);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('timeupdate', onTime);
            audio.removeEventListener('loadedmetadata', onMeta);
        };
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            audio.paused ? await audio.play() : audio.pause();
        } catch (err) {
            console.error('Error reproduciendo audio:', err);
        }
    };

    const handleSeek = ([value]: number[]) => {
        if (!audioRef.current || !duration) return;
        audioRef.current.currentTime = value * duration;
    };

    const handleVolume = ([value]: number[]) => {
        if (!audioRef.current) return;
        audioRef.current.volume = value;
        setVolume(value);
        setIsMuted(value === 0);
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.volume = isMuted ? volume || 0.5 : 0;
        setIsMuted(!isMuted);
    };

    const formatTime = (t: number) => {
        if (!t || isNaN(t)) return '0:00';
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full space-y-6 flex flex-col md:flex-row justify-between gap-4">
            <div className="rounded-lg border border-gray-200 w-full max-w-2xl shadow-sm p-6 pt-8">
                <audio ref={audioRef} src={src} preload="metadata" />

                {title && <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-600">{title}</p>}

                <div className="space-y-4">
                    {/* Progress */}
                    <div className="flex flex-col gap-2">
                        <Slider value={[progress]} max={1} step={0.001} onValueChange={handleSeek} />
                        <div className="mt-1 flex justify-between text-xs text-gray-500">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                        <Button onClick={togglePlay} className="size-10 rounded bg-orange-500 hover:bg-orange-600">
                            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
                        </Button>

                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon" onClick={toggleMute}>
                                {isMuted ? <VolumeX /> : <Volume2 />}
                            </Button>
                            <Slider value={[isMuted ? 0 : volume]} max={1} step={0.01} onValueChange={handleVolume} className="w-24" />
                        </div>
                    </div>
                </div>
            </div>

            {showLinks && (
                <div className="flex flex-col gap-3">
                    <Button variant="outline" asChild className="gap-2 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500">
                        <Link href={spotifyUrl} target="_blank">
                            <SiSpotify /> Spotify
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="gap-2 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500">
                        <Link href={youtubeUrl} target="_blank">
                            <SiYoutube /> YouTube
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="gap-2 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500">
                        <Link href={appleMusicUrl} target="_blank">
                            <SiApplemusic /> Apple Music
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
