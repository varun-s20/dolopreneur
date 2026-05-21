import { Calendar, CheckCircle2 } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";
import { cn } from "@/lib/cn";

const rows = [
  { name: "Michelle Rivera", time: "11:40", people: "4 people", status: "Confirmed" },
  { name: "Arlene McCoy", time: "13:00", people: "2 people", status: "Confirmed" },
  { name: "Savannah Nguyen", time: "17:30", people: "5 people", status: "Confirmed" },
  { name: "Jacob Jones", time: "19:00", people: "3 people", status: "Pending" },
  { name: "Ronald Richards", time: "20:30", people: "2 people", status: "Confirmed" },
];

export function ReservationCard({ className }: { className?: string }) {
  return (
    <MockShell
      kind="app"
      title="Today's bookings"
      subtitle="Friday · 12 confirmed"
      trailing={
        <Calendar className="h-3.5 w-3.5 text-ink/55" />
      }
      footer={
        <div className="flex items-center justify-between">
          <span>Synced with Google Calendar</span>
          <span>View all →</span>
        </div>
      }
      className={className}
    >
      <ul className="divide-y divide-line text-[13px]">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink/10 text-[10px] font-semibold text-ink/70">
                {r.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div className="leading-tight">
                <p className="font-medium text-ink">{r.name}</p>
                <p className="text-[11px] text-ink/55">{r.time} · {r.people}</p>
              </div>
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-pill px-2 py-0.5 text-[10px] font-medium",
                r.status === "Confirmed"
                  ? "bg-accent/35 text-ink"
                  : "bg-ink/8 text-ink/70",
              )}
            >
              {r.status === "Confirmed" && <CheckCircle2 className="h-2.5 w-2.5" />}
              {r.status}
            </span>
          </li>
        ))}
      </ul>
    </MockShell>
  );
}
