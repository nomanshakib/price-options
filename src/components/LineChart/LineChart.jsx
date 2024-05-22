import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
      { id: 1, name: "Alice", physics: 82, chemistry: 78, math: 85 },
      { id: 2, name: "Bob", physics: 75, chemistry: 85, math: 78 },
      { id: 3, name: "Charlie", physics: 90, chemistry: 88, math: 92 },
      { id: 4, name: "David", physics: 70, chemistry: 72, math: 74 },
      { id: 5, name: "Eva", physics: 88, chemistry: 91, math: 88 },
      { id: 6, name: "Frank", physics: 80, chemistry: 79, math: 81 },
      { id: 7, name: "Grace", physics: 95, chemistry: 94, math: 95 },
      { id: 8, name: "Hannah", physics: 68, chemistry: 64, math: 67 },
      { id: 9, name: "Ian", physics: 78, chemistry: 75, math: 79 },
      { id: 10, name: "Jack", physics: 84, chemistry: 82, math: 83 },
    ];

    return (
      <div className="mx-12 my-6">
        <h1 className="text-3xl text-center font-extrabold bg-cyan-400 p-6 mb-6 ">
          Reachart Practice With Student Marks :
        </h1>
        <LChart className='m-auto' width={800} height={400} data={subjectMarksData}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Line dataKey="physics" stroke="red"></Line>
          <Line dataKey="chemistry" stroke="blue"></Line>
          <Line dataKey="math" stroke="green"></Line>
        </LChart>
      </div>
    );
};

export default LineChart;