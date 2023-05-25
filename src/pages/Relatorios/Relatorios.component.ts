import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { RelatorioService } from 'src/Services/Relatorio/relatorio.service';
import { BotaoFileComponent } from 'src/components/BotaoFile/BotaoFile.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-Relatorios',
  templateUrl: './Relatorios.component.html',
  styleUrls: ['./Relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {
  @ViewChild(BotaoFileComponent) botoesDownload: BotaoFileComponent;
  subscriptions$ = new Subscription();
  relatorioPDFBase64: string

  constructor(private relatorioService: RelatorioService ) { }

  ngOnInit() {
  }


  convertBase64toPDF(base64String: string) {
    const pdfData = atob(base64String);
    const byteCharacters = pdfData.split('').map((char) => char.charCodeAt(0));
    const byteNumbers = new Uint8Array(byteCharacters);
    const blob = new Blob([byteNumbers], { type: 'application/pdf' });
    saveAs(blob, `Relatorio.pdf`);
  }

  getDownloadRelatorio() {
    this.subscriptions$.add(
      this.relatorioService
        .getDownloadPDFRelatorio()
        .subscribe({
          next: ({ data }) => {
            this.relatorioPDFBase64 = data;
            this.convertBase64toPDF(this.relatorioPDFBase64);
          }
        })
    );

}
}
