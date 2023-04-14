# google-sheets-data-visualization
The code enables data visualization in a Google Sheets spreadsheet by copying a specified number of rows from a data sheet to a plot sheet and updating all the associated graphs in a dashboard sheet. This process ensures that the graphs display the latest data while allowing for customization of data ranges and chart configurations.

This code is designed to work with Google Sheets and the Google Apps Script platform. It includes several functions that help you manipulate and visualize data in a Google Sheet. Here's a summary of how to use it and what it does:

1. **copyDataForPlot(inputInteger)**: This function copies a specified number of rows of data from the "Data" sheet to the "DataForPlot" sheet. If no input is provided, it will use the value from cell J2 in the "Dashboard" sheet. It also writes the first and last values of the A-column from the "DataForPlot" sheet to cells J3 and J4 in the "Dashboard" sheet.

2. **updateAllGraphs()**: This function updates all the charts in the "Dashboard" sheet by looping through them and calling the `updateGraph` function for each chart.

3. **updateGraph(sheet, graph, chart)**: This function updates a single chart by recalculating the ranges for the data series and adjusting the y-axis range to include a 20% margin. It also sets the x-axis title to "Time" and the y-axis title to "Data".

4. **updateCharts()**: This is a utility function that calls `copyDataForPlot()` and `updateAllGraphs()` in sequence, which can be used to update both the data and charts in the Google Sheet with a single function call.

To use this code, you'll need to create a Google Sheet with sheets named "Data", "DataForPlot", and "Dashboard", and then create charts in the "Dashboard" sheet that reference the data in the "DataForPlot" sheet. You can then run the `updateCharts()` function to update the data and charts according to the logic in the code.

![image](https://user-images.githubusercontent.com/98264095/231945108-cb43d055-275e-427b-9a4f-e1c7a43940d6.png)



