# google-sheets-data-visualization
This code is designed to work with Google Sheets and the Google Apps Script platform. It includes several functions that help you manipulate and visualize data in a Google Sheet. Here's a summary of how to use it and what it does:
![image](https://user-images.githubusercontent.com/98264095/231945108-cb43d055-275e-427b-9a4f-e1c7a43940d6.png)

1. **copyDataForPlot(inputInteger)**: This function copies a specified number of rows of data from the "Data" sheet to the "DataForPlot" sheet. If no input is provided, it will use the value from cell J2 in the "Dashboard" sheet. It also writes the first and last values of the A-column from the "DataForPlot" sheet to cells J3 and J4 in the "Dashboard" sheet.

2. **updateAllGraphs()**: This function updates all the charts in the "Dashboard" sheet by looping through them and calling the `updateGraph` function for each chart.

3. **updateGraph(sheet, graph, chart)**: This function updates a single chart by recalculating the ranges for the data series and adjusting the y-axis range to include a 20% margin. It also sets the x-axis title to "Time" and the y-axis title to "Data".

4. **updateCharts()**: This is a utility function that calls `copyDataForPlot()` and `updateAllGraphs()` in sequence, which can be used to update both the data and charts in the Google Sheet with a single function call.

To use this code, you'll need to create a Google Sheet with sheets named "Data", "DataForPlot", and "Dashboard", and then create charts in the "Dashboard" sheet that reference the data in the "DataForPlot" sheet. You can then run the `updateCharts()` function to update the data and charts according to the logic in the code.

このコードは、GoogleシートとGoogle Apps Scriptプラットフォームで動作するように設計されています。Googleシート内でデータを操作・可視化するのに役立ついくつかの関数が含まれています。以下に、使用方法と機能の概要を説明します。

1. **copyDataForPlot(inputInteger)**: この関数は、"Data"シートから"DataForPlot"シートに指定された行数のデータをコピーします。入力が指定されていない場合は、"Dashboard"シートのJ2セルの値を使用します。また、"DataForPlot"シートのA列の最初と最後の値を"Dashboard"シートのJ3セルとJ4セルに書き込みます。

2. **updateAllGraphs()**: この関数は、"Dashboard"シート内のすべてのグラフを更新します。各グラフに対して`updateGraph`関数を呼び出すことでループ処理を行います。

3. **updateGraph(sheet, graph, chart)**: この関数は、データ系列の範囲を再計算し、Y軸の範囲を20%のマージンを含めて調整することで、単一のグラフを更新します。また、X軸のタイトルを「Time」、Y軸のタイトルを「Data」と設定します。

4. **updateCharts()**: この関数は、`copyDataForPlot()`と`updateAllGraphs()`を順番に呼び出すユーティリティ関数です。これにより、Googleシート内のデータとグラフを1つの関数呼び出しで更新できます。

このコードを使用するには、"Data"、"DataForPlot"、"Dashboard"という名前のシートが含まれるGoogleシートを作成し、"Dashboard"シート内に"DataForPlot"シートを参照するグラフを作成します。その後、`updateCharts()`関数を実行して、コードのロジックに従ってデータとグラフを更新できます。






