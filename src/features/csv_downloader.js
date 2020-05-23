import store from '@/store/store';
import GeneratorWorker from '@/features/webworkers/csv_generator.worker';

export class CSVDownloader {
  constructor() {}

  generateAndDownload() {
    const content = this.generateContent();
    // let rows = ['hallo;was;geht?'];
    // const content = rows.join('\n');
  }

  downloadContent(content) {
    const link = document.createElement('a');
    link.href = content;
    link.download = 'export.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  generateContent() {
    console.log(store.getters);

    const columns = store.getters['column/getColumns'];

    const options = {
      columns,
      options: {
        rows: 100,
      },
    };

    let worker = new GeneratorWorker();
    worker.addEventListener('message', (event) => {
      const data = event.data;

      const uriContent = 'data:text/csv;charset=utf-8,' + data;

      this.downloadContent(uriContent);
    });
    worker.addEventListener('error', (err) => {
      console.error('Worker threw error: ', err);
    });

    worker.postMessage({ job: 'defaultCSV', options });
  }
}
