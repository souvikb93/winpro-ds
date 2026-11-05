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
