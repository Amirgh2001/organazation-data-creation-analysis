
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form elements by their IDs
    const formElements = document.querySelectorAll("#myForm input, #myForm select");
    
    // Create an array to store form values
    const values = [];
    formElements.forEach((element) => {
      values.push(element.value);
    });

    // Convert values array to CSV format
    const csvData = values.join(",") + "\n"; // Concatenate values with commas and add a newline at the end

    // Create a Blob with the CSV data
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

    // Create a download link for the CSV file
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", "form_data.csv");
    link.style.display = "none";

    // Append the link to the document and click it to trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up: remove the link
    document.body.removeChild(link);
}