# salary-compass
# Salary Compass: Database Developer Compensation Analyzer

A JavaScript tool for analyzing database developer salary ranges in Cleveland, OH with a focus on aviation industry positions.

## Overview

This tool aggregates salary data from multiple sources to provide comprehensive insights for database developer positions in the Cleveland area. It calculates average compensation rates, displays ranges by experience level, and offers negotiation strategies based on specific qualifications.

## Features

- Aggregates salary data from multiple major sources (Indeed, Glassdoor, ZipRecruiter, Salary.com, PayScale, BLS)
- Calculates overall averages and salary ranges
- Segments compensation by experience level (entry to senior)
- Provides industry-specific considerations for aviation sector positions
- Analyzes the impact of specific qualifications on expected compensation
- Generates negotiation strategy recommendations

## Usage

```javascript
node cleveland-db-developer-salary-analyzer.js
```

The script outputs:
- Average hourly and annual salary figures
- Complete salary ranges across all sources
- Experience-based compensation breakdowns
- Industry-specific salary considerations
- Qualification analysis
- Recommended negotiation strategy

## Data Sources

The tool uses data from:
- Indeed
- Glassdoor
- ZipRecruiter
- Salary.com
- PayScale
- Bureau of Labor Statistics (Northeast Ohio)

## Customization

To customize this tool for other positions or regions:
1. Update the `clevelandSalaryData` object with relevant figures
2. Modify the `experienceLevels` object to match industry standards
3. Adjust the qualification analysis section to match your background

## Future Improvements

Potential enhancements:
- Add data visualization components
- Implement automated data scraping from salary sites
- Create comparison functionality for multiple positions/regions
- Build a simple UI for easier interaction

## License

MIT

## Author

Derek Gembus
