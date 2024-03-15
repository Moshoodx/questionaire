import { nanoid } from "nanoid";

export const QUESTIONS = [
  {
    key: nanoid(),
    scenario: `You want to show how temperature changes throughout the year`,
    question: `Which visualization is best?`,
    score: 2,
    options: [
      {
        description: `A pie chart divided into four slices labeled "Spring, Summer, Fall, Winter"`,
        label: 'A',
        feedback: `Pie charts compare parts of a whole, not trends over time`,
        grade: 0,
        display: `/img/pie-chart.png`,
        displayType: 'img',
      },
      {
        description: `A line graph with dips and peaks, with months along the x-axis`,
        label: 'B',
        feedback: `Great choice! Line graphs clearly show how values change over time`,
        grade: 2,
        display: `/img/line-graph.png`,
        displayType: 'img',
      },
      {
        description: `A scatter plot with scattered dots forming no clear pattern`,
        label: 'C',
        feedback: `Scatter plots show relationships between variables, not how a single variable changes over time`,
        grade: 0,
        display: `/img/scatter-plot.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    scenario: `You're presenting survey results on customer satisfaction, categorized as "Highly Satisfied", "Somewhat Satisfied", and "Not Satisfied"`,
    question: `Which chart type is best for comparing these categories?`,
    score: 2,
    options: [
      {
        description: `Pie Chart`,
        label: 'A',
        feedback: `Pie charts can be hard to compare when slices are similar in size`,
        grade: 0,
        display: `/img/pie-chart.png`,
        displayType: 'img',
      },
      {
        description: `Bar Chart`,
        label: 'B',
        feedback: `Excellent choice! Bar charts clearly visualize comparisons between categories`,
        grade: 2,
        display: `/img/bar-chart.png`,
        displayType: 'img',
      },
      {
        description: `Line Graph`,
        label: 'C',
        feedback: `Line graphs are best for showing trends over time, not comparing distinct groups`,
        grade: 0,
        display: `/img/line-graph.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    scenario: `You've created a chart showing strong growth in website traffic over the past year`,
    question: `What else does this visualization NEED to tell a complete story?`,
    score: 2,
    options: [
      {
        description: `A chart title emphasizing the growth`,
        label: 'A',
        feedback: `Important, a descriptive title is key for understanding`,
        grade: 2,
        display: `/img/growth-chart-empahsis.png`,
        displayType: 'img',
      },
      {
        description: `Labels indicating the specific months`,
        label: 'B',
        feedback: `Essential! Context like the dates lets viewers understand the timeframe of change`,
        grade: 0,
        display: `/img/labels-months-timeframe.png`,
        displayType: 'img',
      },
      {
        description: `A decorative background image`,
        label: 'C',
        feedback: `Decorations should be used with caution, they shouldn't distract from the data`,
        grade: 0,
        display: `/img/decorative-background.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    scenario: `A political campaign uses a chart showing a massive spike in unemployment during a rival's term in office`,
    question: `What should you look for to check if this chart is potentially misleading?`,
    score: 2,
    options: [
      {
        description: `Does the y-axis start from zero?`,
        label: 'A',
        feedback: `Yes! Truncated axes can exaggerate differences, potentially misrepresenting the change`,
        grade: 1,
        display: undefined,
        displayType: 'button',
      },
      {
        description: `Are the data sources credible?`,
        label: 'B',
        feedback: `Absolutely! Data sources and their potential biases are always important to consider`,
        grade: 1,
        display: undefined,
        displayType: 'button',
      },
      {
        description: `Both A and B`,
        label: 'C',
        feedback: `You're right! Both axis manipulation and data source quality are potential red flags for ethical presentation`,
        grade: 2,
        display: undefined,
        displayType: 'button'
      },
    ]
  },
]