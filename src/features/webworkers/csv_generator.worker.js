onmessage = function (e) {
  const { job, options } = e.data;
  const result = doWork(job, options);

  postMessage(result);
};

function doWork(job, options) {
  switch (job) {
    case 'defaultCSV':
      let result = [];
      const columns = options.columns || [];
      const exportOptions = options.options || { rows: 100 };

      for (let i = 0; i < exportOptions.rows; i++) {
        let row = [];
        for (let j = 0; j < columns.length; j++) {
          row.push(columns[j].getNextValue());
        }
        result.push(row.join(';'));
      }

      return result.join('\n');

    default:
      throw new Error(`Webworker "csv_generator": Unknown Job: ${job}`);
  }
}
