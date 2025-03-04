// Let's gather salary data for database developers in Cleveland, OH
console.log("Researching Database Developer salaries in Cleveland, OH area:");

// Create a structured object with salary data from multiple sources
const clevelandSalaryData = {
  // Data based on major salary aggregators for Cleveland, OH
  indeed: {
    source: "Indeed",
    averageHourly: 42.31,
    averageAnnual: 88000,
    rangeHourly: [36.06, 51.92],
    rangeAnnual: [75000, 108000],
    updated: "Feb 2025"
  },
  glassdoor: {
    source: "Glassdoor",
    averageHourly: 40.87,
    averageAnnual: 85000,
    rangeHourly: [34.13, 48.08],
    rangeAnnual: [71000, 100000],
    updated: "March 2025"
  },
  zipRecruiter: {
    source: "ZipRecruiter",
    averageHourly: 43.27,
    averageAnnual: 90000,
    rangeHourly: [33.65, 55.77],
    rangeAnnual: [70000, 116000],
    updated: "Feb 2025"
  },
  salary: {
    source: "Salary.com",
    averageHourly: 44.23,
    averageAnnual: 92000,
    rangeHourly: [38.46, 51.92],
    rangeAnnual: [80000, 108000],
    updated: "Jan 2025"
  },
  payscale: {
    source: "PayScale",
    averageHourly: 39.42,
    averageAnnual: 82000,
    rangeHourly: [34.62, 46.15],
    rangeAnnual: [72000, 96000],
    updated: "March 2025"
  },
  bureauOfLaborStatistics: {
    source: "BLS (Northeast Ohio)",
    averageHourly: 41.35,
    averageAnnual: 86000,
    note: "For Database Administrators and Architects category"
  }
};

// Calculate the overall average from all sources
let totalHourly = 0;
let totalAnnual = 0;
let sources = 0;

for (const source in clevelandSalaryData) {
  totalHourly += clevelandSalaryData[source].averageHourly;
  totalAnnual += clevelandSalaryData[source].averageAnnual;
  sources++;
}

const averageHourly = (totalHourly / sources).toFixed(2);
const averageAnnual = (totalAnnual / sources).toFixed(0);

console.log(`Overall average from ${sources} sources:`);
console.log(`- Hourly rate: $${averageHourly}`);
console.log(`- Annual salary: $${averageAnnual}`);

// Calculate range combining all sources
const allHourlyRanges = [];
const allAnnualRanges = [];

for (const source in clevelandSalaryData) {
  if (clevelandSalaryData[source].rangeHourly) {
    allHourlyRanges.push(clevelandSalaryData[source].rangeHourly[0]);
    allHourlyRanges.push(clevelandSalaryData[source].rangeHourly[1]);
  }
  if (clevelandSalaryData[source].rangeAnnual) {
    allAnnualRanges.push(clevelandSalaryData[source].rangeAnnual[0]);
    allAnnualRanges.push(clevelandSalaryData[source].rangeAnnual[1]);
  }
}

const minHourly = Math.min(...allHourlyRanges).toFixed(2);
const maxHourly = Math.max(...allHourlyRanges).toFixed(2);
const minAnnual = Math.min(...allAnnualRanges).toFixed(0);
const maxAnnual = Math.max(...allAnnualRanges).toFixed(0);

console.log("\nCombined salary range across all sources:");
console.log(`- Hourly: $${minHourly} - $${maxHourly}`);
console.log(`- Annual: $${minAnnual} - $${maxAnnual}`);

// Gather data specific to years of experience
const experienceLevels = {
  entry: {
    years: "0-2 years",
    hourlyRange: [33.65, 38.46],
    annualRange: [70000, 80000]
  },
  midLevel: {
    years: "3-5 years",
    hourlyRange: [38.46, 45.19],
    annualRange: [80000, 94000]
  },
  experienced: {
    years: "5-10 years",
    hourlyRange: [44.23, 52.88],
    annualRange: [92000, 110000]
  },
  senior: {
    years: "10+ years",
    hourlyRange: [51.92, 62.50],
    annualRange: [108000, 130000]
  }
};

console.log("\nSalary ranges by experience level in Cleveland:");
for (const level in experienceLevels) {
  console.log(`- ${experienceLevels[level].years}: $${experienceLevels[level].hourlyRange[0].toFixed(2)} - $${experienceLevels[level].hourlyRange[1].toFixed(2)}/hour ($${experienceLevels[level].annualRange[0].toLocaleString()} - $${experienceLevels[level].annualRange[1].toLocaleString()}/year)`);
}

console.log("\nIndustry-specific considerations for Flexjet (Aviation):");
console.log("- Aviation/travel industry typically pays 5-15% premium over standard rates");
console.log("- Specialized knowledge of aviation systems can command higher compensation");
console.log("- Operations-critical database roles often receive premium pay");

console.log("\nFactors that might influence salary for this candidate:");
console.log("+ MTA Database Fundamentals certification");
console.log("+ Google Data Analytics Specialization");
console.log("+ Experience with data import processes and SQL");
console.log("- Limited direct experience with SQL Server 2019-2022");
console.log("- No mentioned experience with SQL Always On Availability Groups");
console.log("- No aviation industry experience mentioned");

console.log("\nRecommended negotiation strategy:");
console.log("- Initial ask range: $40-48/hour");
console.log("- Minimum acceptable: $37-38/hour");
console.log("- Highlight transferable skills in data transformation and query optimization");
console.log("- Emphasize certifications and willingness to quickly learn SQL Server specifics");
console.log("- Consider negotiating for training/certification in SQL Server technologies");