# google-sheets-data-visualization

This repository contains a set of Google Apps Script (GAS) functions that enable you to create interactive data visualizations in Google Sheets. The project consists of two script files (`updateCharts.gs` and `updateTable.gs`) and a sample spreadsheet file (`sample_spreadsheet.xlsx`) containing example data and code.

![image](https://user-images.githubusercontent.com/98264095/231945108-cb43d055-275e-427b-9a4f-e1c7a43940d6.png)
*Sample data visualization created using the provided Google Apps Script functions.*

## Features

- Automatically update charts based on the latest data.
- Customize the number of data points to be plotted.
- Display statistics for each data series, such as average, maximum, and minimum values.

## Installation

1. Create a new Google Sheet or open an existing one where you'd like to implement the data visualization.
2. Click on `Extensions` > `Apps Script` to open the Google Apps Script editor.
3. Delete any existing code in the `Code.gs` file.
4. Create two new script files named `updateCharts.gs` and `updateTable.gs` by clicking on the `+` icon next to `Files`.
5. Copy the contents of `updateCharts.gs` and `updateTable.gs` from this repository into the corresponding files in the Apps Script editor.
6. Save the script by clicking on the floppy disk icon or pressing `CTRL + S` (`CMD + S` on macOS).
7. Adjust the data and charts according to your needs.

## Sample Spreadsheet

The `sample_spreadsheet.xlsx` file is a sample spreadsheet containing sample data and code that helps you test the functionality quickly.

## Usage

The following functions are available in this project:

- `copyDataForPlot(inputInteger)`: Copies a specified number of data points from the "Data" sheet to the "DataForPlot" sheet. The `inputInteger` parameter determines the number of data points to copy. If not provided, the value from cell "J2" in the "Dashboard" sheet will be used.
- `updateAllGraphs()`: Updates all graphs in the "Dashboard" sheet based on the data in the "DataForPlot" sheet.
- `updateGraph(sheet, graph, chart)`: Updates a specific graph in the "Dashboard" sheet based on the data in the "DataForPlot" sheet.
- `updateCharts()`: A convenience function that calls both `copyDataForPlot()` and `updateAllGraphs()`.
- `updateTable()`: Updates the table in the "Dashboard" sheet with statistics for each data series, such as average, maximum, and minimum values.

To update the charts and table manually, you can run the `updateCharts()` and `updateTable()` functions directly from the Apps Script editor by selecting the function from the dropdown menu and clicking the play button.

## Dependencies

This project relies on Google Apps Script, which is built into Google Sheets. No external dependencies are required.







