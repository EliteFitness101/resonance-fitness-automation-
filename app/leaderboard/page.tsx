export default function Leaderboard() {
  const data = [
    { name: "Coach Buchi", role: "CEO", recruits: 315 },
    { name: "Coach Candy", role: "CRO", recruits: 142 },
    { name: "Prof. Mrs Kate Mbah", role: "Executive", recruits: 89 }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] p-10 font-sans">
      <h1 className="text-[#FFD700] text-5xl font-black uppercase mb-12 text-center">Fleet Leaderboard</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((user, i) => (
          <div key={i} className="flex justify-between items-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
            <div>
              <p className="text-[#FFD700] font-bold text-lg">{user.name}</p>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">{user.role}</p>
            </div>
            <p className="text-3xl font-black">{user.recruits}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
