// src/components/ContributionGraph.tsx
import React from "react";
import GitHubCalendar, { ThemeInput } from "react-github-calendar";

const customTheme: ThemeInput = {
  light: [
    "#2d333b", // grade0
    "#0e4429", // grade1
    "#006d32", // grade2
    "#26a641", // grade3
    "#39d353", // grade4
  ],

  dark: [
    "#2d333b", // grade0
    "#0e4429", // grade1
    "#006d32", // grade2
    "#26a641", // grade3
    "#39d353", // grade4
  ],
};

const ContributionGraph: React.FC = () => {
  return (
    <>
      <h2 className="text-xl text-untuk-label font-bold  flex justify-center items-center pt-8">
        Contributions in the Last Year
      </h2>
      <div className="p-4 flex pl-16 ml-10 justify-center">
        <GitHubCalendar
          username="Azissa"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={customTheme}
        />
      </div>
    </>
  );
};

export default ContributionGraph;
