import { MessageSquare, Instagram, Phone, Search, Inbox } from "lucide-react";
import { MockShell } from "@/components/product-mocks/MockShell";

type Row = {
  initials: string;
  name: string;
  channel: "wa" | "ig" | "sms";
  preview: string;
  time: string;
  unread?: boolean;
};

const rows: Row[] = [
  { initials: "MR", name: "Michelle Rivera", channel: "wa", preview: "Booked. Sat 3pm · 412 Linden Ave.", time: "Now", unread: true },
  { initials: "AM", name: "Arlene McCoy", channel: "ig", preview: "Yes that pricing works. Send the link?", time: "2m", unread: true },
  { initials: "SN", name: "Savannah Nguyen", channel: "sms", preview: "Will the agent call me back today?", time: "11m" },
  { initials: "JJ", name: "Jacob Jones", channel: "wa", preview: "Could I reschedule to next Tuesday?", time: "34m" },
  { initials: "RR", name: "Ronald Richards", channel: "ig", preview: "Thanks for the catalogue.", time: "1h" },
  { initials: "EC", name: "Emily Chen", channel: "wa", preview: "Sounds great, please send invoice.", time: "2h" },
];

const channelIcon = {
  wa: <MessageSquare className="h-3 w-3" />,
  ig: <Instagram className="h-3 w-3" />,
  sms: <Phone className="h-3 w-3" />,
};

const channelLabel = { wa: "WhatsApp", ig: "Instagram", sms: "SMS" };

export function InboxList({ className }: { className?: string }) {
  return (
    <MockShell
      kind="app"
      title="Inbox"
      subtitle="All channels · 47 new"
      trailing={
        <span className="inline-flex items-center gap-1 rounded-pill bg-accent/40 px-2 py-0.5 text-[10px] font-semibold text-ink">
          <Inbox className="h-3 w-3" /> Live
        </span>
      }
      footer={
        <div className="flex items-center justify-between">
          <span>Synced just now</span>
          <span>Avg first-response · 3.4s</span>
        </div>
      }
      className={className}
    >
      <div className="flex flex-col text-[13px]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <Search className="h-3.5 w-3.5 text-ink/45" />
          <span className="text-[12px] text-ink/45">Search conversations</span>
        </div>
        <ul className="divide-y divide-line">
          {rows.map((r) => (
            <li key={r.name} className="flex items-center gap-3 px-4 py-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-ink/10 text-[10px] font-semibold text-ink/70">
                {r.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-medium text-ink">{r.name}</p>
                  <span className="inline-flex items-center gap-1 rounded-pill bg-ink/5 px-1.5 py-[1px] text-[9px] font-medium text-ink/65">
                    {channelIcon[r.channel]} {channelLabel[r.channel]}
                  </span>
                </div>
                <p className="truncate text-[12px] text-ink/55">{r.preview}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[10px] text-ink/45">{r.time}</span>
                {r.unread && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MockShell>
  );
}
