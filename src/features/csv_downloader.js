import store from '@/store/store';
import GeneratorWorker from '@/features/webworkers/csv_generator.worker';

export class CSVDownloader {
  constructor() {}

  /**
   * Downloads the specified content.
   * @param {string} content
   */
  downloadContent(content) {
    const link = document.createElement('a');
    link.href = content;
    link.download = 'export.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  /**
   * Generates random CSV-data and downloads it.
   */
  generateAndDownload() {
    store.commit('UPDATE_ISLOADING', true);
    const columns = store.getters['column/getColumns'];

    const options = {
      columns,
      options: {
        rows: store.getters['rowCount'],
      },
    };

    let worker = new GeneratorWorker();
    worker.addEventListener('message', (event) => {
      let data = JSON.parse(event.data);

      const includeHeader = store.getters['includeHeader'];
      if (includeHeader) {
        const header = store.getters['column/getColumns'].map((column) => column.name).join(';');
        data = header + '\n' + data;
      }

      const uriContent = 'data:text/plain;charset=utf-8,' + encodeURI(data);
      // const uriContent = encodeURI(data);

      this.downloadContent(uriContent);
      store.commit('UPDATE_ISLOADING', false);
    });
    worker.addEventListener('error', (err) => {
      console.error('Worker threw error: ', err);
    });

    worker.postMessage(JSON.stringify({ job: 'defaultCSV', options }));
  }
}
