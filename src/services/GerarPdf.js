import jsPDF from 'jspdf';
import 'jspdf-autotable'
import Logo from '../assets/img/logo.png';
import plannercron from '../assets/img/plannercron.png'

function GerarPdf(dados) {
    const doc = new jsPDF('landscape');  

    doc.addImage(Logo, "PNG", 5, 5, 25, 25);

    doc.addImage(plannercron, "PNG", 100, 5, 100, 25);

    doc.autoTable({
        head: [['Segunda','Terça', 'Quarta', 'Quinta', 'Sexta']],
        theme: 'grid',
        headStyles: {fillColor: [19, 41, 61], textColor: [255, 255, 255]},
        margin: {top: 40, bottom: 10},
        styles: { halign: 'center',  fillColor: [238, 238, 238], textColor: [0, 0, 0], fontSize: 14},
        body:  
          dados,
    });
    if (dados.length != 0) {
        doc.save("Cronograma.pdf");
    }
}

export default GerarPdf;