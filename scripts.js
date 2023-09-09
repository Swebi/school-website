

function pdfchange(subject) 
{
    var pdfContainer = document.getElementById("pdf");
  
    if (subject == 'maths') 
    {
      pdfContainer.data = 'pdfs/maths.pdf';
    }
    else if (subject == 'physics')
    {
        pdfContainer.data = 'pdfs/physics.pdf';
    }
    else if (subject == 'chemistry')
    {
        pdfContainer.data = 'pdfs/chemistry.pdf';
    }
}