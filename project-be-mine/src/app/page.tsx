'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();
	const [isAnimating, setIsAnimating] = useState(false);

	const handleAccept = () => {
		setIsAnimating(true);
		setTimeout(() => {
			router.push('/together');
		}, 1000);
	};

	const handleReject = () => {
		const button = document.querySelector('.reject-btn');
		button?.classList.add('animate-bounce');
		setTimeout(() => {
			button?.classList.remove('animate-bounce');
		}, 1000);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
				<div className="absolute top-40 right-32 w-24 h-24 bg-emerald-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
				<div className="absolute bottom-32 left-32 w-28 h-28 bg-cyan-200 rounded-full opacity-25 animate-pulse delay-500"></div>
				<div className="absolute bottom-20 right-20 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>
			</div>

			<div className="relative z-10 max-w-2xl mx-auto">
				<div className="mb-8 animate-bounce">
					<div className="text-8xl md:text-9xl">💙</div>
				</div>
				<h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 mb-6 leading-tight">
					Will you be my girlfriend?
				</h1>
				<p className="text-lg md:text-xl text-slate-600 mb-12 font-medium opacity-80">
					This moment could be the start of something beautiful ✨
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<button
						onClick={handleAccept}
						disabled={isAnimating}
						className={`group relative bg-gradient-to-r from-emerald-400 to-cyan-500 hover:from-emerald-500 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 active:scale-95 ${
							isAnimating ? 'animate-pulse scale-105' : ''
						}`}
					>
						<span className="flex items-center gap-2 text-lg">
							{isAnimating ? '💕 Creating magic...' : '💚 Yes, absolutely!'}
						</span>
						<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
					</button>

					<button
						onClick={handleReject}
						className="reject-btn group bg-gradient-to-r from-slate-300 to-slate-400 hover:from-slate-400 hover:to-slate-500 text-slate-700 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95"
					>
						<span className="flex items-center gap-2 text-lg">
							💭 Let me think...
						</span>
					</button>
				</div>

				<div className="mt-16 space-y-2">
					<div className="flex justify-center gap-4 text-2xl opacity-60">
						<span className="animate-pulse">💙</span>
						<span className="animate-pulse delay-200">💚</span>
						<span className="animate-pulse delay-400">💛</span>
						<span className="animate-pulse delay-600">💜</span>
					</div>
					<p className="text-sm text-slate-500 opacity-60 font-medium tracking-wide">
						Every love story is beautiful, but ours could be my favorite
					</p>
				</div>
			</div>
		</div>
	);
}
