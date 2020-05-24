import { ColumnTypeRouter } from '@/features/column_type';

onmessage = function (e) {
  const { job, options } = e.data;
  const result = doWork(job, options);

  postMessage(result);
};

function doWork(job, options) {
  let result = [];
  const columns = options.columns || [];
  const exportOptions = options.options || { rows: 100 };

  switch (job) {
    case 'defaultCSV':
      // set "getNextValue()" because functions get lost when sending the columns to the worker thread
      columns.forEach((column) => {
        const columnClass = ColumnTypeRouter.getClass(column.identifier);
        column.getNextValue = new columnClass().getNextValue;
      });

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
