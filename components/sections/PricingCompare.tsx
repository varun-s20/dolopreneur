import { Check, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { compareGroups, type CompareCell } from "@/content/pricing";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

function renderCell(value: CompareCell, featured?: boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={cn("h-4 w-4", featured ? "text-accent" : "text-ink")} aria-label="Included" />
    ) : (
      <Minus className="h-4 w-4 text-ink/25" aria-label="Not included" />
    );
  }
  return (
    <span className={cn("text-[13.5px]", featured ? "font-medium text-bg" : "text-ink/75")}>
      {value}
    </span>
  );
}

export function PricingCompare() {
  return (
    <section className="bg-bg">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <Reveal><SectionLabel>Compare</SectionLabel></Reveal>
          <Reveal as="h2" delay={0.05} className="max-w-[22ch] text-[36px] leading-[1.05] md:text-[48px]">
            What&apos;s in each plan, line by line.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-tile bg-card hairline md:mt-16">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-2/5 px-6 py-5 text-sm font-semibold text-ink">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-sm font-semibold text-ink/65">
                    Starter
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-sm font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                      <span className="text-ink">Operator</span>
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-sm font-semibold text-ink/65">
                    Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareGroups.map((group, gi) => (
                  <GroupRows key={group.group} group={group} groupIndex={gi} />
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GroupRows({
  group,
  groupIndex,
}: {
  group: (typeof compareGroups)[number];
  groupIndex: number;
}) {
  return (
    <>
      <tr className={cn(groupIndex > 0 && "border-t border-line")}>
        <td colSpan={4} className="bg-bg/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
          {group.group}
        </td>
      </tr>
      {group.rows.map((row, ri) => (
        <tr
          key={row.feature}
          className={cn(
            ri > 0 && "border-t border-line/60",
          )}
        >
          <th scope="row" className="px-6 py-3.5 text-left text-[14px] font-normal text-ink/85">
            {row.feature}
          </th>
          <td className="px-4 py-3.5 text-center">
            <span className="inline-flex">{renderCell(row.starter)}</span>
          </td>
          <td className="px-4 py-3.5 text-center">
            <span className="inline-flex">{renderCell(row.operator)}</span>
          </td>
          <td className="px-4 py-3.5 text-center">
            <span className="inline-flex">{renderCell(row.agency)}</span>
          </td>
        </tr>
      ))}
    </>
  );
}
