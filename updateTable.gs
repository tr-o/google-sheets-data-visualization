function updateDashBoard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dataForPlotSheet = ss.getSheetByName("DataForPlot");
  const dashboardSheet = ss.getSheetByName("Dashboard");

  const lastRow = dataForPlotSheet.getLastRow();
  const lastColumn = dataForPlotSheet.getLastColumn();
  const dataRange = dataForPlotSheet.getRange(1, 1, lastRow, lastColumn);
  const dataValues = dataRange.getValues();

  const dataKeys = dataValues[0].slice(1);
  const lastNonEmptyValues = [];
  const correspondingAValues = [];
  const averages = [];
  const maxValues = [];
  const maxAValues = [];
  const minValues = [];
  const minAValues = [];
  const maxMinDifferences = [];

  for (let col = 1; col < lastColumn; col++) {
    let sum = 0;
    let count = 0;
    let max = -Infinity;
    let min = Infinity;
    let maxAValue;
    let minAValue;
    let lastNonEmptyValue;
    let correspondingAValue;

    for (let row = 1; row < lastRow; row++) {
      const value = dataValues[row][col];

      if (value !== '') {
        sum += value;
        count++;

        if (value > max) {
          max = value;
          maxAValue = dataValues[row][0];
        }

        if (value < min) {
          min = value;
          minAValue = dataValues[row][0];
        }

        lastNonEmptyValue = value;
        correspondingAValue = dataValues[row][0];
      }
    }

    lastNonEmptyValues.push([lastNonEmptyValue]);
    correspondingAValues.push([correspondingAValue]);
    averages.push([sum / count]);
    maxValues.push([max]);
    maxAValues.push([maxAValue]);
    minValues.push([min]);
    minAValues.push([minAValue]);
    maxMinDifferences.push([max - min]);
  }

  dashboardSheet.getRange(8, 9, dataKeys.length, 1).setValues(dataKeys.map(key => [key]));
  dashboardSheet.getRange(8, 10, lastNonEmptyValues.length, 1).setValues(lastNonEmptyValues);
  dashboardSheet.getRange(8, 11, correspondingAValues.length, 1).setValues(correspondingAValues);
  dashboardSheet.getRange(8, 12, averages.length, 1).setValues(averages);
  dashboardSheet.getRange(8, 13, maxValues.length, 1).setValues(maxValues);
  dashboardSheet.getRange(8, 14, maxAValues.length, 1).setValues(maxAValues);
  dashboardSheet.getRange(8, 15, minValues.length, 1).setValues(minValues);
  dashboardSheet.getRange(8, 16, minAValues.length, 1).setValues(minAValues);
  dashboardSheet.getRange(8, 17, maxMinDifferences.length, 1).setValues(maxMinDifferences);
}
