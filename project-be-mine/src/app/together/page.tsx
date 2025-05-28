'use client';
import { useEffect, useState } from 'react';

export default function TogetherPage() {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [duration, setDuration] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const storedDate = localStorage.getItem('together_start_date');
		if (storedDate) {
			setStartDate(new Date(storedDate));
		} else {
			const now = new Date();
			setStartDate(now);
			localStorage.setItem('together_start_date', now.toISOString());
		}
	}, []);

	useEffect(() => {
		if (!startDate) return;

		const interval = setInterval(() => {
			const now = new Date();
			const diff = now.getTime() - startDate.getTime();

			const days = Math.floor(diff / (1000 * 60 * 60 * 24));
			const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((diff / (1000 * 60)) % 60);
			const seconds = Math.floor((diff / 1000) % 60);

			setDuration({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, [startDate]);

	if (!startDate) {
		return <div className="text-center mt-10">Loading...</div>;
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
				<div className="absolute top-32 right-16 w-32 h-32 bg-emerald-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
				<div className="absolute bottom-20 left-20 w-36 h-36 bg-cyan-200 rounded-full opacity-12 animate-pulse delay-500"></div>
				<div className="absolute bottom-40 right-32 w-28 h-28 bg-green-200 rounded-full opacity-10 animate-pulse delay-700"></div>

				<div className="absolute top-1/4 left-1/4 text-blue-300 text-2xl animate-bounce opacity-30">💙</div>
				<div className="absolute top-1/3 right-1/4 text-emerald-300 text-3xl animate-bounce delay-500 opacity-30">💚</div>
				<div className="absolute bottom-1/3 left-1/3 text-cyan-300 text-2xl animate-bounce delay-1000 opacity-30">💎</div>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto">
				<div className="mb-8">
					<div className="text-6xl md:text-8xl mb-4 animate-pulse">💑</div>
					<h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 mb-4 leading-tight">
						We're Together!
					</h1>
					<p className="text-lg md:text-2xl text-slate-600 font-medium mb-2">
						Our love story began on
					</p>
					<p className="text-base md:text-xl text-emerald-600 font-semibold bg-white bg-opacity-70 rounded-lg px-4 py-2 inline-block shadow-sm">
						{startDate.toLocaleDateString('en-US', { 
							weekday: 'long', 
							year: 'numeric', 
							month: 'long', 
							day: 'numeric',
							hour: '2-digit',
							minute: '2-digit'
						})}
					</p>
				</div>

				<div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
					<h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8">
						Time Together ⏰
					</h2>
					
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
						{[
							{ label: 'Days', value: duration.days, color: 'from-blue-500 to-cyan-500', emoji: '📅' },
							{ label: 'Hours', value: duration.hours, color: 'from-cyan-500 to-teal-500', emoji: '⏰' },
							{ label: 'Minutes', value: duration.minutes, color: 'from-teal-500 to-emerald-500', emoji: '⏱️' },
							{ label: 'Seconds', value: duration.seconds, color: 'from-emerald-500 to-green-500', emoji: '⚡' }
						].map((item, index) => (
							<div key={item.label} className="text-center">
								<div className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-4 md:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
									<div className="text-2xl mb-2">{item.emoji}</div>
									<div className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 font-mono">
										{item.value.toString().padStart(2, '0')}
									</div>
									<div className="text-sm md:text-base font-semibold opacity-90">
										{item.label}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-2xl p-6 md:p-8 shadow-lg">
					<div className="space-y-4">
						<p className="text-lg md:text-xl text-slate-700 font-medium">
							"Every moment with you is a treasure worth counting" 💎
						</p>
						<div className="flex justify-center gap-2 text-2xl">
							<span className="animate-pulse">💙</span>
							<span className="animate-pulse delay-200">💚</span>
							<span className="animate-pulse delay-400">💛</span>
							<span className="animate-pulse delay-600">💜</span>
							<span className="animate-pulse delay-800">🤍</span>
						</div>
						<p className="text-sm md:text-base text-slate-600 opacity-80">
							Time flies when you're having fun, but with you, every second feels perfect ✨
						</p>
					</div>
				</div>

				<div className="mt-8">
					<button 
						onClick={() => window.history.back()}
						className="bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95"
					>
						← Go Back
					</button>
				</div>
			</div>
		</div>
	);
}
