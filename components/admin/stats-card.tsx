export default function StatsCard({
  all,
  approved,
  pending,
  rejected,
}: {
  all: number;
  approved: number;
  rejected: number;
  pending: number;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Now, adding the stats that we need to map through the card */}
      <div
        className="hover:shadow-2xl rounded-2xl bg-pink-200/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/45 font-bold text-center
    sm:text-left"
      >
        <p className="md:text-sm sm:text-lgtext-foreground mb-1">Total</p>
        <p className="text-xl">{all}</p>
      </div>
      <div
        className="hover:shadow-2xl rounded-2xl bg-gray-500/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/50 font-bold text-center
    sm:text-left"
      >
        <p className="md:text-sm sm:text-lg text-foreground mb-1">Pending</p>
        <p className="text-xl">{pending}</p>
      </div>
      <div
        className="hover:shadow-2xl rounded-2xl bg-green-300/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/40 font-bold text-center
    sm:text-left"
      >
        <p className="md:text-sm sm:text-lg text-foreground mb-1">Approved</p>
        <p className="text-xl">{approved}</p>
      </div>
      <div
        className="hover:shadow-2xl rounded-2xl bg-red-600/40 backdrop-blur-md px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-zinc-700/50 font-bold text-center
    sm:text-left"
      >
        <p className="md:text-sm sm:text-lg text-foreground mb-1">Rejected</p>
        <p className="text-xl">{rejected}</p>
      </div>
    </div>
  );
}
