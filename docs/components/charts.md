# Charts

Generated from source. Do not edit.

## BarChart

Compare values across categories. Colours come from chart/1 to chart/6.

Figma: Charts/Bar Chart

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `data` (required) | ChartDatum[] |  | One bar per item. |
| `label` (required) | string |  | Accessible summary of what the chart shows. |
| `legend` | boolean \| undefined |  | Show the legend. |

## LineChart

A trend over time.

Figma: Charts/Line Chart

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `data` (required) | ChartDatum[] |  | Points in order. |
| `label` (required) | string |  | Accessible summary. |

## DonutChart

Parts of a whole, 2 to 6 segments.

Figma: Charts/Donut Chart

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `data` (required) | ChartDatum[] |  | Segments, up to 6. |
| `label` (required) | string |  | Accessible summary. |
| `center` | string \| undefined |  | Text in the middle. |
| `legend` | boolean \| undefined | true | Show the legend. |

## Gauge

One score against a full range, drawn as a half circle.

Figma: Charts/Gauge

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `value` (required) | number |  | 0 to 100. |
| `label` (required) | string |  | Label and accessible name. |

## ProgressList

Labelled progress bars in a list.

Figma: Charts/Progress List

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `items` (required) | ChartDatum[] |  | Rows, with value 0 to 100. |

## BreakdownBar

One stacked bar plus rows of name, count and share. Use it for compact breakdowns in a side panel.

Figma: Breakdown Bar

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | Accessible name of the whole breakdown, such as "Top-Aktivitäten". |
| `items` (required) | BreakdownDatum[] |  | Parts of the whole, largest first. Values are counts; the share is worked out. |

## Stat

One KPI: label, value and change.

Figma: Charts/Stat

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `label` (required) | string |  | What is measured. |
| `value` (required) | string |  | The number, formatted. |
| `delta` | string \| undefined |  | Change, formatted, such as "+4.2%". |
| `trend` | "up" \| "down" \| "none" \| undefined | none | Direction of the change. It is shown with an arrow, not colour alone. |

## DataCard

Card for any chart, with an optional row of Stat.

Figma: Data Card/Chart

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `title` (required) | string |  | Card title. |
| `description` | string \| undefined |  | Line under the title. |
| `headerAction` | ReactNode |  | Top-right control: Menu or SegmentedControl. |
| `stats` | ReactNode |  | Row of Stat. |
| `children` (required) | ReactNode |  | The chart. |

## AvailabilityTimeline

Shared availability, as in a scheduling assistant: one row per person on one time axis, plus an "all participants" row.
Free time for everyone is a green fill, the planned time in conflict a red fill, the chosen slot a green frame.
Fills sit behind calendar entries and grid lines, so nothing under them is hidden. Entries show no titles.

Figma: Availability Timeline

```tsx
<AvailabilityTimeline title="Mittwoch, 11. November 2026" columns={[{ id: '2026-11-11', label: 'Mi 11.' }]} rows={rows} free={free} selection={{ column: '2026-11-11', start: 660, end: 690, valid: true }} onPick={pick} onPrevious={prev} onNext={next} />
```

| Prop | Type | Default | Meaning |
|---|---|---|---|
| `columns` (required) | { id: string; label: string; }[] |  | One column is a day view; several (such as Mon to Fri) a week view. |
| `rows` (required) | AvailabilityRow[] |  |  |
| `free` (required) | AvailabilityRange[] |  | Time when every row is free. Drawn as a light green fill across all rows. |
| `selection` | (AvailabilityRange & { valid: boolean; }) \| undefined |  | The chosen slot. `valid: false` (someone is busy) draws it red; otherwise a deep green frame with a check. |
| `planned` | AvailabilityRange \| null \| undefined |  | The originally planned time after the selection moved away from it, drawn as a red fill. |
| `onPick` | ((column: string, start: number) => void) \| undefined |  | Called with the column and the start of the clicked step. |
| `title` (required) | string |  | Header: the date or week, with arrows. |
| `onPrevious` (required) | () => void |  |  |
| `onNext` (required) | () => void |  |  |
| `view` | { value: string; options: SegmentOption[]; onChange: (v: string) => void; label: string; } \| undefined |  | Optional view switch on the right, such as Tag and Woche. |
| `hours` | { start: number; end: number; } \| undefined | { start: 480, end: 1080 } | Visible hours in minutes. Defaults to 08:00 to 18:00. |
| `workHours` | { start: number; end: number; } \| undefined | { start: 510, end: 1050 } | Working hours in minutes; outside them is hatched. Defaults to 08:30 to 17:30. |
| `step` | number \| undefined | 30 | Click snapping in minutes. Defaults to 30. |
| `labels` | AvailabilityTimelineLabels \| undefined |  | Names of the built-in parts, in the page's language. |
| `legend` | ("selected" \| "conflict" \| "free" \| "busy" \| "tentative")[] \| undefined | ['selected', 'conflict', 'free', 'busy', 'tentative'] | Fixed legend entries, in order. Defaults to all five. Leave out what explains itself, such as `selected` while planning. |
