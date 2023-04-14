function copyDataForPlot(inputInteger) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dataSheet = ss.getSheetByName("Data");
  const dataForPlotSheet = ss.getSheetByName("DataForPlot");
  const dashboardSheet = ss.getSheetByName("Dashboard");

  const lastRow = dataSheet.getLastRow();
  const lastColumn = dataSheet.getLastColumn();
  const desiredDataPoints = (inputInteger !== undefined) ? inputInteger : dashboardSheet.getRange("J2").getValue();
  const numRows = Math.min(desiredDataPoints, lastRow - 1);

  // Clear the DataForPlot sheet
  dataForPlotSheet.clear();

  // Copy the header row
  dataSheet.getRange(1, 1, 1, lastColumn).copyTo(dataForPlotSheet.getRange(1, 1));

  // Copy the data rows
  dataSheet.getRange(lastRow - numRows + 1, 1, numRows, lastColumn).copyTo(dataForPlotSheet.getRange(2, 1));

  // Write the values of the A-column from dataForPlotSheet
  const firstCellValue = dataForPlotSheet.getRange(2, 1).getValue();
  const lastCellValue = dataForPlotSheet.getRange(dataForPlotSheet.getLastRow(), 1).getValue();

  dashboardSheet.getRange("J3").setValue(firstCellValue);
  dashboardSheet.getRange("J4").setValue(lastCellValue);
}

function updateAllGraphs() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("DataForPlot");
  const graph = ss.getSheetByName("Dashboard");

  // Get all the charts in the Dashboard sheet
  const charts = graph.getCharts();

  // Update all the charts
  for (const chart of charts) {
    updateGraph(sheet, graph, chart);
  }
}

function updateGraph(sheet, graph, chart) {
  const lastRow = sheet.getLastRow();
  const numRows = lastRow - 1;

  const oldRanges = chart.getRanges();
  const newRanges = oldRanges.map(range => {
    const column = range.getColumn();
    return sheet.getRange(1, column, numRows + 1, 1);
  });

  const minMaxValues = newRanges.slice(1).reduce((acc, range) => {
    const values = range.getValues().slice(1).flat();
    const min = Math.min(...values);
    const max = Math.max(...values);
    return {
      min: Math.min(acc.min, min),
      max: Math.max(acc.max, max),
    };
  }, { min: Infinity, max: -Infinity });

  const margin = (minMaxValues.max - minMaxValues.min) * 0.2; // 20% margin
  const minValue = minMaxValues.min - margin;
  const maxValue = minMaxValues.max + margin;

  const newChartBuilder = chart.modify()
    .asLineChart()
    .setNumHeaders(1)
    .clearRanges()
    .setOption('colors', ['red', 'blue', 'green'])
    .setXAxisTitle('Time') // Set the label for the x-axis
    .setYAxisTitle('Data') // Set the label for the y-axis
    .setOption('vAxis', { minValue: minValue, maxValue: maxValue }); // Set the Y-axis range with margin

  newRanges.forEach(range => {
    newChartBuilder.addRange(range);
  });

  const newChart = newChartBuilder.build();
  graph.updateChart(newChart);
}


