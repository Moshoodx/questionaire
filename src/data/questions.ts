import { nanoid } from "nanoid";

export const QUESTIONS = [
  {
    key: nanoid(),
    question: `Which is best for illustrating time series data?`,
    score: 1,
    options: [
      {
        description: `A pie chart divided into four slices labeled "Spring, Summer, Fall, Winter"`,
        label: 'A',
        feedback: `Using pie charts for time series data, line charts for categorical comparisons, etc.`,
        grade: 0,
        display: `/img/quiz/image45.png`,
        displayType: 'img',
      },
      {
        description: `A line graph with dips and peaks, with months along the x-axis`,
        label: 'B',
        feedback: `You’re right… Bar charts are excellent for categorical comparison.`,
        grade: 1,
        display: `/img/quiz/image42.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which is more effective?`,
    score: 1,
    options: [
      {
        description: `Pie Chart`,
        label: 'A',
        feedback: `The chart Prioritized design and visual aesthetics over clarity, clarity is very important.`, 
        grade: 0,
        display: `/img/quiz/image1.png`,
        displayType: 'img',
      },
      {
        description: `Bar Chart`,
        label: 'B',
        feedback: `Eventhough this is not a chart, it more effective because you can read the content.`,
        grade: 1,
        display: `/img/quiz/image16.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which of the below visual is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `You’re right, the above is focus on the key value.`,
        grade: 1,
        display: `/img/quiz/image11.png`,
        displayType: 'img',
      },
      {
        label: 'B', 
        feedback: `LACK OF FOCUS Showing too many series or values, with no clear pattern or purpose.`,
        grade: 0,
        display: `/img/quiz/image12.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `NOISE & DISTRACTIONS Using unnecessary effects like 3D formats or background images.`,
        grade: 0,
        display: `/img/quiz/image29.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `You’re right, the Donut is more effective that the 3D formats as the 3D can be distracting.`,
        grade: 1,
        display: `/img/quiz/image6.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `MISSING CONTEXT Failing to include series names, data labels, axis titles, etc.`,
        grade: 0,
        display: `/img/quiz/image10.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `You’re right, the labeling give the chart more context, making the user to understand.`,
        grade: 1,
        display: `/img/quiz/image15.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `MISLEADING NARRATIVE Exaggerating trends to make them appear more significant. The Axis starting from 40%.`,
        grade: 0,
        display: `/img/quiz/image3.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `You’re right, the best practice is to start the axis from 0%.`,
        grade: 1,
        display: `/img/quiz/image33.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which is best to visualize change over time?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Bar charts are more effective at showing change over time than pie charts. Because it’s easier to compare value differences based on bar length.`,
        grade: 1,
        display: `/img/quiz/image43.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Don’t use multiple pie charts to show changes over time. It’s difficult to compare the difference in size across each slice of the pie.`,
        grade: 0,
        display: `/img/quiz/image14.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `For the below, which chart is more legible?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Don’t use overlapped area charts as it obscures data values and reduces readability.`,
        grade: 0,
        display: `/img/quiz/image48.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Use a stacked area chart to represent multiple time series and maintain a good level of legibility.`,
        grade: 1,
        display: `/img/quiz/image8.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which of the below charts is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `The bars in this chart have subtle rounded corners, ensuring that the top of the bar precisely measures the bar’s length.`,
        grade: 1,
        display: `/img/quiz/image21.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Don’t use shapes that make it hard to read a chart, such as bars with imprecise top edges.`,
        grade: 0,
        display: `/img/quiz/image26.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Many colors in a single chart can hinder focus.`,
        grade: 0,
        display: `/img/quiz/image25.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Use a combination of color highlights and neutral colors to provide contrast and emphasis.`,
        grade: 1,
        display: `/img/quiz/image20.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Reinforce the meaning of chart colors with other visual cues, like icons.`,
        grade: 1,
        display: `/img/quiz/image18.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Don’t use color alone to indicate meaning.`,
        grade: 0,
        display: `/img/quiz/image17.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Vary a line’s texture to represent different data types.`,
        grade: 1,
        display: `/img/quiz/image40.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Don't use different colors to show periodical variation for the same data category.`,
        grade: 0,
        display: `/img/quiz/image44.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Bold used on too many elements can make it harder to identify important elements.`,
        grade: 0,
        display: `/img/quiz/image39.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Bold used just for one or two key elements creates a balanced design.`,
        grade: 1,
        display: `/img/quiz/image34.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Avoid using solely icons and symbols to represent important information.`,
        grade: 0,
        display: `/img/quiz/image35.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Use labels along with icons to clearly represent key information.`,
        grade: 1,
        display: `/img/quiz/image41.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `A bar chart starting at the zero baseline.`,
        grade: 1,
        display: `/img/quiz/image49.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Don’t start the baseline at values other than zero. This baseline starts at 20%, making the bar differences look more dramatic.`,
        grade: 0,
        display: `/img/quiz/image2.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Don’t overload the chart with numerous axis labels.`,
        grade: 0,
        display: `/img/quiz/image4.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Support legibility by using a balanced number of axis labels.`,
        grade: 1,
        display: `/img/quiz/image31.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Orient text horizontally on bar charts, rotating the bars if needed to make space.`,
        grade: 1,
        display: `/img/quiz/image5.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Don’t rotate bar labels, as it makes them difficult to read.`,
        grade: 0,
        display: `/img/quiz/image24.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Don’t place key data points off-screen, as it requires the user to scroll to see them.`,
        grade: 0,
        display: `/img/quiz/image32.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Annotate key points on the graph to describe the data. In this example, the highest and lowest data values are displayed.`,
        grade: 1,
        display: `/img/quiz/image22.png`,
        displayType: 'img',
      },
    ]
  },
  {
    key: nanoid(),
    question: `Which chart is more effective?`,
    score: 1,
    options: [
      {
        label: 'A',
        feedback: `Pie charts are best used when there are 2-3 items that make up a whole. Any more than that, and it’s difficult for the human eye to distinguish between the parts of a circle.`,
        grade: 0,
        display: `/img/quiz/image38.png`,
        displayType: 'img',
      },
      {
        label: 'B',
        feedback: `Bar charts will be your go-to chart for categorical comparison.`,
        grade: 1,
        display: `/img/quiz/image13.png`,
        displayType: 'img',
      },
    ]
  },
]